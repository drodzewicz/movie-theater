import Table, { DataTablePagination } from "@/components/common/table";

import { columns } from "@/pages/admin/screening/screening-list/columns";

import ScreeningTableFilters from "@/pages/admin/screening/screening-list/ScreeningTableFilters";
import CreateScreeningDialog from "@/pages/admin/screening/screening-create/CreateScreeningDialog";
import { useTable } from "@/hooks/table/useTable";
import { useScreeningList } from "@/service/screening/useScreeningList";

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

function ScreeningListPage() {
    const { data: screenings } = useScreeningList();

    const { table } = useTable({ data, columns, itemsCount: 30 });

    return (
        <div className="container mx-auto py-10 flex flex-col gap-3">
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold">Screenings</h2>
                <CreateScreeningDialog />
            </div>
            <ScreeningTableFilters table={table} />
            <Table table={table} />
            <DataTablePagination table={table} />
        </div>
    );
}

export default ScreeningListPage;
