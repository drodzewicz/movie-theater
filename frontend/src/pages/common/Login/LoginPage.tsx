import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";

import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

import { Spinner } from "@/components/Icons";
import InputField from "@/components/form/InputField";
import loginFormSchema, { LoginSchemaType } from "@/pages/common/Login/loginFormSchema";

const LoginPage = () => {
    const form = useForm<LoginSchemaType>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    function onSubmit(values: LoginSchemaType) {
        console.log(values);
    }

    return (
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
                    <p className="text-sm text-muted-foreground">
                        Enter your email to sign in to your account
                    </p>
                </div>
                <div className={cn("grid gap-6")}>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <div className="grid gap-2">
                                <InputField
                                    name="username"
                                    control={form.control}
                                    placeholder="Username"
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
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                Or continue with
                            </span>
                        </div>
                    </div>
                    <Button variant="outline" className="rounded-sm shadow-sm" type="submit">
                        <Spinner className="mr-2 h-4 w-4 animate-spin" />
                        Github
                    </Button>
                </div>
                <p className="px-8 text-center text-sm text-muted-foreground">
                    <Link to="/register" className="hover:text-brand underline underline-offset-4">
                        Don&apos;t have an account? Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
