import { z } from "zod";

import { createPaginatedResponseSchema, paginatedQuerySchema, sortQuerySchema } from "../api";
import { base58PublicKeySchema, collectionSchema, publicNftSchema, statusEnumSchema } from "../models";
import { nftsQuerySchema } from "./nft";

export const getCollectionsRequestSchema = z.object({
  query: paginatedQuerySchema.merge(z.object({ ownerAddress: base58PublicKeySchema })),
});
export type GetCollectionsRequest = z.infer<typeof getCollectionsRequestSchema>;

export const getCollectionsResponseSchema = createPaginatedResponseSchema(collectionSchema);
export type GetCollectionsResponse = z.infer<typeof getCollectionsResponseSchema>;

export const getCollectionRequestSchema = z.object({
  params: z.object({ mintAddress: base58PublicKeySchema }),
});
export type GetCollectionRequest = z.infer<typeof getCollectionRequestSchema>;

export const getCollectionResponseSchema = collectionSchema;
export type GetCollectionResponse = z.infer<typeof getCollectionResponseSchema>;

export const getCollectionNftsRequestSchema = getCollectionRequestSchema.merge(
  z.object({ query: nftsQuerySchema })
);
export type GetCollectionNftsRequest = z.infer<typeof getCollectionNftsRequestSchema>;

export const getCollectionNftsResponseSchema = createPaginatedResponseSchema(publicNftSchema);
export type GetCollectionNftsResponse = z.infer<typeof getCollectionNftsResponseSchema>;

export const createCollectionClaimTransactionRequestSchema = z.object({
  params: z.object({ mintAddress: base58PublicKeySchema }),
  body: z.object({ account: base58PublicKeySchema }),
});

export type CreateCollectionClaimTransactionRequest = z.infer<
  typeof createCollectionClaimTransactionRequestSchema
>;
export const createCollectionClaimTransactionResponseSchema = z.object({
  transaction: z.string(),
  mintAddress: base58PublicKeySchema,
  lastValidBlockHeight: z.number(),
});

export type CreateCollectionClaimTransactionResponse = z.infer<
  typeof createCollectionClaimTransactionResponseSchema
>;
