import createLocationFormSchema, {
    CreateLocationSchemaType,
} from "@/pages/admin/location/location-create/schema";
import { useCreateLocation } from "@/service/locations/useCreateLocation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type HandleCreateLocationProps = {
    onSuccess?: () => void;
    onError?: () => void;
};

function useHandleCreateLocation(props?: HandleCreateLocationProps) {
    const form = useForm<CreateLocationSchemaType>({
        resolver: zodResolver(createLocationFormSchema),
        defaultValues: {
            identifier: "",
            country: "",
            city: "",
            street: "",
            buildingNumber: "",
            zipCode: "",
        },
    });

    const { mutate: createLocation } = useCreateLocation({
        onSuccess: () => {
            props?.onSuccess?.();
        },
        onError: () => {
            props?.onError?.();
        },
    });

    const onSubmit = (values: CreateLocationSchemaType) => {
        createLocation({
            identifier: values.identifier,
            country: values.country,
            city: values.city,
            streetName: values.street,
            buildingNumber: values.buildingNumber,
            zipCode: values.zipCode,
        });
    };

    return { form, onSubmit };
}

export default useHandleCreateLocation;
