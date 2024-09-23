import LinkButton from "@/components/common/LinkButton";
import { DataTableColumnHeader } from "@/components/common/table/custom-cells";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<HallResponse>[] = [
    {
        accessorKey: "location",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Location" />,
        cell: ({ row }) => (
            <LinkButton
                className="p-0"
                variant="link"
                to="/locations/:locationId"
                variables={{ locationId: row.original.location.id }}
            >
                {row.original.location.identifier}
            </LinkButton>
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
        cell: ({ row }) => (
            <LinkButton
                className="p-0"
                variant="link"
                to="/halls/:hallId"
                variables={{ hallId: row.original.id }}
            >
                {row.original.name}
            </LinkButton>
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
