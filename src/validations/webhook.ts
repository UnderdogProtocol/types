import { z } from "zod";

import { paginatedQuerySchema, requestPaginatedResponseSchema, webhookPaginatedResponseSchema } from "../api";
import { transactionTypesEnumSchema, webhookSchema } from "../models";

export const createWebhookRequestSchema = z.object({
  body: z.object({
    url: z.string(),
    triggers: z.array(transactionTypesEnumSchema),
  }),
});
export type CreateWebhookRequest = z.infer<typeof createWebhookRequestSchema>;

export const createWebhookResponseSchema = webhookSchema;
export type CreateWebhookResponse = z.infer<typeof createWebhookResponseSchema>;

export const getWebhooksRequestSchema = z.object({
  query: paginatedQuerySchema,
});
export type GetWebhooksRequest = z.infer<typeof getWebhooksRequestSchema>;

export const getWebhooksResponseSchema = webhookPaginatedResponseSchema;
export type GetWebhooksResponse = z.infer<typeof getWebhooksResponseSchema>;

export const getWebhookRequestSchema = z.object({
  query: paginatedQuerySchema,
  params: z.object({
    webhookId: z.string().uuid(),
  }),
});
export type GetWebhookRequest = z.infer<typeof getWebhookRequestSchema>;

export const getWebhookResponseSchema = webhookSchema.merge(
  z.object({ requests: requestPaginatedResponseSchema })
);
export type GetWebhookResponse = z.infer<typeof getWebhookResponseSchema>;

export const deleteWebhookRequestSchema = z.object({
  params: z.object({
    webhookId: z.string().uuid(),
  }),
});
export type DeleteWebhookRequest = z.infer<typeof deleteWebhookRequestSchema>;
