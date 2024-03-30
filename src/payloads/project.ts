import { z } from "zod";

import { base58PublicKeySchema, idSchema, metadataSchema, sellerFeeBasisPointsSchema } from "../models";
import { orgPayloadSchema } from "./org";

export const projectPayloadSchema = orgPayloadSchema.merge(z.object({ projectId: idSchema }));

export const createProjectPayloadSchema = projectPayloadSchema.merge(
  z.object({
    mintAddress: base58PublicKeySchema,
    sellerFeeBasisPoints: sellerFeeBasisPointsSchema.optional(),
  })
);
export type CreateProjectPayload = z.infer<typeof createProjectPayloadSchema>;

export const updateProjectPayloadSchema = projectPayloadSchema.merge(
  z.object({ metadata: metadataSchema, sellerFeeBasisPoints: sellerFeeBasisPointsSchema })
);
export type UpdateProjectPayload = z.infer<typeof updateProjectPayloadSchema>;

export const withdrawProjectRoyaltiesPayloadSchema = projectPayloadSchema.merge(
  z.object({ receiverAddress: base58PublicKeySchema })
);
export type WithdrawProjectRoyaltiesPayload = z.infer<typeof withdrawProjectRoyaltiesPayloadSchema>;
