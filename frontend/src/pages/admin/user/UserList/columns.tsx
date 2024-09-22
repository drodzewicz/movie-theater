import { DataTableColumnHeader } from "@/components/common/Table/CustomCells";
// import { Badge } from "@/components/ui/badge";
// import { cn } from "@/lib/utils";
import { AppUserResponse } from "@/types/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<AppUserResponse>[] = [
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
    // {
    //     accessorKey: "active",
    //     header: ({ column }) => <DataTableColumnHeader column={column} title="Active" />,
    //     cell: ({ row }) => (
    //         <Badge variant="outline" className="gap-1">
    //             <span
    //                 className={cn(
    //                     "rounded-full h-3 w-3 ",
    //                     row.original.active ? "bg-green-600" : "bg-gray-500"
    //                 )}
    //             ></span>
    //             {row.original.active ? "Active" : "Disabled"}
    //         </Badge>
    //     ),
    //     enableSorting: false,
    //     enableHiding: false,
    // },
];
