import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { PublicKey } from "@solana/web3.js";
import { z } from "zod";

import { registry } from "../openapi";

extendZodWithOpenApi(z);

export enum NetworkEnum {
  Devnet = "DEVNET",
  Localnet = "LOCALNET",
  Mainnet = "MAINNET",
}

export const NetworkEnumSchema = z.nativeEnum(NetworkEnum);

export enum StatusEnum {
  Burned = "burned",
  Confirmed = "confirmed",
  Failed = "failed",
  Pending = "pending",
  Processing = "processing",
}

export const StatusEnumSchema = z.nativeEnum(StatusEnum);

export const idSchema = z.number().or(z.string()).pipe(z.coerce.number().int()).openapi({ type: "integer" });

export const publicKeyValueSchema = z
  .union([z.string().regex(/^[A-HJ-NP-Za-km-z1-9]*$/), z.instanceof(PublicKey)])
  .transform((value) => value.toString())
  .openapi({
    type: "string",
    description: "Base-58 encoded string representing an on-chain address",
    example: "EBeLw5jEdrEgDe17BdKGW2MizzGxtxigEuAGvYC7VzDp",
  });

export const publicKeySchema = publicKeyValueSchema
  .transform((value) => new PublicKey(value))
  .openapi({ type: "string" });

export const MAX_NAME_LENGTH = 32;
export const MAX_SYMBOL_LENGTH = 10;

export const metadataSchema = registry.register(
  "Metadata",
  z.object({
    name: z
      .string()
      .max(MAX_NAME_LENGTH, { message: `Name must be less than ${MAX_NAME_LENGTH} characters` })
      .openapi({ description: "Name stored as on-chain metadata", example: "Underdog NFT" }),
    symbol: z
      .string()
      .max(MAX_SYMBOL_LENGTH, { message: `Symbol must be less than ${MAX_SYMBOL_LENGTH} characters` })
      .optional()
      .openapi({ description: "Symbol stored as on-chain metadata", example: "UPDG" }),
    description: z.string().optional().openapi({
      description: "Description stored in the metadata",
      example: "I minted this NFT with the Underdog API",
    }),
    image: z
      .string()
      .openapi({ description: "Image URL for your NFT", example: "https://example.com/image.png" }),
    animationUrl: z
      .string()
      .optional()
      .openapi({ description: "Animation URL for your NFT", example: "https://example.com/animation.mp4" }),
    attributes: z
      .record(z.string(), z.union([z.string(), z.number()]))
      .optional()
      .openapi({
        description: "Key-value pairs of your NFT attributes",
        example: { Points: "40000", Nickname: "LeGoat" },
      }),
  })
);

export type Metadata = z.infer<typeof metadataSchema>;
