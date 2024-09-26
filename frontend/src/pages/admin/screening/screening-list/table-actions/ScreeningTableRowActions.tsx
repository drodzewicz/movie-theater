import DataTableRowActions from "@/components/common/table/custom-cells/DataTableRowActions";
import { DropdownMenuItem, DropdownMenuShortcut } from "@/components/ui/dropdown-menu";
import { useGoTo } from "@/hooks/useGoTo";
import { Row } from "@tanstack/react-table";
import PublishScreeningButtonAction from "@/pages/admin/screening/screening-list/table-actions/PublishScreeningButtonAction";

interface ScreeningTableRowActionsProps {
    row: Row<ScreeningResponse>;
}

function ScreeningTableRowActions({ row }: ScreeningTableRowActionsProps) {
    const goTo = useGoTo();

    const goToViewPage = () =>
        goTo("/screenings/:screeningId", { variables: { screeningId: row.original.id } });
    const goToEditPage = () =>
        goTo("/screenings/:screeningId", { variables: { screeningId: row.original.id } });

    return (
        <DataTableRowActions>
            {!row.original.published && (
                <PublishScreeningButtonAction screeningId={row.original.id} />
            )}
            <DropdownMenuItem onClick={goToViewPage}>View</DropdownMenuItem>
            <DropdownMenuItem onClick={goToEditPage}>Edit</DropdownMenuItem>
            <DropdownMenuItem>
                Delete
                <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
            </DropdownMenuItem>
        </DataTableRowActions>
    );
}

export default ScreeningTableRowActions;
