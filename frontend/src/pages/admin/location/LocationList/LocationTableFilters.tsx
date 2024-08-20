import { Table } from "@tanstack/react-table";

import {
    DataTableToolbar,
    SearchBarFilter,
    DropdownSelectFilter,
} from "@/components/common/Table/Filters";

export interface LocationManagerTableFiltersProps<TData> {
    table: Table<TData>;
}

function LocationTableFilters<TData>({ table }: LocationManagerTableFiltersProps<TData>) {
    return (
        <DataTableToolbar table={table}>
            <DropdownSelectFilter
                column={table.getColumn("country")}
                title="Country"
                options={[
                    { label: "Lithuania", value: "Lithuania" },
                    { label: "Poland", value: "Poland" },
                    { label: "Germany", value: "Germany" },
                ]}
            />
            <DropdownSelectFilter
                column={table.getColumn("city")}
                title="City"
                options={[
                    { label: "Lithuania", value: "Lithuania" },
                    { label: "Poland", value: "Poland" },
                    { label: "Germany", value: "Germany" },
                ]}
            />
            <DropdownSelectFilter
                column={table.getColumn("active")}
                title="Status"
                options={[
                    {
                        label: "Active",
                        value: "active",
                        icon: () => <span className="h-3 w-3 rounded-full bg-green-600 mr-2" />,
                    },
                    {
                        label: "Disabled",
                        value: "disabled",
                        icon: () => <span className="h-3 w-3 rounded-full bg-gray-400 mr-2" />,
                    },
                ]}
            />
            <SearchBarFilter column={table.getColumn("id")} placeholder="Search by location..." />
        </DataTableToolbar>
    );
}

export default LocationTableFilters;
