import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import { idSchema } from "../models";

extendZodWithOpenApi(z);

export const projectParamsSchema = z.object({
  type: z
    .string()
    .optional()
    .refine((val) => val === "t" || val === "n" || val === "c" || val === undefined, {
      message: "Value must be 't' for transferable, 'n' for non-transferable, or 'c' for compressed",
    })
    .transform((val) =>
      val === undefined
        ? { transferable: true, compressed: true }
        : { transferable: val === "t", compressed: val === "c" }
    )
    .openapi({
      type: "string",
      description: "Value must be 't' for transferable, 'n' for non-transferable, or 'c' for compressed",
    }),
  projectId: idSchema,
});

export type ProjectParams = z.infer<typeof projectParamsSchema>;

export const nftParamsSchema = projectParamsSchema.merge(z.object({ nftId: idSchema })).required();

export type NftParams = z.infer<typeof nftParamsSchema>;
