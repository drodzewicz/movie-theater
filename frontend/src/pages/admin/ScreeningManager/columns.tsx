import { DataTableColumnHeader } from "@/components/Table/CustomCells";
import { ColumnDef } from "@tanstack/react-table";

type Screening = {
    id: string;
    movie: {
        id: string;
        title: string;
    };
    date: Date;
    location: {
        id: string;
        identifier: string;
    };
    hall: {
        id: string;
        identifier: string;
    };
    published: boolean;
};

export const columns: ColumnDef<Screening>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Id" />,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "date",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Date" />,
        enableSorting: true,
        enableHiding: true,
    },
    {
        accessorKey: "movie.title",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Movie" />,
        enableSorting: true,
        enableHiding: true,
    },
    {
        accessorKey: "location.identifier",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Location" />,
        enableSorting: true,
        enableHiding: true,
    },
    {
        accessorKey: "hall.identifier",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Hall" />,
        enableSorting: true,
        enableHiding: true,
    },
];
