import {
    DataTableToolbar,
    SearchBarFilter,
    DropdownSelectFilter,
} from "@/components/common/Table/Filters";
import { PropsWithTable } from "@/components/common/Table/types";
import { transformToOptions } from "@/lib/utils";
import { useGetAllRoles } from "@/service/auth/useGetAllRoles";
import { FilterOption } from "@/types/types";

function ManagerTableFilters<TData>({ table, onSearch }: PropsWithTable<TData>) {
    const { data: roles } = useGetAllRoles<FilterOption[]>({ select: transformToOptions });

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
                options={roles}
            />
        </DataTableToolbar>
    );
}

export default ManagerTableFilters;
