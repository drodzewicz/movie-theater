import { useState } from "react";

import Table, { DataTablePagination } from "@/components/common/Table";

import { columns } from "@/pages/admin/ManagerManager/columns";
import {
    ColumnFiltersState,
    SortingState,
    PaginationState,
    useReactTable,
    getCoreRowModel,
} from "@tanstack/react-table";
import UserManagerTableFilters from "./ManagerManagerTableFilters";
import CreateManagerDialog from "../CreateManager/CreateManagerDialog";

const data = [
    {
        id: "1",
        username: "Avengers",
        firstName: "First",
        lastName: "Last",
        active: true,
        role: "ADMIN",
    },
    {
        id: "2",
        username: "Sasor",
        firstName: "First",
        lastName: "Last",
        active: true,
        role: "ADMIN",
    },
    {
        id: "3",
        username: "Daro",
        firstName: "First",
        lastName: "Last",
        active: true,
        role: "ADMIN",
    },
    {
        id: "4",
        username: "Marunx",
        firstName: "First",
        lastName: "Last",
        active: false,
        role: "ADMIN",
    },
];

function ManagerManagerPage() {
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
                <h2 className="text-2xl font-bold">Managers</h2>
                <CreateManagerDialog />
            </div>
            <UserManagerTableFilters table={table} />
            <Table table={table} />
            <DataTablePagination table={table} />
        </div>
    );
}

export default ManagerManagerPage;
