import {
    LoginPasswordSchemaType,
    loginPasswordFormSchema,
} from "@/pages/common/Login/loginFormSchema";
import InputField from "@/components/form/InputField";
import { ArrowLeft, Spinner } from "@/components/Icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const ConfirmPassword = () => {
    const { state } = useLocation();

    const form = useForm<LoginPasswordSchemaType>({
        resolver: zodResolver(loginPasswordFormSchema),
        defaultValues: {
            password: "",
        },
    });

    function onSubmit(values: LoginPasswordSchemaType) {
        const loginPayload = {
            username: state?.username,
            password: values.password,
        };
        console.log(loginPayload);
        // navigate("/confrim-password", { state: { ...values } });
    }
    return (
        <div>
            <Link to="/login" className={cn(buttonVariants({ variant: "ghost" }))}>
                <>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                </>
            </Link>
            <div className="container flex h-screen w-screen flex-col items-center justify-center">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <div className="grid gap-2">
                                <InputField
                                    name="password"
                                    control={form.control}
                                    placeholder="Password"
                                    type="password"
                                />
                                <Button
                                    variant="default"
                                    className="rounded-sm shadow-sm"
                                    type="submit"
                                >
                                    <Spinner className="mr-2 h-4 w-4 animate-spin" />
                                    Sign In
                                </Button>
                            </div>
                        </form>
                    </Form>
                    <p className="px-8 text-center text-sm text-muted-foreground">
                        <Link
                            to="/register"
                            className="hover:text-brand underline underline-offset-4"
                        >
                            Don&apos;t have an account? Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ConfirmPassword;
