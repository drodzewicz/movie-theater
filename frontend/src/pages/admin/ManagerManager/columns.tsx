import { DataTableColumnHeader } from "@/components/Table/CustomCells";
import { ColumnDef } from "@tanstack/react-table";

type AppUser = {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    role: string;
    active: boolean;
};

export const columns: ColumnDef<AppUser>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Id" />,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "username",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Username" />,
        enableSorting: true,
        enableHiding: true,
    },
    {
        accessorKey: "firstName",
        header: ({ column }) => <DataTableColumnHeader column={column} title="First Name" />,
        enableSorting: true,
        enableHiding: true,
    },
    {
        accessorKey: "lastName",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Last Name" />,
        enableSorting: true,
        enableHiding: true,
    },
    {
        accessorKey: "role",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Role" />,
        enableHiding: true,
    },
    {
        accessorKey: "active",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Active" />,
        enableSorting: true,
        enableHiding: true,
    },
];
