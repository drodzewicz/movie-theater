import Table, { DataTablePagination } from "@/components/common/Table";

import { columns } from "@/pages/admin/manager/ManagerList/columns";

import ManagerTableFilters from "@/pages/admin/manager/ManagerList/ManagerTableFilters";
import CreateManagerDialog from "@/pages/admin/manager/CreateManager/CreateManagerDialog";
import { useTable } from "@/hooks/table/useTable";
import { useGetAppManagers } from "@/service/users/useGetAppManagers";
import { useTablePagination } from "@/hooks/table/useTablePagination";
import { useTableFilters } from "@/hooks/table/useTableFilters";
import { useTableSorting } from "@/hooks/table/useTableSorting";

function ManagerListPage() {
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
        data: { data: managers, itemsCount },
    } = useGetAppManagers({
        pagination,
        columnFilters: manualColumnFilters,
        sorting,
    });

    const { table } = useTable({
        data: managers,
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
                <h2 className="text-2xl font-bold">Managers</h2>
                <CreateManagerDialog />
            </div>
            <ManagerTableFilters table={table} onSearch={onSearch} />
            <Table table={table} />
            <DataTablePagination table={table} />
        </div>
    );
}

export default ManagerListPage;
