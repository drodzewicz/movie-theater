import DropdownSelectFilter from "@/components/common/table/filters/DropdownSelectFilter";
import { CommonFilter } from "@/components/common/table/types";

export interface StatusFilterProps<TData, TValue> extends CommonFilter<TData, TValue> {
    title?: string;
}

function StatusFilter<TData, TValue>({ column }: StatusFilterProps<TData, TValue>) {
    return (
        <DropdownSelectFilter
            column={column}
            title="Status"
            options={[
                {
                    label: "Active",
                    value: "true",
                },
                {
                    label: "Disabled",
                    value: "false",
                },
            ]}
        />
    );
}

export default StatusFilter;
