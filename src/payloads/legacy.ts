import { z } from "zod";

import { idSchema, metadataSchema, publicKeySchema } from "../models";
import { orgPayloadSchema } from "./org";

export const createLegacyProjectPayloadSchema = orgPayloadSchema.merge(
  z.object({
    projectId: idSchema,
    mintAddress: publicKeySchema,
    transferable: z.boolean(),
  })
);
export type CreateLegacyProjectPayload = z.infer<typeof createLegacyProjectPayloadSchema>;

export const createLegacyNftPayloadSchema = createLegacyProjectPayloadSchema.merge(
  z.object({ nftId: idSchema, receiverAddress: publicKeySchema })
);
export type CreateLegacyNftPayload = z.infer<typeof createLegacyNftPayloadSchema>;

export const nonTransferableNftPayloadSchema = orgPayloadSchema.merge(
  z.object({ projectId: idSchema, nftId: idSchema })
);

export const burnNftPayloadSchema = nonTransferableNftPayloadSchema.merge(
  z.object({
    mintAddress: publicKeySchema,
  })
);
export type BurnNftPayload = z.infer<typeof burnNftPayloadSchema>;

export const revokeNftPayloadSchema = nonTransferableNftPayloadSchema.merge(
  z.object({
    mintAddress: publicKeySchema,
  })
);
export type RevokeNftPayload = z.infer<typeof revokeNftPayloadSchema>;
