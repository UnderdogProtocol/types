import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import {
  nftPaginatedResponseSchema,
  nftParamsSchema,
  nftTransactionResponseSchema,
  paginatedQuerySchema,
  projectParamsSchema,
} from "../api";
import {
  nftSchema,
  metadataSchema,
  publicKeyValueSchema,
  publicNftSchema,
  sellerFeeBasisPointsSchema,
} from "../models";
import { registry } from "../openapi";

extendZodWithOpenApi(z);

export const createNftInputSchema = metadataSchema.merge(
  z.object({
    receiverAddress: publicKeyValueSchema.optional().openapi({
      description: "Wallet address that will receive the NFT",
    }),
    delegated: z.boolean().optional().openapi({
      description: "If true, your Project will have delegated authority over the NFT",
    }),
    sellerFeeBasisPoints: sellerFeeBasisPointsSchema.optional(),
  })
);

export type CreateNftInput = z.infer<typeof createNftInputSchema>;

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

export const createTransferableNftResponseSchema = registry.register(
  "CreateTransferableNftResponse",
  nftTransactionResponseSchema
);

export const createCompressedNftResponseSchema = registry.register(
  "CreateCompressedNftResponse",
  nftTransactionResponseSchema.omit({
    nftId: true,
    mintAddress: true,
  })
);

export const createNonTransferableNftResponseSchema = registry.register(
  "CreateNonTransferableNftResponse",
  nftSchema
);

export const upsertNftResponseSchema = registry.register("UpsertNftResponse", z.array(nftSchema));

export const createNftResponseSchema = z.union([
  createTransferableNftResponseSchema,
  createCompressedNftResponseSchema,
  createNonTransferableNftResponseSchema,
  upsertNftResponseSchema,
]);

export type CreateNftRequest = z.infer<typeof createNftRequestSchema>;
export type CreateTransferableNftResponse = z.infer<typeof createTransferableNftResponseSchema>;
export type createNonTransferableNftResponse = z.infer<typeof createNonTransferableNftResponseSchema>;
export type CreateCompressedNftResponse = z.infer<typeof createCompressedNftResponseSchema>;
export type UpsertNftResponse = z.infer<typeof upsertNftResponseSchema>;
export type CreateNftResponse = z.infer<typeof createNftResponseSchema>;

export const batchCompressedNftRequestSchema = z.object({
  params: projectParamsSchema,
  body: metadataSchema.merge(z.object({ receiverAddresses: publicKeyValueSchema.array().optional() })),
});

export type BatchCompressedNftRequest = z.infer<typeof batchCompressedNftRequestSchema>;

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
  z.object({
    params: z.object({
      mintAddress: publicKeyValueSchema,
    }),
  })
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
    query: paginatedQuerySchema.merge(z.object({ ownerAddress: publicKeyValueSchema.optional() })),
  })
);

export const getNftsResponseSchema = registry.register("GetNftsResponse", nftPaginatedResponseSchema);

export type GetNftsRequest = z.infer<typeof getNftsRequestSchema>;
export type GetNftsResponse = z.infer<typeof getNftsResponseSchema>;

export const searchNftsRequestSchema = registry.register(
  "SearchNftsRequest",
  z.object({
    params: projectParamsSchema,
    query: paginatedQuerySchema.merge(
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
    body: z.object({ receiverAddress: publicKeyValueSchema }),
  })
);

export const transferNftResponseSchema = registry.register(
  "TransferNftResponse",
  nftTransactionResponseSchema
);

export type TransferNftRequest = z.infer<typeof transferNftRequestSchema>;
export type TransferNftResponse = z.infer<typeof transferNftResponseSchema>;

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
    claimerAddress: publicKeyValueSchema.optional(),
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
