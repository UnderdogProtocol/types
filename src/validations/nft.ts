import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import {
  assetTransactionResponseSchema,
  nftPaginatedResponseSchema,
  nftParamsSchema,
  nftTransactionResponseSchema,
  paginatedQuerySchema,
  projectParamsSchema,
  sortQuerySchema,
} from "../api";
import { nftSchema, metadataSchema, publicNftSchema, base58PublicKeySchema } from "../models";
import { Receiver, receiverSchema } from "../models/receiver";
import { registry } from "../openapi";

extendZodWithOpenApi(z);

export const createNftInputSchema = metadataSchema.merge(
  z.object({
    receiver: receiverSchema.optional(),
    receiverAddress: base58PublicKeySchema.optional(),
    delegated: z.boolean().optional().openapi({
      description: "If true, your Project will have delegated authority over the NFT",
    }),
  })
);

export type CreateNftInput = Omit<z.infer<typeof createNftInputSchema>, "receiver"> & {
  receiver?: Receiver;
};

export const createNftRequestSchema = registry.register(
  "CreateNftRequest",
  z.object({
    params: projectParamsSchema,
    body: createNftInputSchema.merge(
      z.object({
        upsert: z.boolean().optional().openapi({
          description: "If true, will update the NFT if one with the same owner / claimer exists",
        }),
      })
    ),
  })
);

export type CreateNftRequest = {
  params: z.infer<typeof projectParamsSchema>;
  body: CreateNftInput & { upsert?: boolean };
};

export const createTransferableNftResponseSchema = registry.register(
  "CreateTransferableNftResponse",
  nftTransactionResponseSchema
);

export const createNonTransferableNftResponseSchema = registry.register(
  "CreateNonTransferableNftResponse",
  nftSchema
);

export const upsertNftResponseSchema = registry.register("UpsertNftResponse", z.array(nftSchema));

export const createNftResponseSchema = assetTransactionResponseSchema;

export type CreateTransferableNftResponse = z.infer<typeof createTransferableNftResponseSchema>;
export type CreateNonTransferableNftResponse = z.infer<typeof createNonTransferableNftResponseSchema>;
export type UpsertNftResponse = z.infer<typeof upsertNftResponseSchema>;
export type CreateNftResponse = z.infer<typeof createNftResponseSchema>;

export const batchNftRequestSchema = registry.register(
  "BatchNftRequest",
  z.object({
    params: projectParamsSchema,
    body: createNftInputSchema.merge(
      z.object({
        batch: z.array(createNftInputSchema.partial()),
      })
    ),
  })
);

export type BatchNftRequest = {
  params: z.infer<typeof projectParamsSchema>;
  body: CreateNftInput & { batch: Partial<CreateNftInput>[] };
};

export const batchNftResponseSchema = registry.register(
  "BatchNftResponse",
  nftTransactionResponseSchema.omit({ mintAddress: true }).array()
);
export type BatchNftResponse = z.infer<typeof batchNftResponseSchema>;

export const getNftRequestSchema = registry.register(
  "GetNftRequest",
  z.object({
    params: nftParamsSchema,
  })
);

export const getNftResponseSchema = registry.register("GetNftResponse", nftSchema);

export type GetNftRequest = z.infer<typeof getNftRequestSchema>;
export type GetNftResponse = z.infer<typeof getNftResponseSchema>;

export const getNftByMintAddressRequestSchema = registry.register(
  "GetNftByMintAddressRequest",
  z.object({ params: z.object({ mintAddress: base58PublicKeySchema }) })
);

export const getNftByMintAddressResponseSchema = registry.register(
  "GetNftByMintAddressResponse",
  publicNftSchema
);

export type GetNftByMintAddressRequest = z.infer<typeof getNftByMintAddressRequestSchema>;
export type GetNftByMintAddressResponse = z.infer<typeof getNftByMintAddressResponseSchema>;

export const getNftsRequestSchema = registry.register(
  "GetNftsRequest",
  z.object({
    params: projectParamsSchema,
    query: paginatedQuerySchema.merge(sortQuerySchema).merge(
      z.object({
        ownerAddress: base58PublicKeySchema.optional(),
        identifier: z.string().optional(),
        namespace: z.string().optional(),
      })
    ),
  })
);

export const getNftsResponseSchema = registry.register("GetNftsResponse", nftPaginatedResponseSchema);

