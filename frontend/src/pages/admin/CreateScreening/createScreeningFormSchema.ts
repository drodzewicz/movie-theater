import { z } from "zod";

const createScreeningFormSchema = z.object({
    movie: z.string(),
    hall: z.string(),
    location: z.string(),
    date: z.string(),
});

export type CreateScreeningSchemaType = z.infer<typeof createScreeningFormSchema>;

export default createScreeningFormSchema;
