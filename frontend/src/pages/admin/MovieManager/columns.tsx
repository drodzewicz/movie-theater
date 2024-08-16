import { DataTableColumnHeader } from "@/components/Table/CustomCells";
import { ColumnDef } from "@tanstack/react-table";

type Movie = {
    id: string;
    title: string;
    rating: number;
};

export const columns: ColumnDef<Movie>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Id" />,
        enableSorting: false,
        enableHiding: false,
    },
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
];
