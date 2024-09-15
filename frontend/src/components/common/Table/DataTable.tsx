import { flexRender, Table as TanstackTable } from "@tanstack/react-table";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

import DataTableHeader from "@/components/common/Table/DataTableHeader";

export interface TableProps<TData> {
    table: TanstackTable<TData>;
}

function DataTable<TData>({ table }: TableProps<TData>) {
    const rows = table.getRowModel().rows;

    return (
        <div className="flex flex-col gap-3">
            {/* <DataTableToolbar table={table} /> */}
            <div className="rounded-md border">
                <Table>
                    <DataTableHeader headerGroups={table.getHeaderGroups()} />
                    <TableBody>
                        {rows?.length ? (
                            rows.map((row) => (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={table.getAllColumns()?.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default DataTable;
