import schema, {
    CreateScreeningSchemaType,
} from "@/pages/admin/screening/screening-create/createScreeningFormSchema";
import { screeningKeys } from "@/service/query-keys";
import { useCreateScreening } from "@/service/screening/useCreateScreening";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

type HandleCreateScreeningProp = {
    onSuccess?: () => void;
    onError?: () => void;
};

function useHandleCreateScreening(props?: HandleCreateScreeningProp) {
    const queryClient = useQueryClient();

    const form = useForm<CreateScreeningSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            movie: "",
            hall: "",
            location: "",
            date: null,
        },
    });

    const { mutate: createScreening } = useCreateScreening({
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: screeningKeys.list() });
            props?.onSuccess?.();
        },
        onError: () => {
            props?.onError?.();
        },
    });

    function onSubmit(values: CreateScreeningSchemaType) {
        console.log(values);
        createScreening({
            movieId: values.movie,
            locationId: values.location,
            hallId: values.hall,
            date: values.date,
        });
    }

    return { form, onSubmit };
}

export default useHandleCreateScreening;
