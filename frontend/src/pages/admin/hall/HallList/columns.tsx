import { DataTableColumnHeader } from "@/components/common/Table/CustomCells";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";

type Hall = {
    id: string;
    location: {
        id: string;
        identifier: string;
    };
    name: string;
    floor: string;
    number: string;
};

export const columns: ColumnDef<Hall>[] = [
    {
        accessorKey: "locationIdentifier",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Location" />,
        cell: ({ row }) => (
            <Link
                className={cn(buttonVariants({ variant: "link" }), "p-0")}
                to={`/locations/${row.original.location.id}`}
            >
                {row.original.location.identifier}
            </Link>
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
        cell: ({ row }) => (
            <Link
                className={cn(buttonVariants({ variant: "link" }), "p-0")}
                to={`/halls/${row.original.id}`}
            >
                {row.original.name}
            </Link>
        ),
        enableSorting: true,
        enableHiding: true,
    },
    {
        accessorKey: "floor",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Floor" />,
        enableSorting: true,
        enableHiding: true,
    },
    {
        accessorKey: "number",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Number" />,
        enableSorting: false,
        enableHiding: false,
    },
];
