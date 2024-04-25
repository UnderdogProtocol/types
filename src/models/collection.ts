import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import { projectSchema } from "./project";

extendZodWithOpenApi(z);

export const collectionSchema = projectSchema.pick({
  mintAddress: true,
  status: true,
  transferable: true,
  compressed: true,
  core: true,
  name: true,
  symbol: true,
  description: true,
  image: true,
  externalUrl: true,
  animationUrl: true,
  attributes: true,
});

export type Collection = z.infer<typeof collectionSchema>;
