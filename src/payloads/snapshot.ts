import { z } from "zod";

import { base58PublicKeySchema } from "../models";

export const createSnapshotPayloadSchema = z.object({
  mintAddress: base58PublicKeySchema,
});

export type CreateSnapshotPayload = z.infer<typeof createSnapshotPayloadSchema>;
