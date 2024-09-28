import { CommonFilter } from "@/components/common/table/types";
import MultiSelect from "@/components/input/MultiSelect";
import { FilterOption } from "@/types/types";

export interface DropdownSelectFilterProps<TData, TValue> extends CommonFilter<TData, TValue> {
    title?: string;
    options: FilterOption[];
}

function DropdownSelectFilter<TData, TValue>({
    column,
    title,
    options,
}: DropdownSelectFilterProps<TData, TValue>) {
    const selectedValues = new Set(column?.getFilterValue() as string[]);

    return (
        <MultiSelect
            title={title}
            options={options}
            selectedValues={selectedValues}
            setFilterValue={column?.setFilterValue}
        />
    );
}

export default DropdownSelectFilter;
