import { z } from "zod";

export const signUpFormSchema = z
  .object({
    username: z.string().min(4, {
      message: "Username should be at least 4 characters",
    }),
    email: z.string().email({
      message: "Invalid email provided",
    }),
    password: z.string().min(8, {
      message: "Password should be at least 8 characters",
    }),
    confirmPassword: z.string().min(8, {
      message: "Password should be at least 8 characters",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const defaultSignUpFormValues: z.infer<typeof signUpFormSchema> = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};
