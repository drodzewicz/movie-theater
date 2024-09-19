import Table, { DataTablePagination } from "@/components/common/Table";

import { columns } from "@/pages/admin/hall/HallList/columns";
import HallTableFilters from "@/pages/admin/hall/HallList/HallTableFilters";
import { useTable } from "@/hooks/table/useTable";
import LinkButton from "@/components/common/LinkButton";
import { useGetParamsLocationId } from "@/hooks/useGetParamsLocationId";

const data = [
    {
        id: "1",
        location: {
            id: "1",
            identifier: "LT-VNO-AR",
        },
        name: "Hall-H",
        floor: "2",
        number: "11",
    },
    {
        id: "1",
        location: {
            id: "1",
            identifier: "LT-VNO-AR",
        },
        name: "Hall-H",
        floor: "2",
        number: "11",
    },
    {
        id: "1",
        location: {
            id: "1",
            identifier: "LT-VNO-AR",
        },
        name: "Hall-H",
        floor: "2",
        number: "11",
    },
];

function HallListPage() {
    const locationId = useGetParamsLocationId();

    const { table } = useTable({ data, columns, itemsCount: 30 });

    return (
        <div className="container mx-auto py-10 flex flex-col gap-3">
            <LinkButton
                to="/locations/:locationId/create-hall"
                variables={{ locationId }}
                className="ml-auto mr-0"
            >
                Create Hall
            </LinkButton>
            <HallTableFilters table={table} />
            <Table table={table} />
            <DataTablePagination table={table} />
        </div>
    );
}

export default HallListPage;
