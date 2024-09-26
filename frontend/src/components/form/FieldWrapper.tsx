import React from "react";

import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { Control, ControllerRenderProps } from "react-hook-form";

export type FieldWrapperProps = {
    control: Control;
    name: string;
    render: (field: ControllerRenderProps) => React.ReactElement;
};

const FieldWrapper: React.FC<FieldWrapperProps> = ({ control, name, render }) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormControl>{render(field)}</FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default FieldWrapper;
