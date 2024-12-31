import { z } from "zod";

const userLoginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, "Password must be atleast 6 characters"),
  });
  
  export type userFormDataLogin = z.infer<typeof userLoginSchema>;
  export { userLoginSchema };

