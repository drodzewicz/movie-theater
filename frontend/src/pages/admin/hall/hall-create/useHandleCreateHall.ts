import schema, { CreateHallSchemaType } from "@/pages/admin/hall/hall-create/schema";

import { useCreateHall } from "@/service/halls/useCreateHall";
import { hallKeys } from "@/service/query-keys";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

type HandleCreateHallProps = {
    locationId: string;
    onSuccess?: () => void;
    onError?: () => void;
};

function useHandleCreateHall({ locationId, ...props }: HandleCreateHallProps) {
    const queryClient = useQueryClient();

    const form = useForm<CreateHallSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
            floor: "",
            room: "",
        },
    });

    const { mutate: createNewHall } = useCreateHall({
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: hallKeys.locationHalls(locationId) });
            props?.onSuccess?.();
        },
        onError: () => {
            props?.onError?.();
        },
    });

    function onSubmit(values: CreateHallSchemaType) {
        createNewHall({
            locationId,
            name: values.name,
            rowCount: 5,
            seatCountPerRow: 2,
            floor: values.floor,
            room: values.room,
        });
    }

    return { form, onSubmit };
}

export default useHandleCreateHall;
