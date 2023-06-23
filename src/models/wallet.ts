import { z } from "zod";

import { plansEnumSchema } from "./enum";
import { publicKeyValueSchema } from "./metadata";
import { orgSchema } from "./org";

export const subscriptionSchema = z.object({
  active: z.boolean(),
  plan: plansEnumSchema,
  creditsUsed: z.number().int(),
  cycleStartDate: z.string().optional(),
  cycleEndDate: z.string().optional(),
});

export const meSchema = z.object({
  address: publicKeyValueSchema,
  createdAt: z.string(),
  org: orgSchema,
  subscription: subscriptionSchema.optional(),
});

export type Me = z.infer<typeof meSchema>;
