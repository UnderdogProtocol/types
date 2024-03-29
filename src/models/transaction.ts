import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import { networkEnumSchema, statusEnumSchema, transactionTypesEnumSchema } from "./enum";
import { base58PublicKeySchema } from "./metadata";
import { dateStringSchema } from "./primitive";

extendZodWithOpenApi(z);

export const transactionSchema = z.object({
  id: z.string().openapi({
    description: "Transaction ID that identifies the Transaction generated by an API request",
  }),
  status: statusEnumSchema,
  type: transactionTypesEnumSchema,
  walletAddress: base58PublicKeySchema,
  data: z
    .string()
    .nullish()
    .transform((x) => x ?? undefined)
    .openapi({
      description: "Transaction data in stringified JSON format",
    }),
  signature: z.string().nullish().openapi({
    description: "Signature of the on-chain transaction",
    example: "2yVZcx5rMDLDcqe31Uua6a93qw3qrNMsjroYWXV3sytttnrPSxk2heGK7yUorW6KrfiEpkLNYNVPivhgoigdRnK6",
  }),
  createdAt: dateStringSchema,
  network: networkEnumSchema,
});

export type Transaction = z.infer<typeof transactionSchema>;
