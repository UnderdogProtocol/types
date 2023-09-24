import { z } from "zod";

import { metadataSchema } from "../models";

export const createShopPayloadSchema = metadataSchema.merge(
  z.object({
    price: z.number().min(0),
    supply: z.number().min(0),
    treeAddress: z.string().optional(),
  })
);

export type CreateShopPayload = z.infer<typeof createShopPayloadSchema>;