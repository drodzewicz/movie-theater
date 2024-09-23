import schema, { CreateUserSchemaType } from "@/pages/admin/user/user-create/createUserFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/button";

import {
    DialogHeader,
    Dialog,
    DialogContent,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import FormWrapper from "@/components/form/FormWrapper";
import { useRegister } from "@/service/auth/useRegisterUser";
import { useQueryClient } from "@tanstack/react-query";
import { usersKeys } from "@/service/query-keys";
import useDialogState from "@/hooks/useDialogState";

const CreateUserDialog = () => {
    const { isOpen, setIsOpen, close, open } = useDialogState();

    const form = useForm<CreateUserSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            firstName: "",
            lastName: "",
            username: "",
        },
    });

    const queryClient = useQueryClient();

    const { mutate: registerUser } = useRegister({
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: usersKeys.listAppUser() });
            close();
        },
    });

    function onSubmit(values: CreateUserSchemaType) {
        registerUser({
            firstName: values.firstName,
            lastName: values.lastName,
            password: values.password,
            username: values.username,
        });
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <Button onClick={open} variant="default" size="sm">
                Register new User
            </Button>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Register New User</DialogTitle>
                    <DialogDescription>
                        <FormWrapper form={form} onSubmit={onSubmit} className="space-y-8">
                            <div className="grid gap-2">
                                <InputField
                                    name="username"
                                    control={form.control}
                                    placeholder="Username"
                                />
                                <InputField
                                    name="password"
                                    control={form.control}
                                    placeholder="Password"
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
                                <Button
                                    variant="default"
                                    className="rounded-sm shadow-sm"
                                    type="submit"
                                >
                                    Register
                                </Button>
                            </div>
                        </FormWrapper>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default CreateUserDialog;
