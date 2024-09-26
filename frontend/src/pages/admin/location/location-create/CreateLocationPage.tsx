import { Button } from "@/components/ui/button";
import FormWrapper from "@/components/form/FormWrapper";
import { useGoTo } from "@/hooks/useGoTo";
import useHandleCreateLocation from "@/pages/admin/location/location-create/useHandleCreateLocation";
import FieldWrapper from "@/components/form/FieldWrapper";
import { Input } from "@/components/ui/input";

function CreateLocationPage() {
    const goTo = useGoTo();

    const { form, onSubmit } = useHandleCreateLocation({
        onSuccess: () => {
            goTo("/locations");
        },
    });

    return (
        <div className="container grid h-screen w-screen flex-col items-center justify-center">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <FormWrapper form={form} onSubmit={onSubmit} className="space-y-8">
                    <div className="grid gap-2">
                        <FieldWrapper
                            control={form.control}
                            name="identifier"
                            render={(field) => (
                                <Input
                                    placeholder="Identifer"
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                        <FieldWrapper
                            control={form.control}
                            name="country"
                            render={(field) => (
                                <Input
                                    placeholder="Country"
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                        <FieldWrapper
                            control={form.control}
                            name="city"
                            render={(field) => (
                                <Input
                                    placeholder="City"
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                        <FieldWrapper
                            control={form.control}
                            name="street"
                            render={(field) => (
                                <Input
                                    placeholder="Street"
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                        <FieldWrapper
                            control={form.control}
                            name="buildingNumber"
                            render={(field) => (
                                <Input
                                    placeholder="Building Number"
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                        <FieldWrapper
                            control={form.control}
                            name="zipCode"
                            render={(field) => (
                                <Input
                                    placeholder="Zip-Code"
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
            </div>
        </div>
    );
}

export default CreateLocationPage;
