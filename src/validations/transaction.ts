import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import { paginatedQuerySchema, transactionPaginatedResponseSchema } from "../api";
import { publicKeyValueSchema, transactionSchema } from "../models";

extendZodWithOpenApi(z);

export const getTransactionsRequestSchema = z.object({
  query: paginatedQuerySchema.merge(
    z.object({
      status: z.string().optional(),
      type: z.string().optional(),
    })
  ),
});
export type GetTransactionsRequest = z.infer<typeof getTransactionsRequestSchema>;

export const getTransactionsResponseSchema = transactionPaginatedResponseSchema;
export type GetTransactionsResponse = z.infer<typeof getTransactionsResponseSchema>;

export const getTransactionRequestSchema = z.object({
  params: z.object({
    transactionId: z.string(),
  }),
});
export type GetTransactionRequest = z.infer<typeof getTransactionRequestSchema>;

export const getTransactionResponseSchema = transactionSchema
  .omit({ walletAddress: true })
  .merge(z.object({ walletAddress: publicKeyValueSchema }));
export type GetTransactionResponse = z.infer<typeof getTransactionResponseSchema>;
