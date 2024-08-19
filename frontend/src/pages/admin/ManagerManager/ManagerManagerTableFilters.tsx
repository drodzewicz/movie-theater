import { Table } from "@tanstack/react-table";

import {
    DataTableToolbar,
    SearchBarFilter,
    DropdownSelectFilter,
} from "@/components/common/Table/Filters";

export interface ManagerManagerTableFiltersProps<TData> {
    table: Table<TData>;
}

function ManagerManagerTableFilters<TData>({ table }: ManagerManagerTableFiltersProps<TData>) {
    return (
        <DataTableToolbar table={table}>
            <DropdownSelectFilter
                column={table.getColumn("rating")}
                title="Country"
                options={[
                    { label: "Lithuania", value: "Lithuania" },
                    { label: "Poland", value: "Poland" },
                    { label: "Germany", value: "Germany" },
                ]}
            />
            <SearchBarFilter
                column={table.getColumn("title")}
                placeholder="Search by movie title..."
            />
        </DataTableToolbar>
    );
}

export default ManagerManagerTableFilters;
