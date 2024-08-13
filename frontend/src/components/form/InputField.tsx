import React from "react";

import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";

export type InputFieldProps = {
    control: Control;
    name: string;
    placeholder?: string;
    type?: React.HTMLInputTypeAttribute;
};

const InputField: React.FC<InputFieldProps> = ({ control, name, type, placeholder }) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormControl>
                        <Input placeholder={placeholder} type={type} {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default InputField;