import { useState } from "react";

import Table, { DataTablePagination } from "@/components/Table";

import { columns } from "@/pages/admin/LocationManager/columns";
import {
    ColumnFiltersState,
    SortingState,
    PaginationState,
    useReactTable,
    getCoreRowModel,
} from "@tanstack/react-table";
import LocationManagerTableFilters from "./LocationManagerTableFilters";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const data = [
    {
        id: "1",
        country: "Lithuania",
        city: "Vilnius",
        streetName: "Architektu",
        buildingNumber: "4",
        zipCode: "23",
    },
    {
        id: "2",
        country: "Lithuania",
        city: "Kaunas",
        streetName: "Kudirkos",
        buildingNumber: "5",
        zipCode: "2323",
    },
    {
        id: "3",
        country: "Poland",
        city: "Wrocalw",
        streetName: "Jakastam",
        buildingNumber: "12",
        zipCode: "43423",
    },
    {
        id: "4",
        country: "Poland",
        city: "Warsaw",
        streetName: "swietkoszyska",
        buildingNumber: "23",
        zipCode: "1235",
    },
    {
        id: "5",
        country: "Poland",
        city: "Gdansk",
        streetName: "Kolobrzeska",
        buildingNumber: "11",
        zipCode: "6542",
    },
];

function LocationManagerPage() {
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
            <Link
                to="/locations/create"
                className={cn(buttonVariants({ variant: "default" }), "ml-auto mr-0")}
            >
                Create new lcoation
            </Link>
            <LocationManagerTableFilters table={table} />
            <Table table={table} />
            <DataTablePagination table={table} />
        </div>
    );
}

export default LocationManagerPage;
