import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import { metadataSchema, publicKeyValueSchema, sellerFeeBasisPointsSchema } from "./metadata";

extendZodWithOpenApi(z);

export const projectSchema = z
  .object({
    id: z.number().openapi({ description: "Unique ID for a Project" }),
    mintAddress: publicKeyValueSchema,
    transferable: z
      .boolean()
      .optional()
      .openapi({ description: "Whether or not the NFTs in this project can be transferred" }),
    semifungible: z
      .boolean()
      .optional()
      .openapi({ description: "Whether or not the NFTs in this project are semifungible" }),
    isPublic: z
      .boolean()
      .optional()
      .openapi({ description: "Allows public minting of NFTs through an API endpoint" }),
    compressed: z
      .boolean()
      .optional()
      .openapi({ description: "Whether or not the NFTs in this project are compressed" }),
    status: z.string(),
    sellerFeeBasisPoints: sellerFeeBasisPointsSchema,
  })
  .merge(metadataSchema);

export type Project = z.infer<typeof projectSchema>;
