import { DataTableColumnHeader } from "@/components/common/table/custom-cells";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import LocationTableRowActions from "@/pages/admin/location/location-list/table-actions/LocationTableRowActions";
import LinkButton from "@/components/common/LinkButton";
import DateCell from "@/components/common/table/custom-cells/DateCell";

export const columns: ColumnDef<LocationResponse>[] = [
    {
        accessorKey: "identifier",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Identifier" />,
        cell: ({ row }) => (
            <LinkButton
                variant="link"
                className={"p-0"}
                to="/locations/:locationId"
                variables={{ locationId: row.original.id }}
            >
                {row.original.identifier}
            </LinkButton>
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
        accessorKey: "dateCreated",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Date Created" />,
        cell: ({ row }) => <DateCell row={row} accessorKey="dateCreated" />,
        enableSorting: true,
        enableHiding: true,
    },
    {
        id: "actions",
        cell: ({ row }) => <LocationTableRowActions row={row} />,
    },
];
