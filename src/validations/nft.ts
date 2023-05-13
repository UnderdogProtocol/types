import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import {
  nftPaginatedResponseSchema,
  nftParamsSchema,
  nftTransactionResponseSchema,
  paginatedQuerySchema,
  projectParamsSchema,
} from "../api";
import { nftSchema, metadataSchema, publicKeyValueSchema } from "../models";

extendZodWithOpenApi(z);

export const createNftInputSchema = metadataSchema.merge(
  z.object({
    receiverAddress: publicKeyValueSchema.optional().openapi({
      description: "Wallet address that will receive the NFT",
    }),
  })
);

export type CreateNftInput = z.infer<typeof createNftInputSchema>;

export const createNftRequestSchema = z.object({
  params: projectParamsSchema,
  body: createNftInputSchema.merge(
    z.object({
      upsert: z.boolean().optional().default(false).openapi({
        description: "If true, will update the NFT if one with the same owner / claimer exists",
      }),
    })
  ),
});

export const createTransferableNftResponseSchema = nftTransactionResponseSchema;
export const createCompressedNftResponseSchema = nftTransactionResponseSchema;
export const createNonTransferableNftResponseSchema = nftSchema;
export const upsertNftResponseSchema = z.array(nftSchema);
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

export const createBatchNftRequestSchema = z.object({
  params: projectParamsSchema,
  body: z.array(createNftInputSchema),
});

export type CreateBatchNftRequest = z.infer<typeof createBatchNftRequestSchema>;

export const getNftRequestSchema = z.object({
  params: nftParamsSchema,
});

export const getNftResponseSchema = nftSchema;

export type GetNftRequest = z.infer<typeof getNftRequestSchema>;
export type GetNftResponse = z.infer<typeof getNftResponseSchema>;

export const getNftsRequestSchema = z.object({
  params: projectParamsSchema,
  query: paginatedQuerySchema.merge(z.object({ ownerAddress: publicKeyValueSchema.optional() })),
});

export const getNftsResponseSchema = nftPaginatedResponseSchema;

export type GetNftsRequest = z.infer<typeof getNftsRequestSchema>;
export type GetNftsResponse = z.infer<typeof getNftsResponseSchema>;

export const searchNftsRequestSchema = z.object({
  params: projectParamsSchema,
  query: paginatedQuerySchema.merge(z.object({ search: z.string().optional() })),
});

export const searchNftsResponseSchema = nftPaginatedResponseSchema;

export type SearchNftsRequest = z.infer<typeof searchNftsRequestSchema>;
export type SearchNftsResponse = z.infer<typeof searchNftsResponseSchema>;

export const updateNftRequestSchema = z.object({
  params: nftParamsSchema,
  body: metadataSchema.pick({ description: true, image: true, attributes: true, animationUrl: true }),
});

export const updateNftResponseSchema = nftSchema;

export type UpdateNftRequest = z.infer<typeof updateNftRequestSchema>;
export type UpdateNftResponse = z.infer<typeof updateNftResponseSchema>;

export const partialUpdateNftRequestSchema = z.object({
  params: nftParamsSchema,
  body: metadataSchema
    .pick({
      description: true,
      image: true,
      attributes: true,
      animationUrl: true,
    })
    .partial(),
});

export const partialUpdateNftResponseSchema = nftSchema;

export type PartialUpdateNftRequest = z.infer<typeof partialUpdateNftRequestSchema>;
export type PartialUpdateNftResponse = z.infer<typeof partialUpdateNftResponseSchema>;

const nonTransferableNftSchema = z.object({
  params: nftParamsSchema.omit({ type: true }),
});

export const getNftClaimLinkRequestSchema = nonTransferableNftSchema;

export const getNftClaimLinkResponseSchema = z
  .object({
    link: z.string(),
    mintAddress: z.string(),
    claimerAddress: publicKeyValueSchema.optional(),
    otp: z.string().uuid().optional(),
  })
  .refine(
    (data) => {
      return (data.claimerAddress && !data.otp) || (!data.claimerAddress && data.otp);
    },
    {
      message: "The object must contain either 'claimerAddress' or 'otp', but not both.",
    }
  );

export type GetNftClaimLinkRequest = z.infer<typeof getNftClaimLinkRequestSchema>;
export type GetNftClaimLinkResponse = z.infer<typeof getNftClaimLinkResponseSchema>;

export const revokeNftRequestSchema = nonTransferableNftSchema;
export const revokeNftResponseSchema = nftTransactionResponseSchema;

export type RevokeNftRequest = z.infer<typeof revokeNftRequestSchema>;
export type RevokeNftResponse = z.infer<typeof revokeNftResponseSchema>;

export const burnNftRequestSchema = nonTransferableNftSchema;
export const burnNftResponseSchema = nftTransactionResponseSchema;

export type BurnNftRequest = z.infer<typeof burnNftRequestSchema>;
export type BurnNftResponse = z.infer<typeof burnNftResponseSchema>;