export type GetNftsRequest = z.infer<typeof getNftsRequestSchema>;
export type GetNftsResponse = z.infer<typeof getNftsResponseSchema>;

export const searchNftsRequestSchema = registry.register(
  "SearchNftsRequest",
  z.object({
    params: projectParamsSchema,
    query: paginatedQuerySchema.merge(sortQuerySchema).merge(
      z.object({
        search: z.string().optional(),
        query: z.string().optional(),
      })
    ),
  })
);

export const searchNftsResponseSchema = registry.register("SearchNftsResponse", nftPaginatedResponseSchema);

export type SearchNftsRequest = z.infer<typeof searchNftsRequestSchema>;
export type SearchNftsResponse = z.infer<typeof searchNftsResponseSchema>;

export const updateNftRequestSchema = registry.register(
  "UpdateNftRequest",
  z.object({
    params: nftParamsSchema,
    body: metadataSchema.pick({
      description: true,
      image: true,
      attributes: true,
      animationUrl: true,
      externalUrl: true,
    }),
  })
);

export const updateNftResponseSchema = registry.register("UpdateNftResponse", nftSchema);

export type UpdateNftRequest = z.infer<typeof updateNftRequestSchema>;
export type UpdateNftResponse = z.infer<typeof updateNftResponseSchema>;

export const partialUpdateNftRequestSchema = registry.register(
  "PartialUpdateNftRequest",
  z.object({
    params: nftParamsSchema,
    body: metadataSchema
      .pick({
        description: true,
        image: true,
        attributes: true,
        animationUrl: true,
        externalUrl: true,
      })
      .partial(),
  })
);

export const partialUpdateNftResponseSchema = registry.register("PartialUpdateNftResponse", nftSchema);

export type PartialUpdateNftRequest = z.infer<typeof partialUpdateNftRequestSchema>;
export type PartialUpdateNftResponse = z.infer<typeof partialUpdateNftResponseSchema>;

export const transferNftRequestSchema = registry.register(
  "TransferNftRequest",
  z.object({
    params: nftParamsSchema,
    body: z.object({ receiverAddress: base58PublicKeySchema }),
  })
);

export const transferNftResponseSchema = registry.register(
  "TransferNftResponse",
  nftTransactionResponseSchema
);

export type TransferNftRequest = z.infer<typeof transferNftRequestSchema>;
export type TransferNftResponse = z.infer<typeof transferNftResponseSchema>;

export const burnAssetRequestSchema = registry.register(
  "BurnAssetRequest",
  z.object({ params: nftParamsSchema })
);

export const burnAssetResponseSchema = registry.register("BurnAssetResponse", nftTransactionResponseSchema);

export type BurnAssetRequest = z.infer<typeof burnAssetRequestSchema>;
export type BurnAssetResponse = z.infer<typeof burnAssetResponseSchema>;

const nonTransferableNftSchema = z.object({
  params: nftParamsSchema,
});

export const getNftClaimLinkRequestSchema = registry.register(
  "GetNftClaimLinkRequest",
  nonTransferableNftSchema
);

export const getNftClaimLinkResponseSchema = registry.register(
  "GetNftClaimLinkResponse",
  z.object({
    link: z.string(),
    mintAddress: z.string(),
    claimerAddress: base58PublicKeySchema.optional(),
    otp: z.string().uuid().optional(),
  })
);

export type GetNftClaimLinkRequest = z.infer<typeof getNftClaimLinkRequestSchema>;
export type GetNftClaimLinkResponse = z.infer<typeof getNftClaimLinkResponseSchema>;

export const revokeNftRequestSchema = registry.register("RevokeNftRequest", nonTransferableNftSchema);

export const revokeNftResponseSchema = registry.register("RevokeNftResponse", nftTransactionResponseSchema);

export type RevokeNftRequest = z.infer<typeof revokeNftRequestSchema>;
export type RevokeNftResponse = z.infer<typeof revokeNftResponseSchema>;

export const burnNftRequestSchema = registry.register("BurnNftRequest", nonTransferableNftSchema);

export const burnNftResponseSchema = registry.register("BurnNftResponse", nftTransactionResponseSchema);

export type BurnNftRequest = z.infer<typeof burnNftRequestSchema>;
export type BurnNftResponse = z.infer<typeof burnNftResponseSchema>;
