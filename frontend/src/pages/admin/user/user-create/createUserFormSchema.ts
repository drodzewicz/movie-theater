import { z } from "zod";

const createUserFormSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    password: z
        .string()
        .min(1, { message: "Please enter a password" })
        .min(6, { message: "Password must be at least 6 characters" }),
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
});

export type CreateUserSchemaType = z.infer<typeof createUserFormSchema>;

export default createUserFormSchema;
