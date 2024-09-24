import DataTableRowActions from "@/components/common/table/custom-cells/DataTableRowActions";
import { DropdownMenuItem, DropdownMenuShortcut } from "@/components/ui/dropdown-menu";
import { Row } from "@tanstack/react-table";
import UpdateStatusButtonAction from "@/pages/admin/user/user-list/table-actions/UpdateStatusButtonAction";

interface UserTableRowActionsProps {
    row: Row<AppUserResponse>;
}

function UserTableRowActions({ row }: UserTableRowActionsProps) {
    return (
        <DataTableRowActions>
            <UpdateStatusButtonAction
                userUsername={row.original.username}
                isActive={row.original.active}
            />
            <DropdownMenuItem>
                Delete
                <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
            </DropdownMenuItem>
        </DataTableRowActions>
    );
}

export default UserTableRowActions;
