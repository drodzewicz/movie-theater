import { z } from "zod";

const createUserFormSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    role: z.string().optional(),
});

export type CreateUserSchemaType = z.infer<typeof createUserFormSchema>;

export default createUserFormSchema;
