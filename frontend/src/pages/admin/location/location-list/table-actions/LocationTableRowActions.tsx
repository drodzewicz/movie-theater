import DataTableRowActions from "@/components/common/table/custom-cells/DataTableRowActions";
import { DropdownMenuItem, DropdownMenuShortcut } from "@/components/ui/dropdown-menu";
import { useGoTo } from "@/hooks/useGoTo";
import { Row } from "@tanstack/react-table";
import UpdateStatusButtonAction from "@/pages/admin/location/location-list/table-actions/UpdateStatusButtonAction";

interface LocationTableRowActionsProps {
    row: Row<LocationResponse>;
}

function LocationTableRowActions({ row }: LocationTableRowActionsProps) {
    const goTo = useGoTo();

    const goToViewPage = () =>
        goTo("/locations/:locationId", { variables: { locationId: row.original.id } });
    const goToEditPage = () =>
        goTo("/locations/:locationId", { variables: { locationId: row.original.id } });

    return (
        <DataTableRowActions>
            <UpdateStatusButtonAction locationId={row.original.id} isActive={row.original.active} />
            <DropdownMenuItem onClick={goToViewPage}>View</DropdownMenuItem>
            <DropdownMenuItem onClick={goToEditPage}>Edit</DropdownMenuItem>
            <DropdownMenuItem>
                Delete
                <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
            </DropdownMenuItem>
        </DataTableRowActions>
    );
}

export default LocationTableRowActions;
