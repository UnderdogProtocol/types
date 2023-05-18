import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export const transactionSchema = z.object({
  id: z.string(),
  status: z.string(),
  type: z.string(),
  data: z.string().optional(),
  createdAt: z.string(),
});

export type Transaction = z.infer<typeof transactionSchema>;
