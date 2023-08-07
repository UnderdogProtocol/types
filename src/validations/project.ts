import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import {
  nftPaginatedResponseSchema,
  paginatedQuerySchema,
  projectPaginatedResponseSchema,
  projectParamsSchema,
  projectTransactionResponseSchema,
  sortQuerySchema,
} from "../api";
import { metadataSchema, projectSchema } from "../models";
import { registry } from "../openapi";

extendZodWithOpenApi(z);

export const createProjectRequestSchema = registry.register(
  "CreateProjectRequest",
  z.object({
    body: projectSchema.pick({
      name: true,
      symbol: true,
      description: true,
      image: true,
      transferable: true,
      compressed: true,
      semifungible: true,
      isPublic: true,
      animationUrl: true,
      externalUrl: true,
      attributes: true,
    }),
  })
);

export const createProjectResponseSchema = registry.register(
  "CreateProjectResponse",
  projectTransactionResponseSchema
);

export type CreateProjectRequest = z.infer<typeof createProjectRequestSchema>;
export type CreateProjectResponse = z.infer<typeof createProjectResponseSchema>;

export const getAllProjectsRequestSchema = registry.register(
  "GetAllProjectsRequest",
  z.object({ query: paginatedQuerySchema.merge(sortQuerySchema) })
);

export const getAllProjectsResponseSchema = registry.register(
  "GetAllProjectsResponse",
  projectPaginatedResponseSchema
);

export type GetAllProjectsRequest = z.infer<typeof getAllProjectsRequestSchema>;
export type GetAllProjectsResponse = z.infer<typeof getAllProjectsResponseSchema>;

export const getProjectsRequestSchema = registry.register(
  "GetProjectsRequest",
  z.object({ query: paginatedQuerySchema })
);

export const getProjectsResponseSchema = registry.register(
  "GetProjectsResponse",
  projectPaginatedResponseSchema
);

export type GetProjectsRequest = z.infer<typeof getProjectsRequestSchema>;
export type GetProjectsResponse = z.infer<typeof getAllProjectsResponseSchema>;

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
  z.object({
    params: projectParamsSchema,
  })
);

export const getProjectStatsResponseSchema = registry.register(
  "GetProjectStatsResponse",
  z.object({
    total: z.number().openapi({ description: "Total number of NFTs in the Project" }),
    confirmed: z.number().openapi({ description: "Number NFTs confirmed on-chain" }),
    processing: z.number().openapi({ description: "Number of NFTs currently minting" }),
    pending: z.number().openapi({ description: "Number of NFTs lazily minted" }),
  })
);

export type GetProjectStatsRequest = z.infer<typeof getProjectStatsRequestSchema>;
export type GetProjectStatsResponse = z.infer<typeof getProjectStatsResponseSchema>;

export const updateProjectRequestSchema = registry.register(
  "UpdateProjectRequest",
  z.object({
    params: projectParamsSchema,
    body: metadataSchema.omit({ name: true, symbol: true }),
  })
);

export const updateProjectResponseSchema = registry.register("UpdateProjectResponse", projectSchema);

export type UpdateProjectRequest = z.infer<typeof updateProjectRequestSchema>;
export type UpdateProjectResponse = z.infer<typeof updateProjectResponseSchema>;

export const partialUpdateProjectRequestSchema = registry.register(
  "PartialUpdateProjectRequest",
  z.object({
    params: projectParamsSchema,
    body: metadataSchema.omit({ name: true, symbol: true }).partial(),
  })
);

export const partialUpdateProjectResponseSchema = registry.register(
  "PartialUpdateProjectResponse",
  projectSchema
);

export type PartialUpdateProjectRequest = z.infer<typeof partialUpdateProjectRequestSchema>;
export type PartialUpdateProjectResponse = z.infer<typeof partialUpdateProjectResponseSchema>;

export const updateProjectNameRequestSchema = registry.register(
  "UpdateProjectNameRequest",
  z.object({
    params: projectParamsSchema,
    body: metadataSchema.pick({ name: true }),
  })
);

export const updateProjectNameResponseSchema = registry.register(
  "UpdateProjectNameResponse",
  projectTransactionResponseSchema
);

export type UpdateProjectNameRequest = z.infer<typeof updateProjectNameRequestSchema>;
export type UpdateProjectNameResponse = z.infer<typeof updateProjectNameResponseSchema>;

export const updateProjectSymbolRequestSchema = registry.register(
  "UpdateProjectSymbolRequest",
  z.object({
    params: projectParamsSchema,
    body: metadataSchema.pick({ symbol: true }),
  })
);

export const updateProjectSymbolResponseSchema = registry.register(
  "UpdateProjectSymbolResponse",
  projectTransactionResponseSchema
);

export type UpdateProjectSymbolRequest = z.infer<typeof updateProjectSymbolRequestSchema>;
export type UpdateProjectSymbolResponse = z.infer<typeof updateProjectSymbolResponseSchema>;
