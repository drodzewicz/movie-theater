import { DataTableToolbar, SearchBarFilter } from "@/components/common/table/filters";
import { PropsWithTable } from "@/components/common/table/types";

function UserTableFilters<TData>({ table, onSearch }: PropsWithTable<TData>) {
    return (
        <DataTableToolbar table={table} onSearch={onSearch}>
            <SearchBarFilter
                value={table.getState().globalFilter ?? ""}
                onChange={table.setGlobalFilter}
                placeholder="Search user..."
            />
        </DataTableToolbar>
    );
}

export default UserTableFilters;
