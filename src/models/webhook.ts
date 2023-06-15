import { z } from "zod";

import { transactionTypesEnumSchema } from "./enum";
import { publicKeyValueSchema } from "./metadata";

export const triggerSchema = z.object({
  transactionType: transactionTypesEnumSchema,
});

export const webhookSchema = z.object({
  id: z.string(),
  url: z.string(),
  walletAddress: publicKeyValueSchema,
  valid: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
  triggers: z.array(triggerSchema),
});

export type Webhook = z.infer<typeof webhookSchema>;
