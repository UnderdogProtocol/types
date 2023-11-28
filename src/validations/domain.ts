import { z } from "zod";

import { createPaginatedResponseSchema, paginatedQuerySchema } from "../api";
import { domainSchema } from "../models/domain";

export const getDomainsRequestSchema = z.object({
  query: paginatedQuerySchema.merge(
    z.object({
      authority: z.string().optional(),
      namespace: z.string().optional(),
      address: z.string().optional(),
    })
  ),
});
export type GetDomainsRequest = z.infer<typeof getDomainsRequestSchema>;

export const getDomainsResponseSchema = createPaginatedResponseSchema(domainSchema);
export type GetDomainsResponse = z.infer<typeof getDomainsResponseSchema>;

export const getDomainRequestSchema = z.object({ params: z.object({ namespace: z.string() }) });
export type GetDomainRequest = z.infer<typeof getDomainRequestSchema>;

export const getDomainResponseSchema = domainSchema;
export type GetDomainResponse = z.infer<typeof getDomainResponseSchema>;
