import { z } from "zod";

export const rechargeSchema = z.object({
  id: z.string(),
  limit: z.number().min(500).max(10000),
  amount: z.number().min(500).max(100000),
  enabled: z.boolean(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type Recharge = z.infer<typeof rechargeSchema>;
