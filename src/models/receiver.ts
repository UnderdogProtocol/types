import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import { base58PublicKeySchema } from "./metadata";

extendZodWithOpenApi(z);

export const receiverSchema = z
  .object({
    address: base58PublicKeySchema.optional().openapi({
      description: "Address that will receive the NFT",
      example: "7px1aXrdcySNHEF8aQ12iHBW5a2MVsqQU1ELkTdYAgjN",
    }),
    namespace: z.string().optional().openapi({
      description: "Namespace of the application (e.g. solarplex, superteam)",
      example: "public",
    }),
    identifier: z.string().optional().openapi({
      description: "Identifier for the user's Passport (i.e. email, wallet address, twitter handle)",
      example: "kevin@underdogprotocol.com",
    }),
  })
  .refine((data) => (data.address ? true : !!data.identifier), {
    message: "Invalid input: if address is empty, identifier is required.",
  });

export type Receiver =
  | {
      address: string;
      namespace?: string;
      identifier?: string;
    }
  | {
      address?: never;
      namespace?: string;
      identifier: string;
    };
