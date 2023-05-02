import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { ZodTypeAny, z } from "zod";

import { nftSchema, projectSchema } from "../models";

extendZodWithOpenApi(z);

export const paginatedQuerySchema = z.object({
  page: z.coerce.number().optional().default(1),
  limit: z.coerce.number().lte(100).optional().default(10),
});

export type PaginatedQuery = z.infer<typeof paginatedQuerySchema>;

function createPaginatedResponseSchema<T extends ZodTypeAny>(schema: T) {
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
