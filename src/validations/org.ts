import { z } from "zod";

import { orgPaginatedResponseSchema, paginatedQuerySchema } from "../api";
import { idSchema, orgSchema } from "../models";

export const orgParams = z.object({ orgId: idSchema });

export const getOrgsRequestSchema = z.object({
  query: paginatedQuerySchema,
});
export type GetOrgsRequest = z.infer<typeof getOrgsRequestSchema>;

export const getOrgsResponseSchema = orgPaginatedResponseSchema;
export type GetOrgsResponse = z.infer<typeof getOrgsResponseSchema>;

export const getOrgRequestSchema = z.object({ params: z.object({ orgId: idSchema }) });
export type GetOrgRequest = z.infer<typeof getOrgRequestSchema>;

export const getOrgResponseSchema = orgSchema;
export type GetOrgResponse = z.infer<typeof getOrgResponseSchema>;

export const getOrgStatsRequestSchema = z.object({
  params: z.object({ orgId: idSchema }),
  query: z.object({
    startDate: z.string().datetime().optional(),
    endDate: z.string().datetime().optional(),
  }),
});
export type GetOrgStatsRequest = z.infer<typeof getOrgStatsRequestSchema>;

export const getOrgStatsResponseSchema = z.object({
  nfts: z.number(),
  projects: z.number(),
});
export type GetOrgStatsResponse = z.infer<typeof getOrgStatsResponseSchema>;

export const updateOrgRequestSchema = z.object({
  params: orgParams,
  body: orgSchema.pick({ name: true }),
  // body: orgSchema.pick({ name: true, priority: true }),
});
export type UpdateOrgRequest = z.infer<typeof updateOrgRequestSchema>;

export const updateOrgResponseSchema = orgSchema;
export type UpdateOrgResponse = z.infer<typeof updateOrgResponseSchema>;
