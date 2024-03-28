import { z } from "zod";

import { idSchema, metadataSchema } from "../models";

export const createCoreProjectPayloadSchema = z.object({ projectId: idSchema, metadata: metadataSchema });

export type CreateCoreProjectPayload = z.infer<typeof createCoreProjectPayloadSchema>;

export const createCoreAssetPayloadSchema = createCoreProjectPayloadSchema.merge(
  z.object({ nftId: idSchema })
);

export type CreateCoreAssetPayload = z.infer<typeof createCoreAssetPayloadSchema>;
