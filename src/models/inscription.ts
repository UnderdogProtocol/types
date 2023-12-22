import { z } from "zod";

import { idSchema, publicKeyValueSchema } from "./metadata";

export const inscriptionSchema = z.object({
  address: publicKeyValueSchema,
  authority: publicKeyValueSchema,
  superAdminAddress: publicKeyValueSchema,
  orgId: idSchema,
  value: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Inscription = z.infer<typeof inscriptionSchema>;
