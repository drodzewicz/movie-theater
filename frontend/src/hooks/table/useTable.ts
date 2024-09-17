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
    data: TData[];
    columns: ColumnDef<TData>[];
    itemsCount: number;
    stateProperties?: Partial<TableState>;
    onPaginationChange?: OnChangeFn<PaginationState>;
    onColumnFiltersChange?: OnChangeFn<ColumnFiltersState>;
    onSortingChange?: OnChangeFn<SortingState>;
};

function useTable<TData>({
    data = [],
    columns,
    itemsCount,
    stateProperties,
    onPaginationChange,
    onSortingChange,
    onColumnFiltersChange,
}: TableProps<TData>) {
    const table = useReactTable({
        data,
        columns,
        state: stateProperties,
        manualPagination: true,
        manualFiltering: true,
        manualSorting: true,
        rowCount: itemsCount,
        onPaginationChange,
        onSortingChange,
        onColumnFiltersChange,
        getCoreRowModel: getCoreRowModel(),
    });

    return { table };
}

export { useTable };
