import { z } from "zod";

// Enum for status and vehicle type
enum StatusEnum {
  Active = "active",
  Inactive = "inactive",
}

enum VehicleTypeEnum {
  car = "car",
  motorcycle = "motorcycle",
  auto = "auto",
}

// Define Zod schema for form validation
const captainSignupSchema = z.object({
  fullName: z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
  }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, "Password must be at least 6 characters"),
  socketId: z.string().optional(), // Optional field
  status: z.nativeEnum(StatusEnum).default(StatusEnum.Inactive).optional(),
  vehicle: z.object({
    color: z.string().min(1, "Color is required"),
    plate: z.string().min(1, "Plate is required"),
    vehicleType: z.nativeEnum(VehicleTypeEnum),
    capacity: z.coerce.number().min(1, "Capacity must be at least 1"), // Automatically converts strings to numbers
  }),
});

// Inferred type for form data
export type captainFormDataSignup = z.infer<typeof captainSignupSchema>;
export { VehicleTypeEnum, captainSignupSchema, StatusEnum };
