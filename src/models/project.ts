import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import { base58PublicKeySchema, idSchema, metadataSchema, sellerFeeBasisPointsSchema } from "./metadata";

extendZodWithOpenApi(z);

export const projectSchema = z
  .object({
    id: idSchema,
    mintAddress: base58PublicKeySchema,
    semifungible: z
      .boolean()
      .optional()
      .openapi({ description: "Whether or not the NFTs in this project are semifungible" }),
    transferable: z
      .boolean()
      .optional()
      .openapi({ description: "Whether or not the NFTs in this project can be transferred" }),
    compressed: z
      .boolean()
      .optional()
      .openapi({ description: "Whether or not the NFTs in this project are compressed" }),
    core: z
      .boolean()
      .optional()
      .openapi({ description: "Whether or not the NFTs in this project use mpl-core standard" }),
    status: z.string(),
    sellerFeeBasisPoints: sellerFeeBasisPointsSchema,
  })
  .merge(metadataSchema);

export type Project = z.infer<typeof projectSchema>;
