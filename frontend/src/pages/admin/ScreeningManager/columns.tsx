import { DataTableColumnHeader } from "@/components/common/Table/CustomCells";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
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
    availableTickets: number;
};

export const columns: ColumnDef<Screening>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Id" />,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "active",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Active" />,
        cell: ({ row }) => (
            <Badge variant="outline" className="gap-1">
                <span
                    className={cn(
                        "rounded-full h-3 w-3 ",
                        row.original.published ? "bg-green-600" : "bg-gray-500"
                    )}
                ></span>
                {row.original.published ? "Published" : "Drafted"}
            </Badge>
        ),
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
    {
        accessorKey: "availableTickets",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Available Tickets" />,
        enableSorting: true,
        enableHiding: true,
    },
];
