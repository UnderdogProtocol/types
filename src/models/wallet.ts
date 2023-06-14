import { z } from "zod";

import { publicKeyValueSchema } from "./metadata";

export const meSchema = z.object({
  address: publicKeyValueSchema,
  createdAt: z.string(),
  org: z.object({
    id: z.number(),
    superAdminAddress: z.string(),
    name: z.string().optional(),
  }),
  stats: z.object({
    nfts: z.number(),
    projectNfts: z.number(),
    projects: z.number(),
  }),
  subscription: z
    .object({
      active: z.boolean(),
      plan: z.string(),
      createdAt: z.string(),
    })
    .optional(),
  integrations: z.array(
    z.object({
      id: z.string(),
      integrationId: z.string(),
      externalId: z.string(),
      createdAt: z.string(),
    })
  ),
});

export type Me = z.infer<typeof meSchema>;
