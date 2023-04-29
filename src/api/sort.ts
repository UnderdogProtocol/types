import { z } from "zod";

export const sortQuerySchema = z.object({
  sortBy: z.string().optional(),
  orderBy: z.enum(["asc", "desc"]).optional().default("asc"),
});

export type SortQuery = z.infer<typeof sortQuerySchema>;
