import {
    DataTableToolbar,
    SearchBarFilter,
    DropdownSelectFilter,
} from "@/components/common/Table/Filters";
import { PropsWithTable } from "@/components/common/Table/types";

function ManagerTableFilters<TData>({ table, onSearch }: PropsWithTable<TData>) {
    return (
        <DataTableToolbar table={table} onSearch={onSearch}>
            <DropdownSelectFilter
                column={table.getColumn("appUserRole")}
                title="Role"
                options={[
                    { label: "SUPER_USER", value: "SUPER_USER" },
                    { label: "ADMIN", value: "ADMIN" },
                    { label: "USER", value: "USER" },
                ]}
            />
            <SearchBarFilter
                value={table.getColumn("username").getFilterValue() as string}
                onChange={table.getColumn("username").setFilterValue}
                placeholder="Search by movie title..."
            />
        </DataTableToolbar>
    );
}

export default ManagerTableFilters;
