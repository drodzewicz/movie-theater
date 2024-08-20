import { CrossIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PropsWithTable } from "@/components/common/Table/types";

function DataTableToolbar<TData>({
    table,
    children,
}: React.PropsWithChildren<PropsWithTable<TData>>) {
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
