import { z } from "zod";

import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";

extendZodWithOpenApi(z);

export const sortQuerySchema = z.object({
  sortBy: z.string().optional(),
  orderBy: z.enum(["asc", "desc"]).optional().default("asc"),
});

export type SortQuery = z.infer<typeof sortQuerySchema>;
