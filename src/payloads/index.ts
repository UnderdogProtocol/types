import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import { publicKeySchema, idSchema, metadataSchema } from "../models";

extendZodWithOpenApi(z);

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

export const projectPayloadSchema = orgPayloadSchema.merge(
  z.object({
    mintAddress: publicKeySchema,
    projectId: idSchema,
    transferable: z.boolean(),
    compressed: z.boolean(),
  })
);

export const createProjectPayloadSchema = projectPayloadSchema;
export type CreateProjectPayload = z.infer<typeof createProjectPayloadSchema>;

export const updateProjectPayloadSchema = projectPayloadSchema;
export type UpdateProjectPayload = z.infer<typeof updateProjectPayloadSchema>;

export const nftPayloadSchema = projectPayloadSchema.merge(
  z.object({ nftId: idSchema, receiverAddress: publicKeySchema })
);

export const createNftPayloadSchema = nftPayloadSchema;
export type CreateNftPayload = z.infer<typeof createNftPayloadSchema>;

export const createCompressedNftPayloadSchema = projectPayloadSchema
  .omit({ mintAddress: true })
  .merge(z.object({ metadata: metadataSchema, receiverAddress: publicKeySchema }));
export type CreateCompressedNftPayload = z.infer<typeof createCompressedNftPayloadSchema>;

export const batchCompressedNftPayloadSchema = projectPayloadSchema
  .omit({ mintAddress: true })
  .merge(
    z.object({ batch: z.array(z.object({ metadata: metadataSchema, receiverAddress: publicKeySchema })) })
  );
export type BatchCompressedNftPayload = z.infer<typeof batchCompressedNftPayloadSchema>;

export const burnNftPayloadSchema = nftPayloadSchema.omit({ receiverAddress: true });
export type BurnNftPayload = z.infer<typeof burnNftPayloadSchema>;

export const revokeNftPayloadSchema = nftPayloadSchema.omit({ receiverAddress: true });
export type RevokeNftPayload = z.infer<typeof revokeNftPayloadSchema>;
