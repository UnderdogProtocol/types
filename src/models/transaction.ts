import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export const TransactionSchema = z.object({
  id: z.string(),
  status: z.string(),
  type: z.string(),
  mintAddress: z.string(),
});
