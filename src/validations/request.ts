import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import { paginatedQuerySchema, requestPaginatedResponseSchema } from "../api";
import { requestSchema } from "../models";

extendZodWithOpenApi(z);

export const getRequestsRequestSchema = z.object({
  query: paginatedQuerySchema.merge(
    z.object({ method: z.string().optional(), endpoint: z.string().optional() })
  ),
});
export type GetRequestsRequest = z.infer<typeof getRequestsRequestSchema>;

export const getRequestsResponseSchema = requestPaginatedResponseSchema;
export type GetRequestsResponse = z.infer<typeof getRequestsResponseSchema>;

export const getRequestRequestSchema = z.object({
  params: z.object({
    requestId: z.string(),
  }),
});
export type GetRequestRequest = z.infer<typeof getRequestRequestSchema>;

export const getRequestResponseSchema = requestSchema;
export type GetRequestResponse = z.infer<typeof getRequestResponseSchema>;
