import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import { dateStringSchema } from "./primitive";
import { transactionSchema } from "./transaction";

extendZodWithOpenApi(z);

export const requestSchema = z.object({
  id: z.string().uuid(),
  method: z.string(),
  endpoint: z.string(),
  body: z.string().optional().nullable(),
  createdAt: dateStringSchema,
  transaction: transactionSchema.pick({ id: true, type: true }).optional().nullable(),
  response: z
    .object({
      id: z.string(),
      status: z.number(),
      body: z.string().optional(),
    })
    .nullable()
    .optional(),
});

export type Request = z.infer<typeof requestSchema>;
