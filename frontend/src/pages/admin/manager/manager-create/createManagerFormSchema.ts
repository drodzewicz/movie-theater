import { z } from "zod";

const createManagerFormSchema = z
    .object({
        firstName: z
            .string()
            .min(1, { message: "Please fill in first name" })
            .max(100, { message: "First name is too long" }),
        lastName: z
            .string()
            .min(1, { message: "Please fill in last name" })
            .max(100, { message: "First name is too long" }),
        password: z
            .string()
            .min(1, { message: "Please enter a password" })
            .min(6, { message: "Password must be at least 6 characters" }),
        username: z.string().min(3, "Username is required").max(100).trim(),
        role: z.string(),
        locations: z.array(z.string()),
    })
    .refine(
        (data) => {
            if (["ADMIN", "MANAGER"].includes(data.role)) {
                return data.locations?.length > 0;
            }
            return true;
        },
        {
            message: "Please choose a location",
            path: ["locations"],
        }
    );

export type CreateManagerSchemaType = z.infer<typeof createManagerFormSchema>;

export default createManagerFormSchema;
