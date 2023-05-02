import { z } from "zod";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";

extendZodWithOpenApi(z);

export enum NetworkEnum {
  Devnet = 'DEVNET',
  Localnet = 'LOCALNET',
  Mainnet = 'MAINNET'
}

export const NetworkEnumSchema = z.nativeEnum(NetworkEnum);

export const idSchema = z.coerce.number().int().openapi({ type: "integer" });

export const publicKeyValueSchema = z
  .string()
  .regex(/^[A-HJ-NP-Za-km-z1-9]*$/)
  .openapi({
    description: "Base-58 encoded string representing an on-chain address",
    example: "EBeLw5jEdrEgDe17BdKGW2MizzGxtxigEuAGvYC7VzDp",
  });

export const MAX_NAME_LENGTH = 32;
export const MAX_SYMBOL_LENGTH = 10;

export const metadataSchema = z.object({
  name: z
    .string()
    .max(MAX_NAME_LENGTH, { message: `Name must be less than ${MAX_NAME_LENGTH} characters` })
    .openapi({ description: "Name stored as on-chain metadata", example: "NFT #1" }),
  symbol: z
    .string()
    .max(MAX_SYMBOL_LENGTH, { message: `Symbol must be less than ${MAX_SYMBOL_LENGTH} characters` })
    .optional()
    .openapi({ description: "Symbol stored as on-chain metadata", example: "NFT" }),
  description: z
    .string()
    .optional()
    .openapi({ description: "Description stored in the metadata", example: "This is my first NFT" }),
  image: z
    .string()
    .openapi({ description: "Image URL for your NFT", example: "https://example.com/image.png" }),
  animationUrl: z
    .string()
    .optional()
    .openapi({ description: "Animation URL for your NFT", example: "https://example.com/animation.mp4" }),
  attributes: z
    .record(z.string())
    .optional()
    .openapi({
      description: "Key-value pairs of your NFT attributes",
      example: { Points: "40000", Nickname: "LeGoat" },
    }),
});

export type Metadata = z.infer<typeof metadataSchema>;
