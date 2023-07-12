import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import { idSchema } from "../models";

extendZodWithOpenApi(z);

export const projectParamsSchema = z.object({ projectId: idSchema });

export type ProjectParams = z.infer<typeof projectParamsSchema>;

export const nftParamsSchema = projectParamsSchema.merge(z.object({ nftId: idSchema }));

export type NftParams = z.infer<typeof nftParamsSchema>;
