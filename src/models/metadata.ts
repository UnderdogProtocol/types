import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { PublicKey } from "@solana/web3.js";
import { z } from "zod";

import { registry } from "../openapi";

extendZodWithOpenApi(z);

export const idSchema = z.number().or(z.string()).pipe(z.coerce.number().int()).openapi({ type: "integer" });

export const sellerFeeBasisPointsSchema = z.number().int().min(0).max(10000).openapi({
  type: "integer",
  description: "Creator royalties in basis points - 100 basis points = 1%",
  example: 100,
});

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
    image: z.string().openapi({
      description:
        "Image for your NFT. When creating an NFT, this can be a base64 encoded string or a URL pointing to an image.",
      example: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
    }),
    animationUrl: z.string().optional().openapi({
      description: "URL pointing to the asset's animation.",
      example: "https://i.imgur.com/mGfz7Ig.mp4",
    }),
    externalUrl: z.string().optional().openapi({
      description: "URL pointing to an external URL defining the asset",
      example: "https://app.underdogprotocol.com",
    }),
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
