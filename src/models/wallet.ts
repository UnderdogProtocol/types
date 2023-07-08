import { z } from "zod";

import { plansEnumSchema } from "./enum";
import { publicKeyValueSchema } from "./metadata";
import { orgSchema } from "./org";

export const subscriptionSchema = z.object({
  active: z.boolean(),
  plan: plansEnumSchema,
  cycleStartDate: z.string().optional(),
  cycleEndDate: z.string().optional(),
});

export const meSchema = z.object({
  address: publicKeyValueSchema,
  paid: z.boolean(),
  createdAt: z.string(),
  org: orgSchema,
  subscription: subscriptionSchema.optional(),
});

export type Me = z.infer<typeof meSchema>;
