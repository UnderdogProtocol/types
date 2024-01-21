import { z } from "zod";

import { transactionTypesEnumSchema } from "./enum";
import { base58PublicKeySchema, idSchema } from "./metadata";
import { dateStringSchema } from "./primitive";

export const triggerSchema = z.object({
  transactionType: transactionTypesEnumSchema,
});

export const webhookSchema = z.object({
  id: z.string(),
  url: z.string(),
  superAdminAddress: base58PublicKeySchema,
  orgId: idSchema,
  walletAddress: base58PublicKeySchema,
  valid: z.boolean(),
  triggers: z.array(triggerSchema),
  createdAt: dateStringSchema,
  updatedAt: dateStringSchema,
});

export type Webhook = z.infer<typeof webhookSchema>;
