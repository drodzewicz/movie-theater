import { Button } from "@/components/ui/button";

import {
    DialogHeader,
    Dialog,
    DialogContent,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { transformLocationsToOptions, transformToOptions } from "@/lib/utils";
import FormWrapper from "@/components/form/FormWrapper";
import { useRolesList } from "@/service/auth/useRolesList";
import { FilterOption } from "@/types/types";
import { useLocationList } from "@/service/locations/useLocationList";
import useDialogState from "@/hooks/useDialogState";
import FieldWrapper from "@/components/form/FieldWrapper";
import DropDown from "@/components/input/DropDown";
import { Input } from "@/components/ui/input";
import useHandleNewManagerRegistration from "./useHandleNewManagerRegistration";

const CreateManagerDialog = () => {
    const { isOpen, setIsOpen, close, open } = useDialogState();

    const { form, onSubmit } = useHandleNewManagerRegistration({
        onSuccess: () => {
            close();
        },
    });

    const { data: roles } = useRolesList<FilterOption[]>({ select: transformToOptions });

    const { data: locations } = useLocationList<FilterOption[]>(
        { pagination: { pageSize: 100, pageIndex: 0 } },
        {
            select: ({ data }) => transformLocationsToOptions(data),
        }
    );

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <Button onClick={open} variant="default" size="sm">
                Add new Manager
            </Button>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add new Manager</DialogTitle>
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
                                <FieldWrapper
                                    control={form.control}
                                    name="role"
                                    render={(field) => (
                                        <DropDown
                                            placeholder="Role"
                                            value={field.value}
                                            onChange={field.onChange}
                                            options={roles}
                                        />
                                    )}
                                />
                                <FieldWrapper
                                    control={form.control}
                                    name="location"
                                    render={(field) => (
                                        <DropDown
                                            placeholder="Location"
                                            value={field.value}
                                            onChange={field.onChange}
                                            options={locations}
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

export default CreateManagerDialog;
