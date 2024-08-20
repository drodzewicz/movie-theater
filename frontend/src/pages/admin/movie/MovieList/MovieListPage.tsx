import { useState } from "react";

import Table, { DataTablePagination } from "@/components/common/Table";

import { columns } from "@/pages/admin/movie/MovieList/columns";
import {
    ColumnFiltersState,
    SortingState,
    PaginationState,
    useReactTable,
    getCoreRowModel,
} from "@tanstack/react-table";
import MovieTableFilters from "@/pages/admin/movie/MovieList/MovieTableFilters";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const data = [
    {
        id: "1",
        title: "Avengers",
        rating: 3,
    },
    {
        id: "2",
        title: "Avengers 2",
        rating: 4,
    },
    {
        id: "3",
        title: "The breaker",
        rating: 4,
    },
    {
        id: "4",
        title: "Some movie",
        rating: 4,
    },
];

function MovieListPage() {
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [sorting, setSorting] = useState<SortingState>([]);
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 10,
    });

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
        onPaginationChange: setPagination,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="container mx-auto py-10 flex flex-col gap-3">
            <Link
                to="/movies/create"
                className={cn(buttonVariants({ variant: "default" }), "ml-auto mr-0")}
            >
                Add new movie
            </Link>
            <MovieTableFilters table={table} />
            <Table table={table} />
            <DataTablePagination table={table} />
        </div>
    );
}

export default MovieListPage;
