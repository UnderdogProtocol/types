import { z } from "zod";

import { createPaginatedResponseSchema, createTransactionResponseSchema, paginatedQuerySchema } from "../api";
import { base58PublicKeySchema, inscriptionSchema } from "../models";

export const createInscriptionRequestSchema = z.object({
  body: inscriptionSchema.pick({ value: true }),
});

const inscriptionTransactionSchema = z.object({ inscriptionAddress: z.string() });

export const createInscriptionResponseSchema = createTransactionResponseSchema<
  typeof inscriptionTransactionSchema
>(inscriptionTransactionSchema);

export type CreateInscriptionRequest = z.infer<typeof createInscriptionRequestSchema>;
export type CreateInscriptionResponse = z.infer<typeof createInscriptionResponseSchema>;

export const getInscriptionsRequestSchema = z.object({
  query: paginatedQuerySchema,
});
export type GetInscriptionsRequest = z.infer<typeof getInscriptionsRequestSchema>;

export const getInscriptionsResponseSchema = createPaginatedResponseSchema(inscriptionSchema);
export type GetInscriptionsResponse = z.infer<typeof getInscriptionsResponseSchema>;

export const getInscriptionRequestSchema = z.object({ params: z.object({ address: base58PublicKeySchema }) });
export type GetInscriptionRequest = z.infer<typeof getInscriptionRequestSchema>;

export const getInscriptionResponseSchema = inscriptionSchema;
export type GetInscriptionResponse = z.infer<typeof getInscriptionResponseSchema>;
