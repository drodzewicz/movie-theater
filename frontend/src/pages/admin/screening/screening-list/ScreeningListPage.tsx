import Table, { DataTablePagination } from "@/components/common/table";

import { columns } from "@/pages/admin/screening/screening-list/columns";

import ScreeningTableFilters from "@/pages/admin/screening/screening-list/ScreeningTableFilters";
import CreateScreeningDialog from "@/pages/admin/screening/screening-create/CreateScreeningDialog";
import { useTable } from "@/hooks/table/useTable";
import { useScreeningList } from "@/service/screening/useScreeningList";
import { useTablePagination } from "@/hooks/table/useTablePagination";
import { useTableSorting } from "@/hooks/table/useTableSorting";
import { useTableFilters } from "@/hooks/table/useTableFilters";

function ScreeningListPage() {
    const { pagination, onPaginationChange } = useTablePagination();
    const { columnFilters, manualColumnFilters, onColumnFiltersChange, syncManualFilterValues } =
        useTableFilters();
    const { sorting, onSortingChange } = useTableSorting();
    const { data } = useScreeningList({
        columnFilters: manualColumnFilters,
        pagination,
        sorting,
    });

    const { table } = useTable({
        data,
        columns,
        stateProperties: { pagination, columnFilters, sorting },
        onPaginationChange,
        onColumnFiltersChange,
        onSortingChange,
    });

    const onSearch = () => {
        syncManualFilterValues();
    };

    return (
        <div className="container mx-auto py-10 flex flex-col gap-3">
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold">Screenings</h2>
                <CreateScreeningDialog />
            </div>
            <ScreeningTableFilters table={table} onSearch={onSearch} />
            <Table table={table} />
            <DataTablePagination table={table} />
        </div>
    );
}

export default ScreeningListPage;
