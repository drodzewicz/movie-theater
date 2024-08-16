import { DataTableColumnHeader } from "@/components/Table/CustomCells";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";

type Locations = {
    id: string;
    indentifier: string;
    country: string;
    city: string;
    streetName: string;
    buildingNumber: string;
    zipCode: string;
};

export const columns: ColumnDef<Locations>[] = [
    {
        accessorKey: "indentifier",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Identifier" />,
        cell: ({ row }) => (
            <Link
                className={cn(buttonVariants({ variant: "link" }), "p-0")}
                to={`/locations/${row.original.id}`}
            >
                {row.original.indentifier}
            </Link>
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "country",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Country" />,
        enableSorting: true,
        enableHiding: true,
    },
    {
        accessorKey: "city",
        header: ({ column }) => <DataTableColumnHeader column={column} title="City" />,
        enableSorting: true,
        enableHiding: true,
    },
    {
        accessorKey: "streetName",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Street" />,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "buildingNumber",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Building number" />,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "zipCode",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Zip-Code" />,
        enableSorting: false,
        enableHiding: false,
    },
];
