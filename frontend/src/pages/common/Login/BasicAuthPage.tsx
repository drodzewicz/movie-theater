import { loginFormSchema, LoginSchemaType } from "@/pages/common/Login/loginFormSchema";
import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FormWrapper from "@/components/form/FormWrapper";

const BasicAuthPage = () => {
    const form = useForm<LoginSchemaType>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            username: "",
        },
    });

    const navigate = useNavigate();

    function onSubmit(values: LoginSchemaType) {
        console.log(values);
        navigate("/confrim-password", { state: { ...values } });
    }
    return (
        <div>
            <FormWrapper form={form} onSubmit={onSubmit} className="space-y-8">
                <div className="grid gap-2">
                    <InputField name="username" control={form.control} placeholder="Username" />
                    <Button variant="default" className="rounded-sm shadow-sm" type="submit">
                        Sign In
                    </Button>
                </div>
            </FormWrapper>
        </div>
    );
};

export default BasicAuthPage;
