import { z } from "zod";

import { base58PublicKeySchema, idSchema } from "../models";

export const orgPayloadSchema = z.object({
  superAdminAddress: base58PublicKeySchema,
  orgId: idSchema,
});

export const createOrgPayloadSchema = orgPayloadSchema;
export type CreateOrgPayload = z.infer<typeof createOrgPayloadSchema>;

export const addOrgMemberPayloadSchema = orgPayloadSchema.merge(
  z.object({ memberAddress: base58PublicKeySchema })
);
export type AddOrgMemberPayload = z.infer<typeof addOrgMemberPayloadSchema>;
