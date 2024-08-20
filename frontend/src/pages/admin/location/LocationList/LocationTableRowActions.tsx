import DataTableRowActions from "@/components/common/Table/CustomCells/DataTableRowActions";
import { DropdownMenuItem, DropdownMenuShortcut } from "@/components/ui/dropdown-menu";
import { Row } from "@tanstack/react-table";
import { Locations } from "@/pages/admin/location/LocationList/columns";
import { useNavigate } from "react-router-dom";

interface LocationTableRowActionsProps {
    row: Row<Locations>;
}

function LocationTableRowActions({ row }: LocationTableRowActionsProps) {
    const navigate = useNavigate();

    const goToViewPage = () => navigate(`/locations/${row.original.id}`);
    const goToEditPage = () => navigate(`/locations/${row.original.id}/edit`);
    return (
        <DataTableRowActions>
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
