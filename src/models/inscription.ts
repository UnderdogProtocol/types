import { z } from "zod";

import { idSchema, publicKeyValueSchema } from "./metadata";
import { dateStringSchema } from "./primitive";

export const inscriptionSchema = z.object({
  address: publicKeyValueSchema,
  authority: publicKeyValueSchema,
  superAdminAddress: publicKeyValueSchema,
  orgId: idSchema,
  value: z.string(),
  createdAt: dateStringSchema,
  updatedAt: dateStringSchema,
});

export type Inscription = z.infer<typeof inscriptionSchema>;
