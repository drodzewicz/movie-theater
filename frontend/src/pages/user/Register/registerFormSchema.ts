import { z } from "zod";

const registerFormSchema = z
    .object({
        firstName: z.string(),
        lastName: z.string(),
        username: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
        password: z
            .string()
            .min(1, { message: "Please enter a password" })
            .min(6, { message: "Password must be at least 6 characters" }),
        confirmPassword: z
            .string()
            .min(1, { message: "Please confirm your password" })
            .min(6, { message: "Password must be at least 6 characters" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    });

export type RegisterUserSchemaType = z.infer<typeof registerFormSchema>;

export default registerFormSchema;
