import { z } from "zod";

import { idSchema, publicKeySchema } from "../models";

export const orgPayloadSchema = z.object({
  superAdminAddress: publicKeySchema,
  orgId: idSchema,
});

export const createOrgPayloadSchema = orgPayloadSchema;
export type CreateOrgPayload = z.infer<typeof createOrgPayloadSchema>;

export const addOrgMemberPayloadSchema = orgPayloadSchema.merge(
  z.object({
    memberAddress: publicKeySchema,
  })
);
export type AddOrgMemberPayload = z.infer<typeof addOrgMemberPayloadSchema>;
