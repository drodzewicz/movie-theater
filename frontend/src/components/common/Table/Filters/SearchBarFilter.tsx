import { Input } from "@/components/ui/input";
import { CommonFilter } from "./types";

export interface SearchBarFilterProps<TData, TValue> extends CommonFilter<TData, TValue> {
    placeholder?: string;
}

export interface SearchFilterConfig<TData, TValue> {
    columnName: string;
    Filter: React.ComponentType<CommonFilter<TData, TValue>>;
    props: {
        placeholder?: string;
    };
}

function SearchBarFilter<TData, TValue>({
    column,
    placeholder = "Search...",
}: SearchBarFilterProps<TData, TValue>) {
    return (
        <Input
            placeholder={placeholder}
            value={(column?.getFilterValue() as string) ?? ""}
            onChange={(event: { target: { value: any } }) =>
                column?.setFilterValue(event.target.value)
            }
            className="h-8 w-[150px] lg:w-[250px]"
        />
    );
}

export default SearchBarFilter;
