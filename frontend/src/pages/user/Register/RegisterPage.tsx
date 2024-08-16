import { Link } from "react-router-dom";
import registerFormSchema, {
    RegisterUserSchemaType,
} from "@/pages/user/Register/registerFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Spinner } from "@/components/Icons";
import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

const RegisterPage = () => {
    const form = useForm<RegisterUserSchemaType>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            confirmPassword: "",
        },
    });

    function onSubmit(values: RegisterUserSchemaType) {
        console.log(values);
    }

    return (
        <div className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="hidden h-full bg-muted lg:block" />
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
                        <p className="text-sm text-muted-foreground">
                            Enter your email below to create your account
                        </p>
                    </div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <div className="grid gap-2">
                                <InputField
                                    name="username"
                                    control={form.control}
                                    placeholder="Username"
                                />
                                <InputField
                                    name="firstName"
                                    control={form.control}
                                    placeholder="First Name"
                                />
                                <InputField
                                    name="lastName"
                                    control={form.control}
                                    placeholder="Last Name"
                                />
                                <InputField
                                    name="password"
                                    control={form.control}
                                    placeholder="Password"
                                />
                                <InputField
                                    name="confirmPassword"
                                    control={form.control}
                                    placeholder="Confirm Password"
                                />
                                <Button
                                    variant="default"
                                    className="rounded-sm shadow-sm"
                                    type="submit"
                                >
                                    <Spinner className="mr-2 h-4 w-4 animate-spin" />
                                    Sign Up
                                </Button>
                            </div>
                        </form>
                    </Form>
                    <p className="px-8 text-center text-sm text-muted-foreground">
                        By clicking continue, you agree to our{" "}
                        <Link to="/terms" className="hover:text-brand underline underline-offset-4">
                            Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                            to="/privacy"
                            className="hover:text-brand underline underline-offset-4"
                        >
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
