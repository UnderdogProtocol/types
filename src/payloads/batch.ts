import { z } from "zod";

import { base58PublicKeySchema, idSchema, metadataSchema } from "../models";
import { projectPayloadSchema } from "./project";

export const batchProjectNftPayloadSchema = projectPayloadSchema.merge(
  z.object({
    treeAddress: base58PublicKeySchema.optional(),
    batch: z
      .object({
        receiverAddress: base58PublicKeySchema,
        nftId: idSchema,
        metadata: metadataSchema,
        delegated: z.boolean().optional(),
      })
      .array(),
  })
);
export type BatchProjectNftPayload = z.infer<typeof batchProjectNftPayloadSchema>;

export const batchProjectSftPayloadSchema = projectPayloadSchema.merge(
  z.object({
    treeAddress: base58PublicKeySchema.optional(),
    batch: z
      .object({
        receiverAddress: base58PublicKeySchema,
        nftId: idSchema,
        delegated: z.boolean().optional(),
      })
      .array(),
  })
);
export type BatchProjectSftPayload = z.infer<typeof batchProjectSftPayloadSchema>;
