import Table, { DataTablePagination } from "@/components/common/Table";

import { columns } from "@/pages/admin/movie/MovieList/columns";

import MovieTableFilters from "@/pages/admin/movie/MovieList/MovieTableFilters";
import { useTable } from "@/hooks/table/useTable";
import LinkButton from "@/components/common/LinkButton";

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
    const { table } = useTable({ data, columns, itemsCount: 30 });

    return (
        <div className="container mx-auto py-10 flex flex-col gap-3">
            <LinkButton to="/movies/create" className="ml-auto mr-0" variant="default">
                Add new movie
            </LinkButton>
            <MovieTableFilters table={table} />
            <Table table={table} />
            <DataTablePagination table={table} />
        </div>
    );
}

export default MovieListPage;
