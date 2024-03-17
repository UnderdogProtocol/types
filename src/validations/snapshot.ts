import { z } from "zod";

import { createPaginatedResponseSchema, paginatedQuerySchema } from "../api";
import { base58PublicKeySchema } from "../models";
import { snapshotSchema } from "../models/snapshot";
import { registry } from "../openapi";

export const createSnapshotRequest = registry.register(
  "CreateSnapshotRequest",
  z.object({
    body: z.object({
      description: z.string(),
      mintAddress: base58PublicKeySchema,
      hashlist: z.boolean().optional(),
      unique: z.boolean().optional(),
    }),
  })
);

export type CreateSnapshotRequest = z.infer<typeof createSnapshotRequest>;

export const createSnapshotResponse = registry.register(
  "CreateSnapshotResponse",
  z.object({ transactionId: z.string(), snapshotId: z.string().uuid() })
);

export type CreateSnapshotResponse = z.infer<typeof createSnapshotResponse>;

export const getSnapshotsRequest = registry.register(
  "GetSnapshotsRequest",
  z.object({
    query: paginatedQuerySchema.merge(
      z.object({
        mintAddress: base58PublicKeySchema.optional(),
      })
    ),
  })
);

export type GetSnapshotsRequest = z.infer<typeof getSnapshotsRequest>;

export const getSnapshotsResponse = registry.register(
  "GetSnapshotsResponse",
  createPaginatedResponseSchema(snapshotSchema)
);

export type GetSnapshotsResponse = z.infer<typeof getSnapshotsResponse>;

export const getSnapshotRequest = registry.register(
  "GetSnapshotRequest",
  z.object({ params: z.object({ snapshotId: z.string().uuid() }) })
);

export type GetSnapshotRequest = z.infer<typeof getSnapshotRequest>;

export const getSnapshotResponse = registry.register("GetSnapshotResponse", snapshotSchema);

export type GetSnapshotResponse = z.infer<typeof getSnapshotResponse>;

export const deleteSnapshotRequest = registry.register(
  "DeleteSnapshotRequest",
  z.object({ params: z.object({ snapshotId: z.string().uuid() }) })
);

export type DeleteSnapshotRequest = z.infer<typeof deleteSnapshotRequest>;
