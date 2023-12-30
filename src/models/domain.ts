import { z } from "zod";

import { publicKeyValueSchema } from "./metadata";
import { dateStringSchema } from "./primitive";

export const domainSchema = z.object({
  address: publicKeyValueSchema,
  authority: publicKeyValueSchema,
  namespace: z.string(),
  expiredAt: dateStringSchema.optional().nullable(),
});

export type Domain = z.infer<typeof domainSchema>;
