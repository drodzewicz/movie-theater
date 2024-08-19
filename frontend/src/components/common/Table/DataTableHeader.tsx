import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { HeaderGroup, flexRender } from "@tanstack/react-table";

export interface DataTableHeaderProps<TData> {
    headerGroups: HeaderGroup<TData>[];
}

function DataTableHeader<TData>({ headerGroups }: DataTableHeaderProps<TData>) {
    return (
        <TableHeader>
            {headerGroups.map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                        return (
                            <TableHead key={header.id} colSpan={header.colSpan}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                          header.column.columnDef.header,
                                          header.getContext()
                                      )}
                            </TableHead>
                        );
                    })}
                </TableRow>
            ))}
        </TableHeader>
    );
}

export default DataTableHeader;
