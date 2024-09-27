import { Button } from "@/components/ui/button";
import FormWrapper from "@/components/form/FormWrapper";
import FieldWrapper from "@/components/form/FieldWrapper";
import { Input } from "@/components/ui/input";
import useHandleBasicAuthLogin from "./useHandleBasicAuthLogin";

const BasicAuthPage = () => {
    const { form, onSubmit } = useHandleBasicAuthLogin();

    return (
        <div>
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
                    <Button variant="default" className="rounded-sm shadow-sm" type="submit">
                        Sign In
                    </Button>
                </div>
            </FormWrapper>
        </div>
    );
};

export default BasicAuthPage;
