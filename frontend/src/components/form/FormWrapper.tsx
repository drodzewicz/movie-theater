import React from "react";
import { Form } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";

export interface FormWrapperProps<TVals> {
    form: UseFormReturn<TVals>;
    onSubmit: (vals: TVals) => void;
    className?: string;
}

function FormWrapper<TVals>({
    form,
    children,
    className,
    onSubmit,
}: React.PropsWithChildren<FormWrapperProps<TVals>>) {
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
                {children}
            </form>
        </Form>
    );
}

export default FormWrapper;
