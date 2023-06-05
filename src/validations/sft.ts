import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import { compressedSftTransactionResponseSchema, projectParamsSchema } from "../api";
import { publicKeyValueSchema } from "../models";
import { registry } from "../openapi";

extendZodWithOpenApi(z);

export const createSftRequestSchema = registry.register(
  "CreateSftRequest",
  z.object({
    params: projectParamsSchema,
    body: z.object({
      receiverAddress: publicKeyValueSchema.optional().openapi({
        description: "Wallet address that will receive the NFT",
      }),
    }),
  })
);

export type CreateSftRequest = z.infer<typeof createSftRequestSchema>;

export const createSftResponseSchema = registry.register(
  "CreateSftResponse",
  compressedSftTransactionResponseSchema
);

export type CreateSftResponse = z.infer<typeof createSftResponseSchema>;
