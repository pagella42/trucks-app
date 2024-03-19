import { z } from 'zod';

export const BaseResponseSchema = z.object({
  status: z.number(),
});
