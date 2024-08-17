import { useState } from "react";
import createUserSchema, {
    CreateUserSchemaType,
} from "@/pages/admin/CreateUser/createUserFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const CreateUser = () => {
    const [isManagerUser, setIsManagerUser] = useState<boolean>(true);

    const form = useForm<CreateUserSchemaType>({
        resolver: zodResolver(createUserSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            username: "",
            role: "",
        },
    });

    function onSubmit(values: CreateUserSchemaType) {
        console.log(values);
    }

    return (
        <div className="container grid h-screen w-screen flex-col justify-center">
            <div className="w-72 mt-5">
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
                            <div className="flex items-center space-x-2">
                                <Switch
                                    id="is-manager-user"
                                    checked={isManagerUser}
                                    onCheckedChange={setIsManagerUser}
                                />
                                <Label htmlFor="is-manager-user">Is Manager User?</Label>
                            </div>
                            {isManagerUser && (
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
                            )}

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
            </div>
        </div>
    );
};

export default CreateUser;
