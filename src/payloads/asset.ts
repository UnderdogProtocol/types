import { z } from "zod";

import { base58PublicKeySchema, idSchema, metadataSchema } from "../models";
import { projectPayloadSchema } from "./project";

export const assetPayloadSchema = projectPayloadSchema.merge(z.object({ nftId: idSchema }));

export const createProjectNftPayloadSchema = assetPayloadSchema.merge(
  z.object({
    receiverAddress: base58PublicKeySchema,
    delegated: z.boolean().optional().default(false),
  })
);
export type CreateProjectNftPayload = z.infer<typeof createProjectNftPayloadSchema>;

export const createProjectSftPayloadSchema = createProjectNftPayloadSchema;
export type CreateProjectSftPayload = z.infer<typeof createProjectSftPayloadSchema>;

export const transferProjectNftPayloadSchema = assetPayloadSchema.merge(
  z.object({ receiverAddress: base58PublicKeySchema })
);
export type TransferProjectNftPayload = z.infer<typeof transferProjectNftPayloadSchema>;

export const burnProjectAssetPayloadSchema = assetPayloadSchema;
export type BurnProjectAssetPayload = z.infer<typeof burnProjectAssetPayloadSchema>;
