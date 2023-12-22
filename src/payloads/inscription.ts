import { z } from "zod";

import { idSchema } from "../models";

const orgSchema = z.object({
  orgId: idSchema,
  superAdminAddress: z.string(),
});

export const createInscriptionPayloadSchema = orgSchema.merge(
  z.object({
    encodedInscriptionSigner: z.string(),
    value: z.string(),
  })
);

export type CreateInscriptionPayload = z.infer<typeof createInscriptionPayloadSchema>;
