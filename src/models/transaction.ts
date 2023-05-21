import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import { publicKeyValueSchema } from "./metadata";

extendZodWithOpenApi(z);

export const transactionSchema = z.object({
  id: z.string(),
  status: z.string(),
  type: z.string(),
  walletAddress: publicKeyValueSchema,
  data: z.string().optional(),
  createdAt: z.string(),
});

export type Transaction = z.infer<typeof transactionSchema>;
