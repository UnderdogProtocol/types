import { z } from "zod";

import { base58PublicKeySchema, idSchema } from "./metadata";
import { dateStringSchema } from "./primitive";

export const inscriptionSchema = z.object({
  address: base58PublicKeySchema,
  authority: base58PublicKeySchema,
  superAdminAddress: base58PublicKeySchema,
  orgId: idSchema,
  value: z.string(),
  createdAt: dateStringSchema,
  updatedAt: dateStringSchema,
});

export type Inscription = z.infer<typeof inscriptionSchema>;
