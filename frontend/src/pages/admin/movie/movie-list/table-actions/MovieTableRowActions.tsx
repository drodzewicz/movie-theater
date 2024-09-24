import DataTableRowActions from "@/components/common/table/custom-cells/DataTableRowActions";
import { DropdownMenuItem, DropdownMenuShortcut } from "@/components/ui/dropdown-menu";
import { Row } from "@tanstack/react-table";

interface MovieTableRowActionsProps {
    row: Row<MovieResponse>;
}

function MovieTableRowActions({ row }: MovieTableRowActionsProps) {
    const deleteMovie = () => {
        console.log(`deleteing ${row.original.id}`);
    };

    return (
        <DataTableRowActions>
            <DropdownMenuItem>View</DropdownMenuItem>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem onClick={deleteMovie}>
                Delete
                <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
            </DropdownMenuItem>
        </DataTableRowActions>
    );
}

export default MovieTableRowActions;
