import { CheckIcon, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { FilterOption } from "@/types/types";

type MultiSelectProps = {
    title: string;
    options: FilterOption[];
    selectedValues: Set<string>;
    setFilterValue: (values: string[] | undefined) => void;
    showSelectedValuesCount?: number;
    buttonClassName?: string;
    dropdownClassName?: string;
    disabled?: boolean;
};

type SelectTriggerButtonProps = {
    title: string;
    selectedValues: Set<string>;
    showSelectedValuesCount?: number;
    options: FilterOption[];
};

function SelectTriggerButton({
    title,
    selectedValues,
    showSelectedValuesCount,
    options,
}: SelectTriggerButtonProps) {
    return (
        <>
            {title}
            {selectedValues?.size > 0 && (
                <>
                    <Separator orientation="vertical" className="mx-2 h-4" />
                    <Badge variant="secondary" className="rounded-sm px-1 font-normal lg:hidden">
                        {selectedValues.size}
                    </Badge>
                    <div className="hidden space-x-1 lg:flex">
                        {selectedValues.size > showSelectedValuesCount ? (
                            <Badge variant="secondary" className="rounded-sm px-1 font-normal">
                                {selectedValues.size} selected
                            </Badge>
                        ) : (
                            options
                                .filter((option) => selectedValues.has(option.value))
                                .map((option) => (
                                    <Badge
                                        variant="secondary"
                                        key={option.value}
                                        className="rounded-sm px-1 font-normal"
                                    >
                                        {option.label}
                                    </Badge>
                                ))
                        )}
                    </div>
                </>
            )}
            <ChevronDown className="h-4 w-4 opacity-50 ml-1" />
        </>
    );
}

function MultiSelect({
    selectedValues,
    options,
    setFilterValue,
    title,
    buttonClassName,
    dropdownClassName,
    disabled,
    showSelectedValuesCount = 2,
}: MultiSelectProps) {
    const selectValueHandler = (option: FilterOption, isSelected: boolean) => {
        if (isSelected) {
            selectedValues.delete(option.value);
        } else {
            selectedValues.add(option.value);
        }
        const filterValues = Array.from(selectedValues);
        setFilterValue(filterValues?.length ? filterValues : undefined);
    };

    const clearValuesHandler = () => {
        setFilterValue(undefined);
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    disabled={disabled}
                    variant="outline"
                    size="sm"
                    className={cn("h-8 border", buttonClassName)}
                >
                    <SelectTriggerButton
                        options={options}
                        selectedValues={selectedValues}
                        title={title}
                        showSelectedValuesCount={showSelectedValuesCount}
                    />
                </Button>
            </PopoverTrigger>
            <PopoverContent className={cn("w-[200px] p-0", dropdownClassName)} align="start">
                <Command>
                    <CommandInput placeholder={title} />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup>
                            {options.map((option) => {
                                const isSelected = selectedValues.has(option.value);
                                return (
                                    <CommandItem
                                        key={option.value}
                                        onSelect={() => selectValueHandler(option, isSelected)}
                                    >
                                        <div
                                            className={cn(
                                                "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                                isSelected
                                                    ? "bg-primary text-primary-foreground"
                                                    : "opacity-50 [&_svg]:invisible"
                                            )}
                                        >
                                            <CheckIcon className={cn("h-4 w-4")} />
                                        </div>
                                        <span>{option.label}</span>
                                    </CommandItem>
                                );
                            })}
                        </CommandGroup>
                        {selectedValues.size > 0 && (
                            <>
                                <CommandSeparator />
                                <CommandGroup>
                                    <CommandItem
                                        onSelect={() => clearValuesHandler()}
                                        className="justify-center text-center"
                                    >
                                        Clear filters
                                    </CommandItem>
                                </CommandGroup>
                            </>
                        )}
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}

export default MultiSelect;
