import { z } from "zod";

import { keyPaginatedResponseSchema, paginatedQuerySchema } from "../api";
import { idSchema, keySchema, networkEnumSchema } from "../models";

export const createKeyResponseSchema = z.string();
export type CreateKeyResponse = z.infer<typeof createKeyResponseSchema>;

export const getKeysRequestSchema = z.object({
  query: paginatedQuerySchema,
  params: z.object({
    orgId: idSchema,
  }),
});
export type GetKeysRequest = z.infer<typeof getKeysRequestSchema>;

export const getKeysResponseSchema = keyPaginatedResponseSchema;
export type GetKeysResponse = z.infer<typeof getKeysResponseSchema>;

export const updateKeyRequestSchema = z.object({
  params: z.object({
    prefix: z.string(),
    orgId: idSchema,
  }),
  body: z.object({
    network: networkEnumSchema,
  }),
});
export type UpdateKeyRequest = z.infer<typeof updateKeyRequestSchema>;

export const updateKeyResponseSchema = keySchema;
export type UpdateKeyResponse = z.infer<typeof updateKeyResponseSchema>;

export const deleteKeyRequestSchema = z.object({
  params: z.object({
    prefix: z.string(),
    orgId: idSchema,
  }),
});
export type DeleteKeyRequest = z.infer<typeof deleteKeyRequestSchema>;
