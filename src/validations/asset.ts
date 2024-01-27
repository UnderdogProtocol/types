import { z } from "zod";

import { assetTransactionResponseSchema, nftParamsSchema } from "../api";
import { base58PublicKeySchema, metadataSchema } from "../models";
import { registry } from "../openapi";

export const updateAssetRequestSchema = registry.register(
  "UpdateAssetRequest",
  z.object({ params: nftParamsSchema, body: metadataSchema })
);
export type UpdateAssetRequest = z.infer<typeof updateAssetRequestSchema>;

export const updateAssetResponseSchema = registry.register(
  "UpdateAssetResponse",
  assetTransactionResponseSchema
);
export type UpdateAssetResponse = z.infer<typeof updateAssetResponseSchema>;

export const partialUpdateAssetRequestSchema = registry.register(
  "PartialUpdateAssetRequest",
  z.object({ params: nftParamsSchema, body: metadataSchema.partial() })
);
export type PartialUpdateAssetRequest = z.infer<typeof partialUpdateAssetRequestSchema>;

export const partialUpdateAssetResponseSchema = registry.register(
  "PartialUpdateAssetResponse",
  assetTransactionResponseSchema
);
export type PartialUpdateAssetResponse = z.infer<typeof partialUpdateAssetResponseSchema>;

export const transferNftRequestSchema = registry.register(
  "TransferNftRequest",
  z.object({ params: nftParamsSchema, body: z.object({ receiverAddress: base58PublicKeySchema }) })
);
export type TransferNftRequest = z.infer<typeof transferNftRequestSchema>;

export const transferNftResponseSchema = registry.register(
  "TransferNftResponse",
  assetTransactionResponseSchema
);
export type TransferNftResponse = z.infer<typeof transferNftResponseSchema>;

export const burnAssetRequestSchema = registry.register(
  "BurnAssetRequest",
  z.object({ params: nftParamsSchema })
);
export type BurnAssetRequest = z.infer<typeof burnAssetRequestSchema>;

export const burnAssetResponseSchema = registry.register("BurnAssetResponse", assetTransactionResponseSchema);
export type BurnAssetResponse = z.infer<typeof burnAssetResponseSchema>;
