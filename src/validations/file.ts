import { z } from "zod";

import { fileSchema } from "../models/file";
import { registry } from "../openapi";

export const createFileRequestSchema = registry.register(
  "CreateFileRequest",
  z.object({
    body: z.object({
      name: z.string(),
      url: z.string().url(),
    }),
  })
);

export type CreateFileRequest = z.infer<typeof createFileRequestSchema>;

export const createFileResponseSchema = registry.register("CreateFileResponse", fileSchema);

export type CreateFileResponse = z.infer<typeof createFileResponseSchema>;
