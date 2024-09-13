import { z } from "zod";

const createLocationFormSchema = z.object({
    identifier: z.string().min(3, { message: "Identifier must be at least 3 characters long" }),
    country: z.string(),
    city: z.string(),
    street: z.string(),
    buildingNumber: z.string(),
    zipCode: z.string(),
    logoUrl: z.string(),
});

export type CreateLocationSchemaType = z.infer<typeof createLocationFormSchema>;

export default createLocationFormSchema;
