import { z } from "zod";

import { createPaginatedResponseSchema, paginatedQuerySchema } from "../api";
import { collectionSchema, publicKeyValueSchema, publicNftSchema } from "../models";
import { createSftInputSchema } from "./sft";

export const getCollectionRequestSchema = z.object({
  params: z.object({
    mintAddress: publicKeyValueSchema,
  }),
  query: paginatedQuerySchema,
});

export type GetCollectionRequest = z.infer<typeof getCollectionRequestSchema>;

export const getCollectionResponseSchema = collectionSchema.merge(
  z.object({ nfts: createPaginatedResponseSchema(publicNftSchema) })
);

export type GetCollectionResponse = z.infer<typeof getCollectionResponseSchema>;

export const mintToCollectionRequestSchema = z.object({
  params: z.object({
    mintAddress: publicKeyValueSchema,
  }),
  body: createSftInputSchema,
});

export type MintToCollectionRequest = z.infer<typeof mintToCollectionRequestSchema>;
