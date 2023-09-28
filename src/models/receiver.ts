import { z } from "zod";

export const receiverSchema = z
  .object({
    address: z.string(),
    namespace: z.string().default("public"),
    identifier: z.string(),
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
