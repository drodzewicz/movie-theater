import DataTableRowActions from "@/components/common/Table/CustomCells/DataTableRowActions";
import { DropdownMenuItem, DropdownMenuShortcut } from "@/components/ui/dropdown-menu";
import { useGoTo } from "@/hooks/useGoTo";
import useUpdateLocationStatus from "@/service/locations/useUpdateLocationStatus";
import { LocationResponse } from "@/types/types";
import { Row } from "@tanstack/react-table";

interface LocationTableRowActionsProps {
    row: Row<LocationResponse>;
}

function LocationTableRowActions({ row }: LocationTableRowActionsProps) {
    const goTo = useGoTo();

    const { mutate: updateStatus } = useUpdateLocationStatus(row.original.id);

    const goToViewPage = () =>
        goTo("/locations/:locationId", { variables: { locationId: row.original.id } });
    const goToEditPage = () =>
        goTo("/locations/:locationId", { variables: { locationId: row.original.id } });

    const toggleLocationStatus = () => updateStatus(!row.original.active);

    return (
        <DataTableRowActions>
            <DropdownMenuItem onClick={toggleLocationStatus}>
                {row.original.active ? "Deactivate" : "Activate"}
            </DropdownMenuItem>
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
