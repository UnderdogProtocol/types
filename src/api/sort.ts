import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export const sortQuerySchema = z.object({
  sortBy: z.string().optional(),
  orderBy: z.enum(["asc", "desc"]).optional().default("asc"),
});

export type SortQuery = z.infer<typeof sortQuerySchema>;
