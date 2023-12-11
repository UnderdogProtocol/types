import { z } from "zod";

import { rechargeSchema } from "../models";
import { orgParams } from "./org";

export const createRechargeRequestSchema = z.object({
  params: orgParams,
  body: rechargeSchema.pick({ limit: true, amount: true }),
});

export type CreateRechargeRequest = z.infer<typeof createRechargeRequestSchema>;

export const createRechargeResponseSchema = rechargeSchema;
export type CreateRechargeResponse = z.infer<typeof createRechargeResponseSchema>;

export const updateRechargeRequestSchema = z.object({
  params: orgParams,
  body: rechargeSchema.pick({ limit: true, amount: true, enabled: true }),
});
export type UpdateRechargeRequest = z.infer<typeof updateRechargeRequestSchema>;

export const updateRechargeResponseSchema = rechargeSchema;
export type UpdateRechargeResponse = z.infer<typeof updateRechargeResponseSchema>;
