import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import schema, { CreateHallSchemaType } from "@/pages/admin/hall/hall-create/schema";
import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/button";
import HallSeatsEditor from "@/components/common/HallSeatsEditor";
import FormWrapper from "@/components/form/FormWrapper";
import LocationShowHeader from "@/pages/admin/location/location-show/LocationShowHeader";
import { useCreateHall } from "@/service/halls/useCreateHall";
import { useGetParamsLocationId } from "@/hooks/useGetParamsLocationId";
import { useGoTo } from "@/hooks/useGoTo";
import { useQueryClient } from "@tanstack/react-query";
import { hallKeys } from "@/service/query-keys";

const CreateHallPage = () => {
    const locationId = useGetParamsLocationId();
    const goTo = useGoTo();

    const form = useForm<CreateHallSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
            floor: "",
            room: "",
        },
    });

    const queryClient = useQueryClient();

    const { mutate: createNewHall } = useCreateHall({
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: hallKeys.locationHalls(locationId) });

            goTo("/locations/:locationId", { variables: { locationId } });
        },
    });

    function onSubmit(values: CreateHallSchemaType) {
        createNewHall({
            locationId,
            name: values.name,
            rowCount: 5,
            seatCountPerRow: 8,
            floor: values.floor,
            room: values.room,
        });
    }

    return (
        <div className="container h-screen w-screen flex-col justify-center">
            <LocationShowHeader />
            <FormWrapper form={form} onSubmit={onSubmit} className="space-y-8">
                <div className="grid grid-cols-4 gap-2">
                    <InputField name="name" control={form.control} placeholder="Hall Name" />
                    <InputField name="floor" control={form.control} placeholder="Floor" />
                    <InputField name="room" control={form.control} placeholder="Room" />
                    <Button variant="default" className="rounded-sm shadow-sm" type="submit">
                        Create
                    </Button>
                </div>
            </FormWrapper>
            <HallSeatsEditor />
        </div>
    );
};

export default CreateHallPage;
