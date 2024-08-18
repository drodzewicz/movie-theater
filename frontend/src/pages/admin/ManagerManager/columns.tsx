import { DataTableColumnHeader } from "@/components/Table/CustomCells";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
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
];
