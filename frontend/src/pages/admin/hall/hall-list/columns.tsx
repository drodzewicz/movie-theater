import LinkButton from "@/components/common/LinkButton";
import StatusBadge from "@/components/common/StatusBadge";
import { DataTableColumnHeader } from "@/components/common/table/custom-cells";
import DateCell from "@/components/common/table/custom-cells/DateCell";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<HallResponse>[] = [
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
        accessorKey: "active",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Active" />,
        cell: ({ row }) => <StatusBadge active={row.original.active} />,
        enableSorting: false,
        enableHiding: false,
    },
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
        accessorKey: "floor",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Floor" />,
        enableSorting: true,
        enableHiding: true,
    },
    {
        accessorKey: "room",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Room" />,
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
];
