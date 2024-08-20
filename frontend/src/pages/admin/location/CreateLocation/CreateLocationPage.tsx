import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import createLocationFormSchema, {
    CreateLocationSchemaType,
} from "@/pages/admin/location/CreateLocation/schema";
import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/button";
import FormWrapper from "@/components/form/FormWrapper";

const CreateLocationPage = () => {
    const form = useForm<CreateLocationSchemaType>({
        resolver: zodResolver(createLocationFormSchema),
        defaultValues: {
            country: "",
            city: "",
            street: "",
            buildingNumber: "",
            zipCode: "",
            logoUrl: "",
        },
    });

    function onSubmit(values: CreateLocationSchemaType) {
        console.log(values);
    }

    return (
        <div className="container grid h-screen w-screen flex-col items-center justify-center">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <FormWrapper form={form} onSubmit={onSubmit} className="space-y-8">
                    <div className="grid gap-2">
                        <InputField name="country" control={form.control} placeholder="Country" />
                        <InputField name="city" control={form.control} placeholder="City" />
                        <InputField name="street" control={form.control} placeholder="Street" />
                        <InputField
                            name="buildingNumber"
                            control={form.control}
                            placeholder="Building Number"
                        />
                        <InputField name="zipCode" control={form.control} placeholder="Zip-Code" />
                        <InputField name="logoUrl" control={form.control} placeholder="Logo" />

                        <Button variant="default" className="rounded-sm shadow-sm" type="submit">
                            Create
                        </Button>
                    </div>
                </FormWrapper>
            </div>
        </div>
    );
};

export default CreateLocationPage;
