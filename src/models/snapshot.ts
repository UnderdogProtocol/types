import { z } from "zod";

import { networkEnumSchema } from "./enum";
import { base58PublicKeySchema } from "./metadata";
import { dateStringSchema } from "./primitive";

export const snapshotSchema = z.object({
  id: z.string(),
  description: z.string(),
  mintAddress: base58PublicKeySchema,
  url: z.string(),
  network: networkEnumSchema,
  createdAt: dateStringSchema,
});

export type Snapshot = z.infer<typeof snapshotSchema>;
