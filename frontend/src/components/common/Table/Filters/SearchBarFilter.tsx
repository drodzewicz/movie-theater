import React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface SearchBarFilterProps {
    placeholder?: string;
    value?: string;
    onChange: (val: string) => void;
    className?: string;
}

function SearchBarFilter({
    placeholder = "Search...",
    onChange,
    className,
    value,
}: SearchBarFilterProps) {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <Input
            placeholder={placeholder}
            onChange={onChangeHandler}
            value={value}
            className={cn("h-8 w-[150px] lg:w-[250px]", className)}
        />
    );
}

export default SearchBarFilter;
