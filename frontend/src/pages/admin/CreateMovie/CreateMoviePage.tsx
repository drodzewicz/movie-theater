import createMovieFormSchema, {
    CreateMovieSchemaType,
} from "@/pages/admin/CreateMovie/createMovieFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

const CreateMoviePage = () => {
    const form = useForm<CreateMovieSchemaType>({
        resolver: zodResolver(createMovieFormSchema),
        defaultValues: {
            title: "",
            description: "",
            duration: null,
            language: "",
            releaseDate: "",
            posterUrl: "",
            trailerUrl: "",
        },
    });

    function onSubmit(values: CreateMovieSchemaType) {
        console.log(values);
    }

    return (
        <div className="container grid h-screen w-screen flex-col justify-center">
            <div className="w-72 mt-5">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                                placeholder="Duration"
                            />
                            <InputField
                                name="language"
                                control={form.control}
                                placeholder="Language"
                            />
                            <InputField
                                name="releaseDate"
                                control={form.control}
                                placeholder="Release Date"
                            />
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
                            <Button
                                variant="default"
                                className="rounded-sm shadow-sm"
                                type="submit"
                            >
                                Create
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default CreateMoviePage;
