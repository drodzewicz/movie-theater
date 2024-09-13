import { DataTableColumnHeader } from "@/components/common/Table/CustomCells";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import LocationTableRowActions from "@/pages/admin/location/LocationList/LocationTableRowActions";

export const columns: ColumnDef<LocationResponse>[] = [
    {
        accessorKey: "identifier",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Identifier" />,
        cell: ({ row }) => (
            <Link
                className={cn(buttonVariants({ variant: "link" }), "p-0")}
                to={`/locations/${row.original.id}`}
            >
                {row.original.identifier}
            </Link>
        ),
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
                        row.original.active ? "bg-green-600" : "bg-gray-500"
                    )}
                ></span>
                {row.original.active ? "Active" : "Disabled"}
            </Badge>
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
        id: "address",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Address" />,
        cell: ({ row }) => (
            <p>{`${row.original.streetName}, ${row.original.buildingNumber}, ${row.original.zipCode}`}</p>
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: "actions",
        cell: ({ row }) => <LocationTableRowActions row={row} />,
    },
];
