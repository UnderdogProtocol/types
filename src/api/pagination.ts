import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { ZodTypeAny, z } from "zod";

import { transactionSchema, nftSchema, projectSchema, requestSchema, publicKeyValueSchema } from "../models";

extendZodWithOpenApi(z);

export const paginatedQuerySchema = z.object({
  page: z.coerce.number().optional().default(1),
  limit: z.coerce.number().lte(100).optional().default(10),
});

export type PaginatedQuery = z.infer<typeof paginatedQuerySchema>;

export function createPaginatedResponseSchema<T extends ZodTypeAny>(schema: T) {
  return z.object({
    results: z.array(schema),
    page: z.number().openapi({ description: "Page number", example: 1 }),
    limit: z.number().openapi({ description: "Number per page", example: 10 }),
    totalPages: z.number().openapi({ description: "Total number of pages", example: 1 }),
    totalResults: z.number().openapi({ description: "Total number of results", example: 1 }),
  });
}

export const projectPaginatedResponseSchema =
  createPaginatedResponseSchema<typeof projectSchema>(projectSchema);
export const nftPaginatedResponseSchema = createPaginatedResponseSchema<typeof nftSchema>(nftSchema);
export const requestPaginatedResponseSchema =
  createPaginatedResponseSchema<typeof requestSchema>(requestSchema);

export const transactionResponseSchema = transactionSchema
  .omit({ walletAddress: true })
  .merge(z.object({ walletAddress: publicKeyValueSchema }));

export const transactionPaginatedResponseSchema =
  createPaginatedResponseSchema<typeof transactionResponseSchema>(transactionResponseSchema);
