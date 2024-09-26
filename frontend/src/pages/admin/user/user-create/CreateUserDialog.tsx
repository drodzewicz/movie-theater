import { Button } from "@/components/ui/button";

import {
    DialogHeader,
    Dialog,
    DialogContent,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import FormWrapper from "@/components/form/FormWrapper";
import useDialogState from "@/hooks/useDialogState";
import useHandleRegisterAppUser from "./useHandleRegisterAppUser";
import FieldWrapper from "@/components/form/FieldWrapper";
import { Input } from "@/components/ui/input";

const CreateUserDialog = () => {
    const { isOpen, setIsOpen, close, open } = useDialogState();

    const { form, onSubmit } = useHandleRegisterAppUser({
        onSuccess: () => {
            close();
        },
    });

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
