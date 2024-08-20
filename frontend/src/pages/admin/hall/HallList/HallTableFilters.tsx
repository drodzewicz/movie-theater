import {
    DataTableToolbar,
    SearchBarFilter,
    DropdownSelectFilter,
} from "@/components/common/Table/Filters";
import { PropsWithTable } from "@/components/common/Table/types";

function HallTableFilters<TData>({ table }: PropsWithTable<TData>) {
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
            <SearchBarFilter column={table.getColumn("id")} placeholder="Search by location..." />
        </DataTableToolbar>
    );
}

export default HallTableFilters;
