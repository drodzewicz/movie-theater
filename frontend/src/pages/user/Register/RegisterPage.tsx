import FormWrapper from "@/components/form/FormWrapper";
import LoadingButton from "@/components/form/LoadingButton";
import { useGoTo } from "@/hooks/useGoTo";
import { Button } from "@/components/ui/button";
import FieldWrapper from "@/components/form/FieldWrapper";
import { Input } from "@/components/ui/input";
import useHandleAppUserRegistration from "./useHandleAppUserRegistration";

const RegisterPage = () => {
    const goTo = useGoTo();

    const { form, onSubmit } = useHandleAppUserRegistration({
        onSuccess: () => {
            goTo("/login", {
                state: {
                    username: form.getValues("username"),
                    password: form.getValues("password"),
                },
            });
        },
    });

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
                    <FormWrapper form={form} onSubmit={onSubmit} className="space-y-8">
                        <div className="grid gap-2">
                            <FieldWrapper
                                control={form.control}
                                name="username"
                                render={(field) => (
                                    <Input
                                        placeholder="Username"
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                )}
                            />
                            <FieldWrapper
                                control={form.control}
                                name="firstName"
                                render={(field) => (
                                    <Input
                                        placeholder="First Name"
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                )}
                            />
                            <FieldWrapper
                                control={form.control}
                                name="lastName"
                                render={(field) => (
                                    <Input
                                        placeholder="Last Name"
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                )}
                            />
                            <FieldWrapper
                                control={form.control}
                                name="password"
                                render={(field) => (
                                    <Input
                                        placeholder="Password"
                                        type="password"
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                )}
                            />
                            <FieldWrapper
                                control={form.control}
                                name="confirmPassword"
                                render={(field) => (
                                    <Input
                                        placeholder="Confirm Password"
                                        type="password"
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                )}
                            />

                            <LoadingButton className="rounded-sm shadow-sm" type="submit">
                                Sign Up
                            </LoadingButton>
                        </div>
                    </FormWrapper>
                    <p className="px-8 text-center text-sm text-muted-foreground">
                        By clicking continue, you agree to our{" "}
                        <Button
                            variant="link"
                            className="hover:text-brand underline underline-offset-4"
                        >
                            Terms of Service
                        </Button>
                        <Button
                            variant="link"
                            className="hover:text-brand underline underline-offset-4"
                        >
                            Privacy Policy
                        </Button>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
