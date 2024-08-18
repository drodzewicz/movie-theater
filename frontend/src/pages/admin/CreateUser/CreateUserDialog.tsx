import schema, { CreateUserSchemaType } from "@/pages/admin/CreateUser/createUserFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "@/components/form/InputField";
import { Button, buttonVariants } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import {
    DialogHeader,
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const CreateUserDialog = () => {
    const form = useForm<CreateUserSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            firstName: "",
            lastName: "",
            username: "",
        },
    });

    function onSubmit(values: CreateUserSchemaType) {
        console.log(values);
    }

    return (
        <Dialog>
            <DialogTrigger className={cn(buttonVariants({ variant: "default", size: "sm" }))}>
                Register new User
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Register New User</DialogTitle>
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

export default CreateUserDialog;
