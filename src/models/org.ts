import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import { idSchema, publicKeyValueSchema } from "./metadata";

extendZodWithOpenApi(z);

export const orgSchema = z.object({
  id: idSchema,
  superAdminAddress: publicKeyValueSchema,
  name: z.string(),
  status: z.string(),
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
