import { CrossIcon } from "lucide-react";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";

export interface DataTableToolbarProps<TData> {
    table: Table<TData>;
}

function DataTableToolbar<TData>({
    table,
    children,
}: React.PropsWithChildren<DataTableToolbarProps<TData>>) {
    const isFiltered = table.getState().columnFilters.length > 0;

    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-1 items-center space-x-2">
                {children}
                {isFiltered && (
                    <Button
                        variant="ghost"
                        onClick={() => table.resetColumnFilters()}
                        className="h-8 px-2 lg:px-3"
                    >
                        Reset
                        <CrossIcon className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </div>
        </div>
    );
}

export default DataTableToolbar;
