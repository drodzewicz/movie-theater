import { Button } from "@/components/ui/button";
import HallSeatsEditor from "@/components/common/HallSeatsEditor";
import FormWrapper from "@/components/form/FormWrapper";
import LocationShowHeader from "@/pages/admin/location/location-show/LocationShowHeader";
import { useGetParamsLocationId } from "@/hooks/useGetParamsLocationId";
import { useGoTo } from "@/hooks/useGoTo";
import FieldWrapper from "@/components/form/FieldWrapper";
import { Input } from "@/components/ui/input";
import useHandleCreateHall from "@/pages/admin/hall/hall-create/useHandleCreateHall";

const CreateHallPage = () => {
    const locationId = useGetParamsLocationId();
    const goTo = useGoTo();

    const { form, onSubmit } = useHandleCreateHall({
        locationId,
        onSuccess: () => {
            goTo("/locations/:locationId", { variables: { locationId } });
        },
    });

    return (
        <div className="container h-screen w-screen flex-col justify-center">
            <LocationShowHeader />
            <FormWrapper form={form} onSubmit={onSubmit} className="space-y-8">
                <div className="grid grid-cols-4 gap-2">
                    <FieldWrapper
                        control={form.control}
                        name="name"
                        render={(field) => (
                            <Input
                                placeholder="Hall Name"
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                    />
                    <FieldWrapper
                        control={form.control}
                        name="floor"
                        render={(field) => (
                            <Input
                                placeholder="Floor"
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                    />
                    <FieldWrapper
                        control={form.control}
                        name="room"
                        render={(field) => (
                            <Input
                                placeholder="Room"
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                    />
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
