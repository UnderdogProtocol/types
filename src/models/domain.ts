import { z } from "zod";

import { publicKeyValueSchema } from "./metadata";

export const domainSchema = z.object({
  address: publicKeyValueSchema,
  authority: publicKeyValueSchema,
  namespace: z.string(),
  expiredAt: z.date().optional(),
});

export type Domain = z.infer<typeof domainSchema>;
