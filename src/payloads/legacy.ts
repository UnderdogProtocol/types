import { z } from "zod";

import { base58PublicKeySchema, idSchema } from "../models";
import { orgPayloadSchema } from "./org";

export const createLegacyProjectPayloadSchema = orgPayloadSchema.merge(
  z.object({
    projectId: idSchema,
    mintAddress: base58PublicKeySchema,
    transferable: z.boolean(),
  })
);
export type CreateLegacyProjectPayload = z.infer<typeof createLegacyProjectPayloadSchema>;

export const createLegacyNftPayloadSchema = createLegacyProjectPayloadSchema.merge(
  z.object({ nftId: idSchema, receiverAddress: base58PublicKeySchema })
);
export type CreateLegacyNftPayload = z.infer<typeof createLegacyNftPayloadSchema>;

export const nonTransferableNftPayloadSchema = orgPayloadSchema.merge(
  z.object({ projectId: idSchema, nftId: idSchema })
);

export const burnNftPayloadSchema = nonTransferableNftPayloadSchema.merge(
  z.object({ mintAddress: base58PublicKeySchema })
);
export type BurnNftPayload = z.infer<typeof burnNftPayloadSchema>;

export const revokeNftPayloadSchema = nonTransferableNftPayloadSchema.merge(
  z.object({ mintAddress: base58PublicKeySchema })
);
export type RevokeNftPayload = z.infer<typeof revokeNftPayloadSchema>;
