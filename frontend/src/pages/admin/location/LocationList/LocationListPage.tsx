import Table, { DataTablePagination } from "@/components/common/Table";

import { columns } from "@/pages/admin/location/LocationList/columns";

import LocationTableFilters from "@/pages/admin/location/LocationList/LocationTableFilters";
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

    const {
        data: { data: locations, itemsCount },
    } = useLocationList({
        pagination,
        columnFilters: manualColumnFilters,
        sorting,
    });

    const { table } = useTable({
        data: locations,
        itemsCount,
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
