import { loginFormSchema, LoginSchemaType } from "@/pages/common/Login/loginFormSchema";
import InputField from "@/components/form/InputField";
import { Spinner } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { useNavigate } from "react-router-dom";

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
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid gap-2">
                        <InputField name="username" control={form.control} placeholder="Username" />
                        <Button variant="default" className="rounded-sm shadow-sm" type="submit">
                            <Spinner className="mr-2 h-4 w-4 animate-spin" />
                            Sign In
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default BasicAuthPage;
