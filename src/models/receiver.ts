import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export const receiverSchema = z
  .object({
    address: z.string().optional().openapi({
      description: "Address that will receive the NFT",
      example: "7px1aXrdcySNHEF8aQ12iHBW5a2MVsqQU1ELkTdYAgjN",
    }),
    namespace: z.string().optional().openapi({
      description: "Namespace of the application to determine the Passport address",
      example: "public",
    }),
    identifier: z.string().optional().openapi({
      description: "Identifier of the user to determine the Passport address",
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
