import {
    DataTableToolbar,
    SearchBarFilter,
    DropdownSelectFilter,
} from "@/components/common/Table/Filters";
import { PropsWithTable } from "@/components/common/Table/types";

function LocationTableFilters<TData>({ table }: PropsWithTable<TData>) {
    return (
        <DataTableToolbar table={table}>
            <SearchBarFilter
                column={table.getColumn("identifier")}
                placeholder="Search by location..."
            />

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
        </DataTableToolbar>
    );
}

export default LocationTableFilters;
