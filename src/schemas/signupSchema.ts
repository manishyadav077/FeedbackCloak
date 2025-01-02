import { z } from "zod";

export const usernameValdation = z
  .string()
  .min(2, "Username must be atleast 2 characters")
  .max(20, "Username must be less than 20 characters")
  .regex(/^[a-zA-Z0-9_]{3,16}$/, "Username must not contain special chracter");

export const signUpSchema = z.object({
    username: usernameValdation,
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(6, {message: "Password must be at least 6 characters"})
})