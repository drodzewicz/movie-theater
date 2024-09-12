import { loginFormSchema, LoginSchemaType } from "@/pages/common/Login/loginFormSchema";
import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormWrapper from "@/components/form/FormWrapper";
import useLogin from "@/service/auth/useLogin";
import { useLocation } from "react-router-dom";

const BasicAuthPage = () => {
    const location = useLocation();

    const form = useForm<LoginSchemaType>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            username: location.state?.username || "",
            password: location.state?.password || "",
        },
    });

    const { mutate: login } = useLogin({
        onError() {
            form.setError("username", {
                type: "manual",
                message: "Bad login",
            });
            form.setError("password", {
                type: "manual",
                message: "Bad login",
            });
        },
    });

    function onSubmit(values: LoginSchemaType) {
        login({ username: values.username, password: values.password });
    }

    return (
        <div>
            <FormWrapper form={form} onSubmit={onSubmit} className="space-y-8">
                <div className="grid gap-2">
                    <InputField name="username" control={form.control} placeholder="Username" />
                    <InputField
                        name="password"
                        control={form.control}
                        placeholder="Password"
                        type="password"
                    />
                    <Button variant="default" className="rounded-sm shadow-sm" type="submit">
                        Sign In
                    </Button>
                </div>
            </FormWrapper>
        </div>
    );
};

export default BasicAuthPage;
