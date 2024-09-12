import Table, { DataTablePagination } from "@/components/common/Table";

import { columns } from "@/pages/admin/user/UserList/columns";

import UserTableFilters from "@/pages/admin/user/UserList/UserTableFilters";
import CreateUserDialog from "@/pages/admin/user/CreateUser/CreateUserDialog";
import { useTable } from "@/hooks/table/useTable";

const data = [
    {
        id: "1",
        username: "Avengers",
        firstName: "First",
        lastName: "Last",
        active: true,
    },
    {
        id: "2",
        username: "Sasor",
        firstName: "First",
        lastName: "Last",
        active: true,
    },
    {
        id: "3",
        username: "Daro",
        firstName: "First",
        lastName: "Last",
        active: true,
    },
    {
        id: "4",
        username: "Marunx",
        firstName: "First",
        lastName: "Last",
        active: false,
    },
];

function UserListPage() {
    const { table } = useTable({ data, columns, itemsCount: 30 });

    return (
        <div className="container mx-auto py-10 flex flex-col gap-3">
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold">Users</h2>
                <CreateUserDialog />
            </div>
            <UserTableFilters table={table} />
            <Table table={table} />
            <DataTablePagination table={table} />
        </div>
    );
}

export default UserListPage;
