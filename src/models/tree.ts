import { z } from "zod";

import { networkEnumSchema } from "./enum";
import { base58PublicKeySchema } from "./metadata";
import { dateStringSchema } from "./primitive";

export const treeSchema = z.object({
  address: base58PublicKeySchema,
  superAdminAddress: base58PublicKeySchema,
  maxDepth: z.number(),
  maxBufferSize: z.number(),
  canopyDepth: z.number(),
  numMinted: z.number(),
  capacity: z.number(),
  url: z.string().nullish(),
  network: networkEnumSchema,
  createdAt: dateStringSchema,
});

export type Tree = z.infer<typeof treeSchema>;
