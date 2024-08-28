import { z } from "zod";

import { dateStringSchema } from "./primitive";

export const fileSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  url: z.string().url(),
  type: z.string(),
  createdAt: dateStringSchema,
});

export type File = z.infer<typeof fileSchema>;
