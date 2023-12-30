import { z } from "zod";

import { transactionTypesEnumSchema } from "./enum";
import { idSchema, publicKeyValueSchema } from "./metadata";
import { dateStringSchema } from "./primitive";

export const triggerSchema = z.object({
  transactionType: transactionTypesEnumSchema,
});

export const webhookSchema = z.object({
  id: z.string(),
  url: z.string(),
  superAdminAddress: publicKeyValueSchema,
  orgId: idSchema,
  walletAddress: publicKeyValueSchema,
  valid: z.boolean(),
  triggers: z.array(triggerSchema),
  createdAt: dateStringSchema,
  updatedAt: dateStringSchema,
});

export type Webhook = z.infer<typeof webhookSchema>;
