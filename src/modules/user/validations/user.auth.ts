import { z } from "zod"

export const registerSchema = z.object({
  firstName: z.string().min(2, "Name is too short"),
  lastName: z.string().min(2, "Name is too short"),
  email: z.email("Invalid email address"),
  phone: z.string().min(10, "Enter a valid phone number"),
})

export type RegisterFormValues = z.infer<typeof registerSchema>