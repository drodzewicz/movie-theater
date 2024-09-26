import {
    useReactTable,
    getCoreRowModel,
    OnChangeFn,
    PaginationState,
    TableState,
    ColumnFiltersState,
    SortingState,
} from "@tanstack/react-table";
import { ColumnDef } from "@tanstack/react-table";

type TableProps<TData> = {
    data: { data: TData[]; itemsCount: number };
    columns: ColumnDef<TData>[];
    stateProperties?: Partial<TableState>;
    onPaginationChange?: OnChangeFn<PaginationState>;
    onColumnFiltersChange?: OnChangeFn<ColumnFiltersState>;
    onSortingChange?: OnChangeFn<SortingState>;
    onGlobalFilterChange?: OnChangeFn<any>;
};

function useTable<TData>({
    data = { data: [], itemsCount: 0 },
    columns,
    stateProperties,
    onPaginationChange,
    onSortingChange,
    onColumnFiltersChange,
    onGlobalFilterChange,
}: TableProps<TData>) {
    const table = useReactTable({
        data: data.data,
        rowCount: data.itemsCount,
        columns,
        state: stateProperties,
        manualPagination: true,
        manualFiltering: true,
        manualSorting: true,
        enableGlobalFilter: true,
        onPaginationChange,
        onSortingChange,
        onColumnFiltersChange,
        getCoreRowModel: getCoreRowModel(),
        onGlobalFilterChange,
    });

    return { table };
}

export { useTable };
