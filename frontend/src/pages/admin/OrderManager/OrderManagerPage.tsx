import { useState } from "react";

import Table, { DataTablePagination } from "@/components/common/Table";

import { columns } from "@/pages/admin/OrderManager/columns";
import {
    ColumnFiltersState,
    SortingState,
    PaginationState,
    useReactTable,
    getCoreRowModel,
} from "@tanstack/react-table";
import OrderManagerTableFilters from "./OrderManagerTableFilters";

const data = [
    {
        id: "1",
        movieTitle: "Some mover",
        price: 22,
        ticketCount: 1,
    },
    {
        id: "1",
        movieTitle: "Some mover",
        price: 22,
        ticketCount: 1,
    },
    {
        id: "1",
        movieTitle: "Some mover",
        price: 22,
        ticketCount: 1,
    },
    {
        id: "1",
        movieTitle: "Some mover",
        price: 22,
        ticketCount: 1,
    },
];

function OrderManagerPage() {
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
            <OrderManagerTableFilters table={table} />
            <Table table={table} />
            <DataTablePagination table={table} />
        </div>
    );
}

export default OrderManagerPage;
