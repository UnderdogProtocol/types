import { z } from "zod";

import { base58PublicKeySchema } from "../models";

export const createTokenPayloadSchema = z.object({
  name: z.string(),
  symbol: z.string(),
  image: z.string(),
  transferable: z.boolean(),
  decimals: z.number().min(0).max(9),
});

export type CreateTokenPayload = z.infer<typeof createTokenPayloadSchema>;

export const renounceTokenPayloadSchema = z.object({
  mintAddress: base58PublicKeySchema,
});

export type RenounceTokenPayload = z.infer<typeof renounceTokenPayloadSchema>;

export const mintTokensPayloadSchema = z.object({
  mintAddress: base58PublicKeySchema,
  receiverAddresses: z.array(base58PublicKeySchema),
  amount: z.number().min(1),
});

export type MintTokensPayload = z.infer<typeof mintTokensPayloadSchema>;
