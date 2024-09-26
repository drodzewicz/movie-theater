import Table, { DataTablePagination } from "@/components/common/table";

import { columns } from "@/pages/admin/manager/manager-list/columns";

import ManagerTableFilters from "@/pages/admin/manager/manager-list/ManagerTableFilters";
import CreateManagerDialog from "@/pages/admin/manager/manager-create/CreateManagerDialog";
import { useTable } from "@/hooks/table/useTable";
import { useAppManagerList } from "@/service/users/useAppManagerList";
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

    const { data } = useAppManagerList({
        pagination,
        columnFilters: manualColumnFilters,
        sorting,
    });

    const { table } = useTable({
        data,
        columns,
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
