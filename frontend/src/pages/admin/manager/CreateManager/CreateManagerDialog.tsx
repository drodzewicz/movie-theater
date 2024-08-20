import schema, {
    CreateManagerSchemaType,
} from "@/pages/admin/manager/CreateManager/createManagerFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "@/components/form/InputField";
import { Button, buttonVariants } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    DialogHeader,
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const CreateManagerDialog = () => {
    const form = useForm<CreateManagerSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            firstName: "",
            lastName: "",
            username: "",
            role: "",
            locations: [],
        },
    });

    function onSubmit(values: CreateManagerSchemaType) {
        console.log(values);
    }

    return (
        <Dialog>
            <DialogTrigger className={cn(buttonVariants({ variant: "default", size: "sm" }))}>
                Add new Manager
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add new Manager</DialogTitle>
                    <DialogDescription>
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
                                    <FormField
                                        control={form.control}
                                        name="role"
                                        render={({ field }) => (
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Role" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="SUPER_USER">
                                                        Super User
                                                    </SelectItem>
                                                    <SelectItem value="ADMIN">Admin</SelectItem>
                                                    <SelectItem value="MANAGER">Manager</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="role"
                                        render={({ field }) => (
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Locations" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="SUPER_USER">
                                                        DWD23
                                                    </SelectItem>
                                                    <SelectItem value="ADMIN">CNO-43</SelectItem>
                                                    <SelectItem value="MANAGER">PNR-234</SelectItem>
                                                </SelectContent>
                                            </Select>
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
                            </form>
                        </Form>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default CreateManagerDialog;
