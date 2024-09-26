import schema, {
    CreateManagerSchemaType,
} from "@/pages/admin/manager/manager-create/createManagerFormSchema";
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
import { transformToOptions } from "@/lib/utils";
import FormWrapper from "@/components/form/FormWrapper";
import { useRegisterAppManager } from "@/service/auth/useRegisterAppManager";
import { useRolesList } from "@/service/auth/useRolesList";
import { FilterOption } from "@/types/types";
import { useLocationList } from "@/service/locations/useLocationList";
import { useQueryClient } from "@tanstack/react-query";
import { usersKeys } from "@/service/query-keys";
import useDialogState from "@/hooks/useDialogState";
import FieldWrapper from "@/components/form/FieldWrapper";
import DropDown from "@/components/input/DropDown";

const CreateManagerDialog = () => {
    const { isOpen, setIsOpen, close, open } = useDialogState();

    const form = useForm<CreateManagerSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            role: "",
            location: "",
        },
    });

    const queryClient = useQueryClient();

    const { mutate: registerManager } = useRegisterAppManager({
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: usersKeys.listAppManager() });
            close();
        },
    });

    const { data: roles } = useRolesList<FilterOption[]>({ select: transformToOptions });

    const { data: locations } = useLocationList<FilterOption[]>(
        { pagination: { pageSize: 100, pageIndex: 0 } },
        {
            select: ({ data }) =>
                data?.map((it) => ({
                    value: `${it.id}`,
                    label: `${it.identifier} (${it.country})`,
                })),
        }
    );

    function onSubmit(values: CreateManagerSchemaType) {
        registerManager({
            firstName: values?.firstName,
            lastName: values?.lastName,
            username: values?.username,
            password: values?.password,
        });
    }

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
                                <FieldWrapper
                                    control={form.control}
                                    name="role"
                                    render={(field) => (
                                        <DropDown
                                            placeholder="role"
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
                                            placeholder="role"
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
