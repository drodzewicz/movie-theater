import {
    DataTableToolbar,
    SearchBarFilter,
    DropdownSelectFilter,
} from "@/components/common/table/filters";
import StatusFilter from "@/components/common/table/filters/StatusFilter";
import { PropsWithTable } from "@/components/common/table/types";
import { transformToOptions } from "@/lib/utils";
import { useRolesList } from "@/service/auth/useRolesList";
import { FilterOption } from "@/types/types";

function ManagerTableFilters<TData>({ table, onSearch }: PropsWithTable<TData>) {
    const { data: roles } = useRolesList<FilterOption[]>({ select: transformToOptions });

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
            <StatusFilter column={table.getColumn("active")} />
        </DataTableToolbar>
    );
}

export default ManagerTableFilters;
