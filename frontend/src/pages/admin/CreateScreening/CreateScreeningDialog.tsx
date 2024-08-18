import { Button, buttonVariants } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import schema, { CreateScreeningSchemaType } from "./createScreeningFormSchema";
import InputField from "@/components/form/InputField";
import { Form } from "@/components/ui/form";

const CreateScreeningDialog = () => {
    const form = useForm<CreateScreeningSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            movie: "",
            hall: "",
            location: "",
            date: "",
        },
    });

    function onSubmit(values: CreateScreeningSchemaType) {
        console.log(values);
    }

    return (
        <Dialog>
            <DialogTrigger className={cn(buttonVariants({ variant: "default", size: "sm" }))}>
                Create Screening
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create new screening</DialogTitle>
                    <DialogDescription>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <div className="grid gap-2">
                                    <InputField
                                        name="movie"
                                        control={form.control}
                                        placeholder="Movie"
                                    />
                                    <InputField
                                        name="location"
                                        control={form.control}
                                        placeholder="Location"
                                    />
                                    <InputField
                                        name="hall"
                                        control={form.control}
                                        placeholder="Hall"
                                    />
                                    <InputField
                                        name="date"
                                        control={form.control}
                                        placeholder="Date"
                                    />
                                    <Button
                                        variant="default"
                                        className="rounded-sm shadow-sm"
                                        type="submit"
                                    >
                                        Create
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

export default CreateScreeningDialog;
