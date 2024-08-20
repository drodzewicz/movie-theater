import Table, { DataTablePagination } from "@/components/common/Table";

import { columns } from "@/pages/admin/order/OrderList/columns";

import OrderTableFilters from "@/pages/admin/order/OrderList/OrderTableFilters";
import { useTable } from "@/hooks/table/useTable";

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

function OrderListPage() {
    const { table } = useTable({ data, columns });

    return (
        <div className="container mx-auto py-10 flex flex-col gap-3">
            <OrderTableFilters table={table} />
            <Table table={table} />
            <DataTablePagination table={table} />
        </div>
    );
}

export default OrderListPage;
