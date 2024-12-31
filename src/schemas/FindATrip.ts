import { z } from "zod";

const findATripSchema = z.object({
  pickUpLocation: z
    .string()
    .min(1, { message: "To is required" })
    .transform((val) => val),
  destination: z
    .string()
    .min(1, { message: "From is required" })
    .transform((val) => val),
});

export type findATripSchemaType = z.infer<typeof findATripSchema>;
export { findATripSchema };
