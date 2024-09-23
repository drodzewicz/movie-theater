import Table, { DataTablePagination } from "@/components/common/table";

import { columns } from "@/pages/admin/movie/movie-list/columns";

import MovieTableFilters from "@/pages/admin/movie/movie-list/MovieTableFilters";
import { useTable } from "@/hooks/table/useTable";
import LinkButton from "@/components/common/LinkButton";
import { useMovieList } from "@/service/movies/useMovieList";
import { useTablePagination } from "@/hooks/table/useTablePagination";
import { useTableFilters } from "@/hooks/table/useTableFilters";
import { useTableSorting } from "@/hooks/table/useTableSorting";

function MovieListPage() {
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
        data: { data, itemsCount },
    } = useMovieList({
        pagination,
        columnFilters: manualColumnFilters,
        sorting,
    });

    const { table } = useTable({
        data,
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
            <LinkButton to="/movies/create" className="ml-auto mr-0" variant="default">
                Add new movie
            </LinkButton>
            <MovieTableFilters table={table} onSearch={onSearch} />
            <Table table={table} />
            <DataTablePagination table={table} />
        </div>
    );
}

export default MovieListPage;
