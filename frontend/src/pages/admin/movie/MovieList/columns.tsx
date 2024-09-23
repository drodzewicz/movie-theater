import { DataTableColumnHeader } from "@/components/common/Table/CustomCells";
import { ColumnDef } from "@tanstack/react-table";

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
        enableSorting: true,
        enableHiding: true,
    },
    {
        accessorKey: "posterUrl",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Has Poster" />,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "trailerUrl",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Has Trailer" />,
        enableSorting: false,
        enableHiding: false,
    },
];
