import { z } from "zod";

import { base58PublicKeySchema, metadataSchema, sellerFeeBasisPointsSchema } from "../models";

export const createShopPayloadSchema = metadataSchema.merge(
  z.object({
    price: z.number().min(0).nullable().default(0),
    token: base58PublicKeySchema.optional(),
    whitelist: z.string().optional(),
    supply: z.number().min(0),
    sellerFeeBasisPoints: sellerFeeBasisPointsSchema.optional(),
    namespace: z.string().optional(),
    expiredAt: z
      .string()
      .optional()
      .transform((dateString) => (dateString ? new Date(dateString) : undefined)),
  })
);

export type CreateShopPayload = z.infer<typeof createShopPayloadSchema>;

export const shopAttributesSchema = z.object({
  supply: z.coerce.number().optional(),
  price: z.coerce.number().optional(),
  whitelist: base58PublicKeySchema.optional(),
  namespace: z.string().optional(),
  creator: base58PublicKeySchema.optional(),
  token: base58PublicKeySchema.optional(),
  expiredAt: z.string().optional(),
});
