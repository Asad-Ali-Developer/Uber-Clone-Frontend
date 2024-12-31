import { z } from "zod";

const captainLoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, "Password must be atleast 6 characters"),
});

export type captainFormDataLogin = z.infer<typeof captainLoginSchema>;
export { captainLoginSchema };
