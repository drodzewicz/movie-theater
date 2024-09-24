import DataTableRowActions from "@/components/common/table/custom-cells/DataTableRowActions";
import { DropdownMenuItem, DropdownMenuShortcut } from "@/components/ui/dropdown-menu";
import { Row } from "@tanstack/react-table";
import UpdateStatusButtonAction from "@/pages/admin/manager/manager-list/table-actions/UpdateStatusButtonAction";

interface ManagerTableRowActionsProps {
    row: Row<AppMangerResponse>;
}

function ManagerTableRowActions({ row }: ManagerTableRowActionsProps) {
    return (
        <DataTableRowActions>
            <UpdateStatusButtonAction
                managerUsername={row.original.username}
                isActive={row.original.active}
            />
            <DropdownMenuItem>
                Delete
                <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
            </DropdownMenuItem>
        </DataTableRowActions>
    );
}

export default ManagerTableRowActions;
