import Table, { DataTablePagination } from "@/components/common/Table";

import { columns } from "@/pages/admin/hall/HallList/columns";
import HallTableFilters from "@/pages/admin/hall/HallList/HallTableFilters";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTable } from "@/hooks/table/useTable";

const data = [
    {
        id: "1",
        location: {
            id: "1",
            indentifier: "LT-VNO-AR",
        },
        name: "Hall-H",
        floor: "2",
        number: "11",
    },
    {
        id: "1",
        location: {
            id: "1",
            indentifier: "LT-VNO-AR",
        },
        name: "Hall-H",
        floor: "2",
        number: "11",
    },
    {
        id: "1",
        location: {
            id: "1",
            indentifier: "LT-VNO-AR",
        },
        name: "Hall-H",
        floor: "2",
        number: "11",
    },
];

function HallListPage() {
    const { table } = useTable({ data, columns });

    return (
        <div className="container mx-auto py-10 flex flex-col gap-3">
            <Link
                to="/halls/create"
                className={cn(buttonVariants({ variant: "default" }), "ml-auto mr-0")}
            >
                Create Hall
            </Link>
            <HallTableFilters table={table} />
            <Table table={table} />
            <DataTablePagination table={table} />
        </div>
    );
}

export default HallListPage;
