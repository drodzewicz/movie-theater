import Table, { DataTablePagination } from "@/components/common/Table";

import { columns } from "@/pages/admin/user/UserList/columns";

import UserTableFilters from "@/pages/admin/user/UserList/UserTableFilters";
import CreateUserDialog from "@/pages/admin/user/CreateUser/CreateUserDialog";
import { useTable } from "@/hooks/table/useTable";
import { useGetAppUsers } from "@/service/users/useGetAppUsers";
import { useTablePagination } from "@/hooks/table/useTablePagination";
import { useTableSorting } from "@/hooks/table/useTableSorting";
import { useTableFilters } from "@/hooks/table/useTableFilters";

function UserListPage() {
    const { pagination, onPaginationChange } = useTablePagination();
    const {
        globalFilter,
        columnFilters,
        manualColumnFilters,
        onColumnFiltersChange,
        syncManualFilterValues,
        onGlobalFilterChange,
    } = useTableFilters();
    const { sorting, onSortingChange } = useTableSorting();

    const {
        data: { data: users, itemsCount },
    } = useGetAppUsers({
        pagination,
        columnFilters: manualColumnFilters,
        sorting,
    });

    const { table } = useTable({
        data: users,
        columns,
        itemsCount,
        stateProperties: { pagination, columnFilters, sorting, globalFilter },
        onPaginationChange,
        onColumnFiltersChange,
        onSortingChange,
        onGlobalFilterChange,
    });

    const onSearch = () => {
        syncManualFilterValues();
    };

    return (
        <div className="container mx-auto py-10 flex flex-col gap-3">
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold">Users</h2>
                <CreateUserDialog />
            </div>
            <UserTableFilters table={table} onSearch={onSearch} />
            <Table table={table} />
            <DataTablePagination table={table} />
        </div>
    );
}

export default UserListPage;
