import { z } from "zod";

import { networkEnumSchema } from "./enum";
import { base58PublicKeySchema } from "./metadata";
import { dateStringSchema } from "./primitive";

export const snapshotSchema = z.object({
  id: z.string(),
  description: z.string().nullish(),
  count: z.number(),
  mintAddress: base58PublicKeySchema.nullish(),
  url: z.string().nullish(),
  network: networkEnumSchema,
  createdAt: dateStringSchema,
});

export type Snapshot = z.infer<typeof snapshotSchema>;
