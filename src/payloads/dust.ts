import { z } from "zod";

import { metadataSchema, sellerFeeBasisPointsSchema } from "../models";

export const createDustPayloadSchema = metadataSchema.merge(
  z.object({
    csvUrl: z.string(),
    treeAddress: z.string().optional(),
    sellerFeeBasisPoints: sellerFeeBasisPointsSchema.optional(),
    core: z.boolean().optional(),
    nonTransferable: z.boolean().optional(),
  })
);

export type CreateDustPayload = z.infer<typeof createDustPayloadSchema>;
