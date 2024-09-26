import Table, { DataTablePagination } from "@/components/common/table";

import { columns } from "@/pages/admin/location/location-list/columns";

import LocationTableFilters from "@/pages/admin/location/location-list/LocationTableFilters";
import { useTable } from "@/hooks/table/useTable";
import { useLocationList } from "@/service/locations/useLocationList";
import { useTablePagination } from "@/hooks/table/useTablePagination";
import { useTableFilters } from "@/hooks/table/useTableFilters";
import { useTableSorting } from "@/hooks/table/useTableSorting";
import LinkButton from "@/components/common/LinkButton";

function LocationListPage() {
    const { pagination, onPaginationChange } = useTablePagination();
    const { columnFilters, manualColumnFilters, onColumnFiltersChange, syncManualFilterValues } =
        useTableFilters();
    const { sorting, onSortingChange } = useTableSorting();

    const { data } = useLocationList({
        pagination,
        columnFilters: manualColumnFilters,
        sorting,
    });

    const { table } = useTable({
        data,
        columns,
        stateProperties: { pagination, columnFilters, sorting },
        onPaginationChange,
        onColumnFiltersChange,
        onSortingChange,
    });

    const onSearch = () => {
        syncManualFilterValues();
    };

    return (
        <div className="container mx-auto py-10 flex flex-col gap-3">
            <LinkButton to="/locations/create" variant="default" className="ml-auto mr-0">
                Create new location
            </LinkButton>
            <LocationTableFilters table={table} onSearch={onSearch} />
            <Table table={table} />
            <DataTablePagination table={table} />
        </div>
    );
}

export default LocationListPage;
