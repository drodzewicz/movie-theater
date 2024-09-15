import LinkButton from "@/components/common/LinkButton";
import { DataTableColumnHeader } from "@/components/common/Table/CustomCells";
import { ColumnDef } from "@tanstack/react-table";

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
