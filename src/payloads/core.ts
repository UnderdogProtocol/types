import { z } from "zod";

import { base58PublicKeySchema, idSchema, metadataSchema, sellerFeeBasisPointsSchema } from "../models";

export const createCoreProjectPayloadSchema = z.object({ projectId: idSchema, metadata: metadataSchema });
export type CreateCoreProjectPayload = z.infer<typeof createCoreProjectPayloadSchema>;

export const updateCoreProjectPayloadSchema = createCoreProjectPayloadSchema.merge(
  z.object({ sellerFeeBasisPoints: sellerFeeBasisPointsSchema })
);
export type UpdateCoreProjectPayload = z.infer<typeof updateCoreProjectPayloadSchema>;

export const createCoreAssetPayloadSchema = z.object({ projectId: idSchema, nftId: idSchema });
export type CreateCoreAssetPayload = z.infer<typeof createCoreAssetPayloadSchema>;

export const batchCoreProjectAssetPayloadSchema = z.object({
  projectId: idSchema,
  lazy: z.boolean().optional(),
  batch: z
    .object({
      receiverAddress: base58PublicKeySchema,
      nftId: idSchema,
      metadata: metadataSchema,
      delegated: z.boolean().optional(),
    })
    .array(),
});
export type BatchCoreProjectAssetPayload = z.infer<typeof batchCoreProjectAssetPayloadSchema>;

export const updateCoreAssetPayloadSchema = createCoreProjectPayloadSchema.merge(
  z.object({ nftId: idSchema, metadata: metadataSchema })
);
export type UpdateCoreAssetPayload = z.infer<typeof updateCoreAssetPayloadSchema>;

export const transferCoreProjectAssetPayloadSchema = createCoreAssetPayloadSchema.merge(
  z.object({ receiverAddress: base58PublicKeySchema })
);
export type TransferCoreProjectAssetPayload = z.infer<typeof transferCoreProjectAssetPayloadSchema>;

export const burnCoreProjectAssetPayloadSchema = createCoreAssetPayloadSchema;
export type BurnCoreProjectAssetPayload = z.infer<typeof burnCoreProjectAssetPayloadSchema>;
