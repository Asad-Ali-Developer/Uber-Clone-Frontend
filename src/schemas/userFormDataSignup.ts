import { z } from "zod";

// Define Zod schema for form validation
const userSignupSchema = z.object({
  fullName: z.object({
    firstName: z.string().min(3, "First name must be at least 3 characters"),
    lastName: z.string().min(3, "Last name must be at least 3 characters"),
  }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// Inferred type for form data
export type userFormDataSignup = z.infer<typeof userSignupSchema>;
export { userSignupSchema };
