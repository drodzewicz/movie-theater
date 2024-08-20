import { z } from "zod";

const createManagerFormSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    role: z.string(),
    locations: z.array(z.string()),
});

export type CreateManagerSchemaType = z.infer<typeof createManagerFormSchema>;

export default createManagerFormSchema;
