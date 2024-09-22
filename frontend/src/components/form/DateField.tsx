import React from "react";

import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { Control } from "react-hook-form";
import DatePicker from "../input/DatePicker";

export type DateFieldProps = {
    control: Control;
    name: string;
};

const DateField: React.FC<DateFieldProps> = ({ control, name }) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormControl>
                        <DatePicker value={field.value} onChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default DateField;
