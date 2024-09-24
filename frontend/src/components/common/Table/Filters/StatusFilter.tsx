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
                    icon: () => <span className="h-3 w-3 rounded-full bg-green-600 mr-2" />,
                },
                {
                    label: "Disabled",
                    value: "false",
                    icon: () => <span className="h-3 w-3 rounded-full bg-gray-400 mr-2" />,
                },
            ]}
        />
    );
}

export default StatusFilter;
