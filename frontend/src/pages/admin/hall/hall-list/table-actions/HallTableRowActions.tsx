import DataTableRowActions from "@/components/common/table/custom-cells/DataTableRowActions";
import { DropdownMenuItem, DropdownMenuShortcut } from "@/components/ui/dropdown-menu";
import { useGoTo } from "@/hooks/useGoTo";
import { Row } from "@tanstack/react-table";
import UpdateStatusButtonAction from "@/pages/admin/hall/hall-list/table-actions/UpdateStatusButtonAction";

interface HallTableRowActionsProps {
    row: Row<HallResponse>;
}

function HallTableRowActions({ row }: HallTableRowActionsProps) {
    const goTo = useGoTo();

    const goToViewPage = () => goTo("/halls/:hallId", { variables: { hallId: row.original.id } });
    const goToEditPage = () => goTo("/halls/:hallId", { variables: { hallId: row.original.id } });

    return (
        <DataTableRowActions>
            <UpdateStatusButtonAction hallId={row.original.id} isActive={row.original.active} />
            <DropdownMenuItem onClick={goToViewPage}>View</DropdownMenuItem>
            <DropdownMenuItem onClick={goToEditPage}>Edit</DropdownMenuItem>
            <DropdownMenuItem>
                Delete
                <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
            </DropdownMenuItem>
        </DataTableRowActions>
    );
}

export default HallTableRowActions;
