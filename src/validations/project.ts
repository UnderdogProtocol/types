import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import {
  nftPaginatedResponseSchema,
  paginatedQuerySchema,
  projectPaginatedResponseSchema,
  projectParamsSchema,
  projectTransactionResponseSchema,
  searchQuerySchema,
  sortQuerySchema,
} from "../api";
import {
  base58PublicKeySchema,
  idSchema,
  metadataSchema,
  projectSchema,
  sellerFeeBasisPointsSchema,
} from "../models";
import { registry } from "../openapi";

extendZodWithOpenApi(z);

export const createProjectRequestSchema = registry.register(
  "CreateProjectRequest",
  z.object({
    body: projectSchema
      .pick({
        name: true,
        symbol: true,
        description: true,
        image: true,
        semifungible: true,
        animationUrl: true,
        externalUrl: true,
        attributes: true,
        core: true,
      })
      .merge(z.object({ sellerFeeBasisPoints: sellerFeeBasisPointsSchema.optional() })),
  })
);

export const createProjectResponseSchema = registry.register(
  "CreateProjectResponse",
  z.object({
    projectId: idSchema,
    transactionId: z.string().uuid(),
    mintAddress: base58PublicKeySchema.optional(),
  })
);

export type CreateProjectRequest = z.infer<typeof createProjectRequestSchema>;
export type CreateProjectResponse = z.infer<typeof createProjectResponseSchema>;

export const getProjectsRequestSchema = registry.register(
  "GetProjectsRequest",
  z.object({ query: paginatedQuerySchema.merge(sortQuerySchema) })
);

export const getProjectsResponseSchema = registry.register(
  "GetProjectsResponse",
  projectPaginatedResponseSchema
);

export type GetProjectsRequest = z.infer<typeof getProjectsRequestSchema>;
export type GetProjectsResponse = z.infer<typeof getProjectsResponseSchema>;

export const searchProjectsRequestSchema = registry.register(
  "SearchProjectsRequest",
  z.object({
    query: paginatedQuerySchema.merge(sortQuerySchema).merge(z.object({ query: searchQuerySchema })),
  })
);

export const searchProjectsResponseSchema = registry.register(
  "SearchProjectsResponse",
  projectPaginatedResponseSchema
);

export type ParsedSearchProjectsRequest = z.infer<typeof searchProjectsRequestSchema>;
export type SearchProjectsRequest = {
  query: Omit<ParsedSearchProjectsRequest["query"], "query"> & { query: string };
};
export type SearchProjectsResponse = z.infer<typeof searchProjectsResponseSchema>;

export const getProjectRequestSchema = registry.register(
  "GetProjectRequest",
  z.object({
    params: projectParamsSchema,
    query: paginatedQuerySchema.merge(sortQuerySchema),
  })
);

export const getProjectResponseSchema = registry.register(
  "GetProjectResponse",
  projectSchema.merge(z.object({ nfts: nftPaginatedResponseSchema }))
);

export type GetProjectRequest = z.infer<typeof getProjectRequestSchema>;
export type GetProjectResponse = z.infer<typeof getProjectResponseSchema>;

export const getProjectStatsRequestSchema = registry.register(
  "GetProjectStatsRequest",
  z.object({ params: projectParamsSchema })
);

export const getProjectStatsResponseSchema = registry.register(
  "GetProjectStatsResponse",
  z.object({
    total: z.number().openapi({ description: "Total number of assets in the Project" }),
    confirmed: z.number().openapi({ description: "Number of confirmed assets" }),
    processing: z.number().openapi({ description: "Number of assets being processed" }),
    pending: z.number().openapi({ description: "Number of assets waiting to be processed" }),
    burned: z.number().openapi({ description: "Number of burned assets" }),
    failed: z.number().openapi({ description: "Number of assets failed" }),
  })
);

export type GetProjectStatsRequest = z.infer<typeof getProjectStatsRequestSchema>;
export type GetProjectStatsResponse = z.infer<typeof getProjectStatsResponseSchema>;

const updateProjectRequestBodySchema = metadataSchema.merge(
  z.object({ sellerFeeBasisPoints: sellerFeeBasisPointsSchema })
);

export const updateProjectRequestSchema = registry.register(
  "UpdateProjectRequest",
  z.object({ params: projectParamsSchema, body: updateProjectRequestBodySchema })
);
export type UpdateProjectRequest = z.infer<typeof updateProjectRequestSchema>;

export const updateProjectResponseSchema = registry.register(
  "UpdateProjectResponse",
  projectTransactionResponseSchema.omit({ transferable: true, compressed: true })
);
export type UpdateProjectResponse = z.infer<typeof updateProjectResponseSchema>;

export const partialUpdateProjectRequestSchema = registry.register(
  "PartialUpdateProjectRequest",
  z.object({ params: projectParamsSchema, body: updateProjectRequestBodySchema.partial() })
);
export type PartialUpdateProjectRequest = z.infer<typeof partialUpdateProjectRequestSchema>;

export const partialUpdateProjectResponseSchema = registry.register(
  "PartialUpdateProjectResponse",
  projectTransactionResponseSchema.omit({ transferable: true, compressed: true })
);
export type PartialUpdateProjectResponse = z.infer<typeof partialUpdateProjectResponseSchema>;

export const withdrawProjectRoyaltiesRequestSchema = registry.register(
  "WithdrawProjectRoyaltiesRequest",
  z.object({
    params: projectParamsSchema,
    body: z.object({ receiverAddress: base58PublicKeySchema }),
  })
);

export const withdrawProjectRoyaltiesResponseSchema = registry.register(
  "WithdrawProjectRoyaltiesResponse",
  projectTransactionResponseSchema.omit({ transferable: true, compressed: true })
);

export type WithdrawProjectRoyaltiesRequest = z.infer<typeof withdrawProjectRoyaltiesRequestSchema>;
export type WithdrawProjectRoyaltiesResponse = z.infer<typeof withdrawProjectRoyaltiesResponseSchema>;
