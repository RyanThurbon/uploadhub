import { z } from "zod";

export const signInFormSchema = z.object({
  email: z.string().email({
    message: "Invalid email provided",
  }),
  password: z.string().min(8, {
    message: "Password should be at least 8 characters",
  }),
});

export const defaultSignInFormValues: z.infer<typeof signInFormSchema> = {
  email: "",
  password: "",
};
