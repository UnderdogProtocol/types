import { z } from "zod";

import { base58PublicKeySchema, idSchema, metadataSchema } from "../models";

export const createCoreProjectPayloadSchema = z.object({ projectId: idSchema, metadata: metadataSchema });

export type CreateCoreProjectPayload = z.infer<typeof createCoreProjectPayloadSchema>;

export const createCoreAssetPayloadSchema = createCoreProjectPayloadSchema.merge(
  z.object({ nftId: idSchema, receiverAddress: base58PublicKeySchema })
);

export type CreateCoreAssetPayload = z.infer<typeof createCoreAssetPayloadSchema>;

export const batchCoreProjectAssetPayloadSchema = z.object({
  projectId: idSchema,
  batch: z
    .object({ receiverAddress: base58PublicKeySchema, nftId: idSchema, metadata: metadataSchema })
    .array(),
});

export type BatchCoreProjectAssetPayload = z.infer<typeof batchCoreProjectAssetPayloadSchema>;
