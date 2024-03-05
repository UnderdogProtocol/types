import { z } from "zod";

export const createSnapshotPayloadSchema = z.object({
  snapshotId: z.string(),
  hashlist: z.boolean(),
  unique: z.boolean(),
});

export type CreateSnapshotPayload = z.infer<typeof createSnapshotPayloadSchema>;
