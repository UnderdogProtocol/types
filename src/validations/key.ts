import { z } from "zod";

import { keyPaginatedResponseSchema, paginatedQuerySchema } from "../api";
import { keySchema, networkEnumSchema } from "../models";

export const getKeysRequestSchema = z.object({
  query: paginatedQuerySchema,
});
export type GetKeysRequest = z.infer<typeof getKeysRequestSchema>;

export const getKeysResponseSchema = keyPaginatedResponseSchema;
export type GetKeysResponse = z.infer<typeof getKeysResponseSchema>;

export const updateKeyRequestSchema = z.object({
  params: z.object({
    prefix: z.string(),
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
  }),
});
export type DeleteKeyRequest = z.infer<typeof deleteKeyRequestSchema>;
