import DataTableRowActions from "@/components/common/Table/CustomCells/DataTableRowActions";
import { DropdownMenuItem, DropdownMenuShortcut } from "@/components/ui/dropdown-menu";
import useUpdateLocationStatus from "@/service/locations/useUpdateLocationStatus";
import { Row } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";

interface LocationTableRowActionsProps {
    row: Row<LocationResponse>;
}

function LocationTableRowActions({ row }: LocationTableRowActionsProps) {
    const navigate = useNavigate();

    const { mutate: updateStatus } = useUpdateLocationStatus(row.original.id);

    const goToViewPage = () => navigate(`/locations/${row.original.id}`);
    const goToEditPage = () => navigate(`/locations/${row.original.id}/edit`);

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
