import { z } from "zod";

import { base58PublicKeySchema } from "./metadata";
import { dateStringSchema } from "./primitive";

export const domainSchema = z.object({
  address: base58PublicKeySchema,
  authority: base58PublicKeySchema,
  namespace: z.string(),
  expiredAt: dateStringSchema.optional().nullable(),
});

export type Domain = z.infer<typeof domainSchema>;
