import schema, {
    CreateMovieSchemaType,
} from "@/pages/admin/movie/movie-create/createMovieFormSchema";
import { useCreateMovie } from "@/service/movies/useCreateMovie";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type HandleCreateMovieProps = {
    onSuccess?: () => void;
    onError?: () => void;
};

const useHandleCreateMovie = (props?: HandleCreateMovieProps) => {
    const form = useForm<CreateMovieSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            title: "",
            description: "",
            duration: null,
            releaseDate: null,
            posterUrl: "",
            trailerUrl: "",
        },
    });

    const { mutate: createMovie } = useCreateMovie({
        onSuccess: () => {
            props?.onSuccess?.();
        },
        onError: () => {
            props?.onError?.();
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

    return { form, onSubmit };
};

export default useHandleCreateMovie;
