import { DataTableColumnHeader } from "@/components/common/table/custom-cells";
import DateCell from "@/components/common/table/custom-cells/DateCell";
import { ColumnDef } from "@tanstack/react-table";
import StatusBadge from "@/components/common/StatusBadge";
import ManagerTableRowActions from "@/pages/admin/manager/manager-list/table-actions/ManagerTableRowActions";

export const columns: ColumnDef<AppMangerResponse>[] = [
    {
        accessorKey: "username",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Username" />,
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
        accessorKey: "appUserRole",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Role" />,
        enableHiding: true,
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
        cell: ({ row }) => <ManagerTableRowActions row={row} />,
    },
];
