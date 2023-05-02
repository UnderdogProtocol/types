import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import { metadataSchema, publicKeyValueSchema } from "./metadata";

extendZodWithOpenApi(z);

export const projectSchema = metadataSchema.omit({ attributes: true }).merge(
  z.object({
    id: z.number().openapi({ description: "Unique ID for a Project" }),
    mintAddress: publicKeyValueSchema,
    merkleTreeAddress: publicKeyValueSchema.optional().openapi({
      description: "Merkle tree address for a compressed Project",
    }),
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
