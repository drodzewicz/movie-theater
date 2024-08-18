import { useState } from "react";

import Table, { DataTablePagination } from "@/components/Table";

import { columns } from "@/pages/admin/ScreeningManager/columns";
import {
    ColumnFiltersState,
    SortingState,
    PaginationState,
    useReactTable,
    getCoreRowModel,
} from "@tanstack/react-table";
import ScreeningManagerTableFilters from "./ScreeningManagerTableFilters";
import CreateScreeningDialog from "../CreateScreening/CreateScreeningDialog";

const data = [
    {
        id: "1",
        availableTickets: 4,
        movie: {
            id: "1",
            title: "Avengers",
        },
        location: {
            id: "1",
            identifier: "DWD-23",
        },
        hall: {
            id: "1",
            identifier: "DWD-23",
        },
        published: true,
        date: new Date(),
    },
    {
        id: "1",
        availableTickets: 4,
        movie: {
            id: "1",
            title: "Something else",
        },
        location: {
            id: "1",
            identifier: "DWD-23",
        },
        hall: {
            id: "1",
            identifier: "DWD-23",
        },
        published: false,
        date: new Date(),
    },
];

function ScreeningManagerPage() {
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [sorting, setSorting] = useState<SortingState>([]);
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 10,
    });

    const table = useReactTable({
        data,
        columns,
        state: {
            pagination,
            sorting,
            columnFilters,
        },
        manualPagination: true,
        manualFiltering: true,
        manualSorting: true,
        rowCount: 30,
        onPaginationChange: setPagination,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="container mx-auto py-10 flex flex-col gap-3">
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold">Screenings</h2>
                <CreateScreeningDialog />
            </div>
            <ScreeningManagerTableFilters table={table} />
            <Table table={table} />
            <DataTablePagination table={table} />
        </div>
    );
}

export default ScreeningManagerPage;
