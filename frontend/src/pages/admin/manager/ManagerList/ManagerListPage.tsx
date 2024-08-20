import Table, { DataTablePagination } from "@/components/common/Table";

import { columns } from "@/pages/admin/manager/ManagerList/columns";

import ManagerTableFilters from "@/pages/admin/manager/ManagerList/ManagerTableFilters";
import CreateManagerDialog from "@/pages/admin/manager/CreateManager/CreateManagerDialog";
import { useTable } from "@/hooks/table/useTable";

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

function ManagerListPage() {
    const { table } = useTable({ data, columns });

    return (
        <div className="container mx-auto py-10 flex flex-col gap-3">
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold">Managers</h2>
                <CreateManagerDialog />
            </div>
            <ManagerTableFilters table={table} />
            <Table table={table} />
            <DataTablePagination table={table} />
        </div>
    );
}

export default ManagerListPage;
