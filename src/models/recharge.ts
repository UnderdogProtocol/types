import { z } from "zod";

import { dateStringSchema } from "./primitive";

export const rechargeSchema = z.object({
  id: z.string(),
  limit: z.number().min(500).max(10000),
  amount: z.number().min(500).max(1000000),
  enabled: z.boolean(),
  createdAt: dateStringSchema,
  updatedAt: dateStringSchema,
});

export type Recharge = z.infer<typeof rechargeSchema>;
