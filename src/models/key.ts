import { z } from "zod";

import { networkEnumSchema } from "./enum";
import { publicKeyValueSchema } from "./metadata";

export const keySchema = z.object({
  prefix: z.string(),
  walletAddress: publicKeyValueSchema,
  network: networkEnumSchema.optional(),
});

export type Key = z.infer<typeof keySchema>;
