import { z } from "zod";

import { memberPaginatedResponseSchema, paginatedQuerySchema } from "../api";
import { idSchema } from "../models";

export const orgMembersRequestSchema = z.object({
  query: paginatedQuerySchema,
  params: z.object({
    orgId: idSchema,
  }),
});

export type OrgMembersRequest = z.infer<typeof orgMembersRequestSchema>;

export const orgMembersResponseSchema = memberPaginatedResponseSchema;
export type OrgMembersResponse = z.infer<typeof orgMembersResponseSchema>;
