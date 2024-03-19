import { makeErrors } from "@zodios/core";
import { z } from "zod";

const ErrorSchema = z.object({
  response: z.object({
    status: z.string().or(z.number()),
    errorMessage: z.string(),
  }),
});

const errors = makeErrors([
  {
    status: 400,
    schema: ErrorSchema,
  },
]);
export default errors;

export type ErrorType = z.infer<typeof ErrorSchema>;
