import { z } from "zod";

import { plansEnumSchema } from "./enum";
import { base58PublicKeySchema } from "./metadata";
import { orgSchema } from "./org";

export const subscriptionSchema = z.object({
  active: z.boolean(),
  plan: plansEnumSchema,
  cycleStartDate: z.string().optional(),
  cycleEndDate: z.string().optional(),
});

export const meSchema = z.object({
  address: base58PublicKeySchema,
  email: z.string().email().optional(),
  paid: z.boolean(),
  createdAt: z.string(),
  org: orgSchema.optional(),
  subscription: subscriptionSchema.optional(),
});

export type Me = z.infer<typeof meSchema>;
