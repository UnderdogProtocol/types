import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import { paginatedQuerySchema, projectParamsSchema, sftTransactionResponseSchema } from "../api";
import { base58PublicKeySchema, delegatedSchema } from "../models";
import { Receiver, receiverSchema } from "../models/receiver";
import { registry } from "../openapi";

extendZodWithOpenApi(z);

export const createSftInputSchema = z.object({
  receiver: receiverSchema.optional(),
  receiverAddress: base58PublicKeySchema.optional(),
  delegated: delegatedSchema.optional(),
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

export const getSftsRequestSchema = registry.register(
  "GetSftsRequest",
  z.object({ params: projectParamsSchema, query: paginatedQuerySchema })
);

export type GetSftsRequest = z.infer<typeof getSftsRequestSchema>;
