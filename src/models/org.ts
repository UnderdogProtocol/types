import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import { idSchema, publicKeyValueSchema } from "./metadata";
import { rechargeSchema } from "./recharge";

extendZodWithOpenApi(z);

export const orgSchema = z.object({
  id: idSchema,
  superAdminAddress: publicKeyValueSchema,
  name: z.string().min(3, { message: "Organization name must be at least 3 characters" }),
  status: z.string(),
  balance: z.number(),
  email: z.string().email().optional(),
  recharge: rechargeSchema.pick({ limit: true, amount: true, enabled: true }).optional(),
});

export type Org = z.infer<typeof orgSchema>;

export const memberSchema = z.object({
  walletAddress: publicKeyValueSchema,
  name: z.string().optional(),
  superAdminAddress: publicKeyValueSchema,
  orgId: idSchema,
  status: z.string(),
});

export type Member = z.infer<typeof memberSchema>;
