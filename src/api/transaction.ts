import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { AnyZodObject, z } from "zod";

import { memberSchema, nftSchema, projectSchema } from "../models";

extendZodWithOpenApi(z);

function createTransactionResponseSchema<T extends AnyZodObject>(schema: T) {
  return z
    .object({
      transactionId: z.string().openapi({
        description: "Transaction ID that identifies the Transaction generated by an API request",
      }),
    })
    .merge(schema);
}

const nftTransactionSchema = nftSchema.extend({ nftId: nftSchema.shape.id }).pick({
  nftId: true,
  projectId: true,
  transferable: true,
  compressed: true,
  mintAddress: true,
});

const sftTransactionSchema = nftSchema.extend({ nftId: nftSchema.shape.id }).pick({
  nftId: true,
  projectId: true,
});

const compressedSftTransactionSchema = nftSchema.pick({
  projectId: true,
  transferable: true,
  compressed: true,
  semiFungible: true,
});

export const nftTransactionResponseSchema =
  createTransactionResponseSchema<typeof nftTransactionSchema>(nftTransactionSchema);

export const sftTransactionResponseSchema =
  createTransactionResponseSchema<typeof sftTransactionSchema>(sftTransactionSchema);

export const compressedSftTransactionResponseSchema = createTransactionResponseSchema<
  typeof compressedSftTransactionSchema
>(compressedSftTransactionSchema);

export type NftTransactionResponse = z.infer<typeof nftTransactionResponseSchema>;

const projectTransactionSchema = projectSchema.extend({ projectId: projectSchema.shape.id }).pick({
  projectId: true,
  transferable: true,
  compressed: true,
  mintAddress: true,
});

export const projectTransactionResponseSchema =
  createTransactionResponseSchema<typeof projectTransactionSchema>(projectTransactionSchema);

export type ProjectTransactionResponse = z.infer<typeof projectTransactionResponseSchema>;

const memberTransactionSchema = memberSchema.pick({
  walletAddress: true,
  superAdminAddress: true,
  orgId: true,
});

export const memberTransactionResponseSchema =
  createTransactionResponseSchema<typeof memberTransactionSchema>(memberTransactionSchema);
