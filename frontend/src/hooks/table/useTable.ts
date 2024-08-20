import { useTableFilters } from "@/hooks/table/useTableFilters";
import { useTablePagination } from "@/hooks/table/useTablePagination";
import { useTableSorting } from "@/hooks/table/useTableSorting";
import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import { ColumnDef } from "@tanstack/react-table";

type TableProps<TData> = {
    data: TData[];
    columns: ColumnDef<TData>[];
};

function useTable<TData>({ data, columns }: TableProps<TData>) {
    const { columnFilters, onColumnFiltersChange } = useTableFilters();
    const { sorting, onSortingChange } = useTableSorting();
    const { pagination, onPaginationChange } = useTablePagination();

    const table = useReactTable({
        data,
        columns,
        state: {
            pagination,
            sorting,
            columnFilters,
        },
        manualPagination: true,
        manualFiltering: true,
        manualSorting: true,
        rowCount: 30,
        onPaginationChange,
        onSortingChange,
        onColumnFiltersChange,
        getCoreRowModel: getCoreRowModel(),
    });

    return { table, columnFilters, sorting, pagination };
}

export { useTable };
