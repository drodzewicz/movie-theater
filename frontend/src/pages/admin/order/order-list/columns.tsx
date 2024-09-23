import { DataTableColumnHeader } from "@/components/common/table/custom-cells";
import { ColumnDef } from "@tanstack/react-table";

type ScreeningOrder = {
    id: string;
    movieTitle: string;
    price: number;
    ticketCount: number;
};

export const columns: ColumnDef<ScreeningOrder>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Id" />,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "movieTitle",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Movie Title" />,
        enableSorting: true,
        enableHiding: true,
    },
    {
        accessorKey: "price",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Order Price" />,
        enableSorting: true,
        enableHiding: true,
    },
    {
        accessorKey: "ticketCount",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Tickets" />,
        enableSorting: true,
        enableHiding: true,
    },
];
