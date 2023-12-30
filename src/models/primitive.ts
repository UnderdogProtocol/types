import { z } from "zod";

export const dateStringSchema = z
  .union([z.string(), z.date()])
  .transform((value) => (typeof value === "string" ? value : value.toISOString()));
