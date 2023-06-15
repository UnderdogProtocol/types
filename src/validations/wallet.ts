import { z } from "zod";

import { meSchema } from "../models";

export const getMeResponse = meSchema;
export type GetMeResponse = z.infer<typeof getMeResponse>;
