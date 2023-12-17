import { z } from "zod";

import { metadataSchema, sellerFeeBasisPointsSchema } from "../models";

export const createShopPayloadSchema = metadataSchema.merge(
  z.object({
    price: z.number().min(0),
    supply: z.number().min(0),
    sellerFeeBasisPoints: sellerFeeBasisPointsSchema.optional(),
    namespace: z.string().optional(),
    treeAddress: z.string().optional(),
    whitelist: z.string().optional(),
    expiredAt: z
      .string()
      .optional()
      .transform((dateString) => (dateString ? new Date(dateString) : undefined)),
  })
);

export type CreateShopPayload = z.infer<typeof createShopPayloadSchema>;
