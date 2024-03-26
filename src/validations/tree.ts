import { z } from "zod";

import { createPaginatedResponseSchema, paginatedQuerySchema } from "../api";
import { treeSchema } from "../models/tree";

export const createTreeRequestSchema = z.object({
  body: z.object({
    maxDepth: z.number().min(14).max(14),
    maxBufferSize: z.number().min(64).max(64),
    canopyDepth: z.number().min(9).max(9),
  }),
});

export type CreateTreeRequest = z.infer<typeof createTreeRequestSchema>;

export const createTreeResponseSchema = treeSchema;

export type CreateTreeResponse = z.infer<typeof createTreeResponseSchema>;

export const getTreesRequestSchema = z.object({
  query: paginatedQuerySchema,
});

export type GetTreesRequest = z.infer<typeof getTreesRequestSchema>;

export const getTreesResponseSchema = createPaginatedResponseSchema<typeof treeSchema>(treeSchema);

export type GetTreesResponse = z.infer<typeof getTreesResponseSchema>;
