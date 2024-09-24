import { DataTableColumnHeader } from "@/components/common/table/custom-cells";
import DateCell from "@/components/common/table/custom-cells/DateCell";
import { ColumnDef } from "@tanstack/react-table";
import { CheckCircle2, Circle } from "lucide-react";
import MovieTableRowActions from "@/pages/admin/movie/movie-list/table-actions/MovieTableRowActions";

export const columns: ColumnDef<MovieResponse>[] = [
    {
        accessorKey: "title",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Title" />,
        enableSorting: true,
        enableHiding: true,
    },
    {
        accessorKey: "rating",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Rating" />,
        cell: ({ row }) => row.original.rating ?? 0,
        enableSorting: true,
        enableHiding: true,
    },
    {
        accessorKey: "posterUrl",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Has Poster" />,
        cell: ({ row }) => (row.original.posterUrl ? <CheckCircle2 /> : <Circle />),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "trailerUrl",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Has Trailer" />,
        cell: ({ row }) => (row.original.trailerUrl ? <CheckCircle2 /> : <Circle />),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "dateCreated",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Release Date" />,
        cell: ({ row }) => <DateCell row={row} accessorKey="releaseDate" />,
        enableSorting: true,
        enableHiding: true,
    },
    {
        id: "actions",
        cell: ({ row }) => <MovieTableRowActions row={row} />,
    },
];
