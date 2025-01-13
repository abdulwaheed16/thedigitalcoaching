import { z } from "zod";

export const personalInformationSchema = z.object({
  fullname: z.string().min(3, "Full Name is required"),
  email: z.string().min(3, "Email is required").email("Invalid Email Address"),
  phone: z
    .string()
    .min(10, "Phone Number is required")
    .max(15, "Invalid Contact Number"),
  //   program: z.string().min(1, "Program is required"),
  //   subjects: z.array(z.string()).min(1, "Select at least one subject"),
});
