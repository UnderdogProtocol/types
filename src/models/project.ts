import { z } from "zod";

import { metadataSchema, publicKeyValueSchema } from "./metadata";

export const projectSchema = metadataSchema.omit({ attributes: true }).merge(
  z.object({
    id: z.number().openapi({ description: "Unique ID for a Project" }),
    mintAddress: publicKeyValueSchema,
    transferable: z
      .boolean()
      .optional()
      .openapi({ description: "Whether or not the NFTs in this project can be transferred" }),
    compressed: z
      .boolean()
      .optional()
      .openapi({ description: "Whether or not the NFTs in this project are compressed" }),
    status: z.string(),
  })
);

export type Project = z.infer<typeof projectSchema>;
