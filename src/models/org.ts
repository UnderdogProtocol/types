import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import { priorityEnumSchema } from "./enum";
import { base58PublicKeySchema, idSchema } from "./metadata";
import { rechargeSchema } from "./recharge";

extendZodWithOpenApi(z);

export const orgSchema = z.object({
  id: idSchema,
  superAdminAddress: base58PublicKeySchema,
  name: z.string(),
  status: z.string(),
  balance: z.number(),
  priority: priorityEnumSchema,
  recharge: rechargeSchema.pick({ limit: true, amount: true, enabled: true }).nullish(),
});

export type Org = z.infer<typeof orgSchema>;

export const memberSchema = z.object({
  superAdminAddress: base58PublicKeySchema,
  orgId: idSchema,
  walletAddress: base58PublicKeySchema,
  name: z.string().nullable().optional(),
});

export type Member = z.infer<typeof memberSchema>;
