import Table, { DataTablePagination } from "@/components/common/table";

import { columns } from "@/pages/admin/hall/hall-list/columns";
import HallTableFilters from "@/pages/admin/hall/hall-list/HallTableFilters";
import { useTable } from "@/hooks/table/useTable";
import { useHallList } from "@/service/halls/useHallList";
import { useTableFilters } from "@/hooks/table/useTableFilters";
import { useTablePagination } from "@/hooks/table/useTablePagination";
import { useTableSorting } from "@/hooks/table/useTableSorting";

function HallListPage() {
    const { pagination, onPaginationChange } = useTablePagination();
    const { columnFilters, manualColumnFilters, onColumnFiltersChange, syncManualFilterValues } =
        useTableFilters();
    const { sorting, onSortingChange } = useTableSorting();

    const { data } = useHallList({
        pagination,
        columnFilters: manualColumnFilters,
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
            <HallTableFilters table={table} onSearch={onSearch} />
            <Table table={table} />
            <DataTablePagination table={table} />
        </div>
    );
}

export default HallListPage;
