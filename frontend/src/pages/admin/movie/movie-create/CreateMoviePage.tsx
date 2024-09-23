import schema, {
    CreateMovieSchemaType,
} from "@/pages/admin/movie/movie-create/createMovieFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/button";
import FormWrapper from "@/components/form/FormWrapper";
import ReactPlayer from "react-player";
import DateField from "@/components/form/DateField";
import { useCreateMovie } from "@/service/movies/useCreateMovie";
import { useGoTo } from "@/hooks/useGoTo";

const CreateMoviePage = () => {
    const goTo = useGoTo();

    const form = useForm<CreateMovieSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            title: "",
            description: "",
            duration: null,
            language: "",
            releaseDate: null,
            posterUrl: "",
            trailerUrl: "",
        },
    });

    const { mutate: createMovie } = useCreateMovie({
        onSuccess: () => {
            goTo("/movies");
        },
    });

    function onSubmit(values: CreateMovieSchemaType) {
        createMovie({
            description: values.description,
            title: values.title,
            posterUrl: values.posterUrl,
            trailerUrl: values.trailerUrl,
            duration: values.duration,
            releaseDate: values.releaseDate,
        });
    }

    return (
        <div className="container grid h-screen w-screen flex-col justify-center">
            <div className="w-72 mt-5">
                <FormWrapper form={form} onSubmit={onSubmit} className="space-y-8">
                    <div className="grid gap-2">
                        <InputField name="title" control={form.control} placeholder="Title" />
                        <InputField
                            name="description"
                            control={form.control}
                            placeholder="Description"
                        />
                        <InputField
                            name="duration"
                            control={form.control}
                            type="number"
                            placeholder="Duration"
                        />
                        <InputField name="language" control={form.control} placeholder="Language" />
                        <DateField name="releaseDate" control={form.control} />
                        <InputField
                            name="posterUrl"
                            control={form.control}
                            placeholder="Poster Url"
                        />
                        <InputField
                            name="trailerUrl"
                            control={form.control}
                            placeholder="Trailer Url"
                        />
                        <ReactPlayer url={form.getValues("trailerUrl")} />

                        <Button variant="default" className="rounded-sm shadow-sm" type="submit">
                            Create
                        </Button>
                    </div>
                </FormWrapper>
            </div>
        </div>
    );
};

export default CreateMoviePage;
