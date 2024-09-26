import LinkButton from "@/components/common/LinkButton";
import StatusBadge from "@/components/common/StatusBadge";
import { DataTableColumnHeader } from "@/components/common/table/custom-cells";
import DateCell from "@/components/common/table/custom-cells/DateCell";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<ScreeningResponse>[] = [
    {
        id: "id",
        accessorKey: "id",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Id" />,
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: "published",
        accessorKey: "published",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Published" />,
        cell: ({ row }) => <StatusBadge active={row.original.published} />,
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: "date",
        accessorKey: "date",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Date" />,
        cell: ({ row }) => <DateCell row={row} accessorKey="date" />,
        enableSorting: true,
        enableHiding: true,
    },
    {
        id: "movie",
        accessorKey: "movie.title",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Movie" />,
        enableSorting: true,
        enableHiding: true,
        cell: ({ row }) => (
            <LinkButton
                className="p-0"
                variant="link"
                to="/halls/:hallId"
                variables={{ hallId: row.original.id }}
            >
                {row.getValue("movie")}
            </LinkButton>
        ),
    },
    {
        id: "location",
        accessorKey: "hall.location.identifier",
        enableSorting: true,
        enableHiding: true,
        header: ({ column }) => <DataTableColumnHeader column={column} title="Location" />,
        cell: ({ row }) => (
            <LinkButton
                className="p-0"
                variant="link"
                to="/locations/:locationId"
                variables={{ locationId: row.original.hall.location.id }}
            >
                {row.getValue("location")}
            </LinkButton>
        ),
    },
    {
        id: "hall",
        accessorKey: "hall.name",
        enableSorting: true,
        enableHiding: true,
        header: ({ column }) => <DataTableColumnHeader column={column} title="Hall" />,
        cell: ({ row }) => (
            <LinkButton
                className="p-0"
                variant="link"
                to="/halls/:hallId"
                variables={{ hallId: row.original.hall.id }}
            >
                {row.getValue("hall")}
            </LinkButton>
        ),
    },
    {
        id: "ticketCount",
        accessorKey: "availableTickets",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Available Tickets" />,
        enableSorting: true,
        enableHiding: true,
    },
];
