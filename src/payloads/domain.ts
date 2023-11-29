import { z } from "zod";

export const createDomainPayloadSchema = z.object({
  namespace: z.string(),
  domainAuthority: z.string(),
});

export type CreateDomainPayload = z.infer<typeof createDomainPayloadSchema>;
