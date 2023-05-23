import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import { publicKeyValueSchema } from "./metadata";

extendZodWithOpenApi(z);

export const orgSchema = z.object({
  id: z.string().uuid(),
  superAdminAddress: publicKeyValueSchema,
  name: z.string().optional(),
  status: z.string(),
});

export type Org = z.infer<typeof orgSchema>;
