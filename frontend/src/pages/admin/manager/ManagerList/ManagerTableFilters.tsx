import {
    DataTableToolbar,
    SearchBarFilter,
    DropdownSelectFilter,
} from "@/components/common/Table/Filters";
import { PropsWithTable } from "@/components/common/Table/types";

function ManagerTableFilters<TData>({ table, onSearch }: PropsWithTable<TData>) {
    return (
        <DataTableToolbar table={table} onSearch={onSearch}>
            <SearchBarFilter
                value={table.getState().globalFilter ?? ""}
                onChange={table.setGlobalFilter}
                placeholder="Search by movie title..."
            />
            <DropdownSelectFilter
                column={table.getColumn("appUserRole")}
                title="Role"
                options={[
                    { label: "SUPER_USER", value: "SUPER_USER" },
                    { label: "ADMIN", value: "ADMIN" },
                    { label: "USER", value: "USER" },
                ]}
            />
        </DataTableToolbar>
    );
}

export default ManagerTableFilters;
