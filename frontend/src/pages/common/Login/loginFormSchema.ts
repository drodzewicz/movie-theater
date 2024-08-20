import { z } from "zod";

const loginFormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
});

export type LoginSchemaType = z.infer<typeof loginFormSchema>;

export { loginFormSchema };
