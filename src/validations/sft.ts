import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import {
  compressedSftTransactionResponseSchema,
  projectParamsSchema,
  sftTransactionResponseSchema,
} from "../api";
import { publicKeyValueSchema } from "../models";
import { registry } from "../openapi";

extendZodWithOpenApi(z);

export const createSftInputSchema = z.object({
  receiverAddress: publicKeyValueSchema.optional().openapi({
    description: "Wallet address that will receive the SFT",
  }),
});
export type CreateSftInput = z.infer<typeof createSftInputSchema>;

export const createSftRequestSchema = registry.register(
  "CreateSftRequest",
  z.object({
    params: projectParamsSchema,
    body: createSftInputSchema,
  })
);

export type CreateSftRequest = z.infer<typeof createSftRequestSchema>;

export const createSftResponseSchema = registry.register("CreateSftResponse", sftTransactionResponseSchema);

export type CreateSftResponse = z.infer<typeof createSftResponseSchema>;

export const batchSftRequestSchema = registry.register(
  "BatchSftRequest",
  z.object({
    params: projectParamsSchema,
    body: z.array(createSftInputSchema),
  })
);

export type BatchSftRequest = z.infer<typeof batchSftRequestSchema>;

export const batchSftResponseSchema = registry.register(
  "BatchSftResponse",
  sftTransactionResponseSchema.array()
);
export type BatchSftResponse = z.infer<typeof batchSftResponseSchema>;
