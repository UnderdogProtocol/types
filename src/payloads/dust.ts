import { z } from "zod";

import { metadataSchema, sellerFeeBasisPointsSchema } from "../models";

export const createDustPayloadSchema = metadataSchema.merge(
  z.object({
    csvUrl: z.string(),
    treeAddress: z.string().optional(),
    sellerFeeBasisPoints: sellerFeeBasisPointsSchema.optional(),
  })
);

export type CreateDustPayload = z.infer<typeof createDustPayloadSchema>;
