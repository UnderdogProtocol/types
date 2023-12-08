import { z } from "zod";

import { memberPaginatedResponseSchema, orgPaginatedResponseSchema, paginatedQuerySchema } from "../api";
import { idSchema, memberSchema, orgSchema, publicKeyValueSchema } from "../models";

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
  params: z.object({
    orgId: idSchema,
  }),
  body: z.object({
    name: z.string(),
  }),
});
export type UpdateOrgRequest = z.infer<typeof updateOrgRequestSchema>;

export const updateOrgResponseSchema = orgSchema;
export type UpdateOrgResponse = z.infer<typeof updateOrgResponseSchema>;

export const getMembersRequestSchema = z.object({
  query: paginatedQuerySchema,
  params: z.object({
    orgId: idSchema,
  }),
});
export type GetMembersRequest = z.infer<typeof getMembersRequestSchema>;

export const getMembersResponseSchema = memberPaginatedResponseSchema;
export type GetMembersResponse = z.infer<typeof getMembersResponseSchema>;

export const createMemberRequestSchema = z.object({
  params: z.object({
    orgId: idSchema,
  }),
  body: z.object({
    name: z.string(),
    memberAddress: publicKeyValueSchema,
  }),
});
export type CreateMemberRequest = z.infer<typeof createMemberRequestSchema>;

export const createMemberResponseSchema = memberSchema;
export type CreateMemberResponse = z.infer<typeof createMemberResponseSchema>;
