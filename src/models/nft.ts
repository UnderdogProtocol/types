import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import { base58PublicKeySchema, metadataSchema } from "./metadata";

extendZodWithOpenApi(z);

export const nftSchema = metadataSchema.partial().merge(
  z.object({
    id: z.number().openapi({ description: "Unique ID for an NFT in a Project" }),
    projectId: z.number().optional().openapi({ description: "The ID of the Project the NFT is part of" }),
    transferable: z.boolean().optional().openapi({
      description: "Whether or not the NFT can be transferred based on the Project its a part of",
    }),
    compressed: z.boolean().optional().openapi({
      description: "Whether or not the NFTs in the Project are compressed",
    }),
    delegated: z.boolean().optional(),
    mintAddress: z.string(),
    ownerAddress: base58PublicKeySchema
      .nullish()
      .openapi({ description: "Wallet address for the NFT's owner" }),
    claimerAddress: base58PublicKeySchema.nullish().openapi({
      description: "Wallet address allowed to claim the NFT",
    }),
    status: z.string(),
  })
);

export const publicNftSchema = nftSchema.omit({ id: true, projectId: true });

export type Nft = z.infer<typeof nftSchema>;
