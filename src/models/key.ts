import { z } from "zod";

import { networkEnumSchema } from "./enum";
import { base58PublicKeySchema } from "./metadata";

export const keySchema = z.object({
  prefix: z.string(),
  walletAddress: base58PublicKeySchema,
  network: networkEnumSchema.optional(),
});

export type Key = z.infer<typeof keySchema>;
