import { z } from "zod";

import { metadataSchema } from "../models";

export const createDustPayloadSchema = metadataSchema.merge(
  z.object({
    csvUrl: z.string(),
    treeAddress: z.string().optional(),
  })
);

export type CreateDustPayload = z.infer<typeof createDustPayloadSchema>;
