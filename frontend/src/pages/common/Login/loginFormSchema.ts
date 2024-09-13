import { z } from "zod";

const loginFormSchema = z.object({
    username: z.string(),
    password: z.string(),
});

export type LoginSchemaType = z.infer<typeof loginFormSchema>;

export { loginFormSchema };
