import { z } from "zod";

const createLocationFormSchema = z.object({
    country: z.string(),
    city: z.string(),
    street: z.string(),
    buildingNumber: z.string(),
    zipCode: z.string(),
    logoUrl: z.string(),
});

export type CreateLocationSchemaType = z.infer<typeof createLocationFormSchema>;

export default createLocationFormSchema;
