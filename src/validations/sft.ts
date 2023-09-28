import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import { projectParamsSchema, sftTransactionResponseSchema } from "../api";
import { publicKeyValueSchema } from "../models";
import { Receiver, receiverSchema } from "../models/receiver";
import { registry } from "../openapi";

extendZodWithOpenApi(z);

export const createSftInputSchema = z.object({
  receiver: receiverSchema.optional(),
  receiverAddress: publicKeyValueSchema.optional().openapi({
    description: "Wallet address that will receive the SFT",
  }),
  delegated: z.boolean().optional().openapi({
    description: "If true, your Project will have delegated authority over the NFT",
  }),
});
export type CreateSftInput = z.infer<typeof createSftInputSchema> & { receiver?: Receiver };

export const createSftRequestSchema = registry.register(
  "CreateSftRequest",
  z.object({
    params: projectParamsSchema,
    body: createSftInputSchema,
  })
);

export type CreateSftRequest = {
  params: z.infer<typeof projectParamsSchema>;
  body: CreateSftInput;
};

export const createSftResponseSchema = registry.register("CreateSftResponse", sftTransactionResponseSchema);

export type CreateSftResponse = z.infer<typeof createSftResponseSchema>;

export const batchSftRequestSchema = registry.register(
  "BatchSftRequest",
  z.object({
    params: projectParamsSchema,
    body: z.array(createSftInputSchema),
  })
);

export type BatchSftRequest = {
  params: z.infer<typeof projectParamsSchema>;
  body: CreateSftInput[];
};

export const batchSftResponseSchema = registry.register(
  "BatchSftResponse",
  sftTransactionResponseSchema.array()
);
export type BatchSftResponse = z.infer<typeof batchSftResponseSchema>;
