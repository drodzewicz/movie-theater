import { z } from "zod";

const createHallFormSchema = z.object({
    name: z.string(),
    floor: z.string(),
    room: z.string(),
});

export type CreateHallSchemaType = z.infer<typeof createHallFormSchema>;

export default createHallFormSchema;
