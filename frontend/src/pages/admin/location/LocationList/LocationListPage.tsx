import Table, { DataTablePagination } from "@/components/common/Table";

import { columns } from "@/pages/admin/location/LocationList/columns";

import LocationTableFilters from "@/pages/admin/location/LocationList/LocationTableFilters";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTable } from "@/hooks/table/useTable";
import useLocationList from "@/service/locations/useLocationList";
import { useTablePagination } from "@/hooks/table/useTablePagination";

function LocationListPage() {
    const { pagination, onPaginationChange } = useTablePagination();

    const { data: { data: locations, itemsCount } = {} } = useLocationList({ pagination });

    const { table } = useTable({
        data: locations,
        itemsCount,
        columns,
        stateProperties: { pagination },
        onPaginationChange,
    });

    return (
        <div className="container mx-auto py-10 flex flex-col gap-3">
            <Link
                to="/locations/create"
                className={cn(buttonVariants({ variant: "default" }), "ml-auto mr-0")}
            >
                Create new lcoation
            </Link>
            <LocationTableFilters table={table} />
            <Table table={table} />
            <DataTablePagination table={table} />
        </div>
    );
}

export default LocationListPage;
