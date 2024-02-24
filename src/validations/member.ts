import { z } from "zod";

import { memberPaginatedResponseSchema, paginatedQuerySchema } from "../api";
import { base58PublicKeySchema, memberSchema } from "../models";
import { orgParams } from "./org";

export const createMemberRequestSchema = z.object({
  params: orgParams,
  body: z.object({ name: z.string(), memberAddress: base58PublicKeySchema }),
});
export type CreateMemberRequest = z.infer<typeof createMemberRequestSchema>;

export const createMemberResponseSchema = memberSchema;
export type CreateMemberResponse = z.infer<typeof createMemberResponseSchema>;

export const getMembersRequestSchema = z.object({
  query: paginatedQuerySchema,
  params: orgParams,
});
export type GetMembersRequest = z.infer<typeof getMembersRequestSchema>;

export const getMembersResponseSchema = memberPaginatedResponseSchema;
export type GetMembersResponse = z.infer<typeof getMembersResponseSchema>;

export const deleteMemberRequestSchema = z.object({
  params: orgParams.merge(z.object({ walletAddress: base58PublicKeySchema })),
});
export type DeleteMemberRequest = z.infer<typeof deleteMemberRequestSchema>;
