import { z } from "zod";

import { createPaginatedResponseSchema, paginatedQuerySchema, searchQuerySchema } from "../api";
import { base58PublicKeySchema, collectionSchema, publicNftSchema } from "../models";

export const getCollectionsRequestSchema = z.object({
  query: paginatedQuerySchema.merge(z.object({ ownerAddress: base58PublicKeySchema })),
});

export type GetCollectionsRequest = z.infer<typeof getCollectionsRequestSchema>;

export const getCollectionsResponseSchema = createPaginatedResponseSchema(collectionSchema);

export type GetCollectionsResponse = z.infer<typeof getCollectionsResponseSchema>;

export const getCollectionRequestSchema = z.object({
  params: z.object({ mintAddress: base58PublicKeySchema }),
  query: paginatedQuerySchema.merge(
    z.object({
      ownerAddress: base58PublicKeySchema.optional(),
      identifier: z.string().optional(),
      namespace: z.string().optional(),
    })
  ),
});

export type GetCollectionRequest = z.infer<typeof getCollectionRequestSchema>;

export const getCollectionResponseSchema = collectionSchema.merge(
  z.object({ nfts: createPaginatedResponseSchema(publicNftSchema) })
);

export type GetCollectionResponse = z.infer<typeof getCollectionResponseSchema>;

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
});

export type CreateCollectionClaimTransactionResponse = z.infer<
  typeof createCollectionClaimTransactionResponseSchema
>;
