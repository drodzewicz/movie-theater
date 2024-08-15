import { DataTableColumnHeader } from "@/components/Table/CustomCells";
import { ColumnDef } from "@tanstack/react-table";

type Locations = {
    id: string;
    country: string;
    city: string;
    streetName: string;
    buildingNumber: string;
    zipCode: string;
};

export const columns: ColumnDef<Locations>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Id" />,
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
