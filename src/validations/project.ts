import { z } from "zod";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";


import {
  nftPaginatedResponseSchema,
  paginatedQuerySchema,
  projectPaginatedResponseSchema,
  projectParamsSchema,
  projectTransactionResponseSchema,
  sortQuerySchema,
} from "../api";
import { metadataSchema, projectSchema } from "../models";

extendZodWithOpenApi(z);

export const sizeEnumSchema = z.enum(["xs", "sm", "md", "lg", "xl", "2xl"]);

export type SizeEnum = z.infer<typeof sizeEnumSchema>;

export const createProjectRequestSchema = z.object({
  body: projectSchema
    .pick({
      name: true,
      symbol: true,
      description: true,
      image: true,
      transferable: true,
      compressed: true,
      animationUrl: true,
    })
    .merge(z.object({ size: sizeEnumSchema.optional().default("xs") })),
});

export const createProjectResponseSchema = projectTransactionResponseSchema;

export type CreateProjectRequest = z.infer<typeof createProjectRequestSchema>;
export type CreateProjectResponse = z.infer<typeof createProjectResponseSchema>;

export const getAllProjectsRequestSchema = z.object({
  query: paginatedQuerySchema,
});

export const getAllProjectsResponseSchema = projectPaginatedResponseSchema;

export type GetAllProjectsRequest = z.infer<typeof getAllProjectsRequestSchema>;
export type GetAllProjectsResponse = z.infer<typeof getAllProjectsResponseSchema>;

export const getProjectsRequestSchema = z.object({
  params: projectParamsSchema.pick({ type: true }),
  query: paginatedQuerySchema,
});

export const getProjectsResponseSchema = projectPaginatedResponseSchema;

export type GetProjectsRequest = z.infer<typeof getProjectsRequestSchema>;
export type GetProjectsResponse = z.infer<typeof getAllProjectsResponseSchema>;

export const getProjectRequestSchema = z.object({
  params: projectParamsSchema,
  query: paginatedQuerySchema.merge(sortQuerySchema),
});

export const getProjectResponseSchema = projectSchema.merge(z.object({ nfts: nftPaginatedResponseSchema }));

export type GetProjectRequest = z.infer<typeof getProjectRequestSchema>;
export type GetProjectResponse = z.infer<typeof getProjectResponseSchema>;

export const getProjectStatsRequestSchema = z.object({
  params: projectParamsSchema,
});

export const getProjectStatsResponseSchema = z.object({
  total: z.number().openapi({ description: "Total number of NFTs in the Project" }),
  confirmed: z.number().openapi({ description: "Number NFTs confirmed on-chain" }),
  processing: z.number().openapi({ description: "Number of NFTs currently minting" }),
  pending: z.number().openapi({ description: "Number of NFTs lazily minted" }),
});

export type GetProjectStatsRequest = z.infer<typeof getProjectStatsRequestSchema>;
export type GetProjectStatsResponse = z.infer<typeof getProjectStatsResponseSchema>;

export const updateProjectRequestSchema = z.object({
  params: projectParamsSchema,
  body: metadataSchema.pick({ description: true, image: true, animationUrl: true }),
});

export const updateProjectResponseSchema = projectSchema;

export type UpdateProjectRequest = z.infer<typeof updateProjectRequestSchema>;
export type UpdateProjectResponse = z.infer<typeof updateProjectResponseSchema>;

export const partialUpdateProjectRequestSchema = z.object({
  params: projectParamsSchema,
  body: metadataSchema.pick({ description: true, image: true, animationUrl: true }).partial(),
});

export const partialUpdateProjectResponseSchema = projectSchema;

export type PartialUpdateProjectRequest = z.infer<typeof partialUpdateProjectRequestSchema>;
export type PartialUpdateProjectResponse = z.infer<typeof partialUpdateProjectResponseSchema>;

export const updateProjectNameRequestSchema = z.object({
  params: projectParamsSchema,
  body: metadataSchema.pick({ name: true }),
});

export const updateProjectNameResponseSchema = projectTransactionResponseSchema;

export type UpdateProjectNameRequest = z.infer<typeof updateProjectNameRequestSchema>;
export type UpdateProjectNameResponse = z.infer<typeof updateProjectNameResponseSchema>;

export const updateProjectSymbolRequestSchema = z.object({
  params: projectParamsSchema,
  body: metadataSchema.pick({ symbol: true }),
});

export const updateProjectSymbolResponseSchema = projectTransactionResponseSchema;

export type UpdateProjectSymbolRequest = z.infer<typeof updateProjectSymbolRequestSchema>;
export type UpdateProjectSymbolResponse = z.infer<typeof updateProjectSymbolResponseSchema>;
