import { z } from "zod";

const createMovieFormSchema = z.object({
    title: z.string(),
    description: z.string(),
    duration: z.number(),
    language: z.string(),
    releaseDate: z.string(),
    posterUrl: z.string().optional(),
    trailerUrl: z.string().optional(),
});

export type CreateMovieSchemaType = z.infer<typeof createMovieFormSchema>;

export default createMovieFormSchema;
