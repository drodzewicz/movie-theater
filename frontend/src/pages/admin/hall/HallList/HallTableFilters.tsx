import {
    DataTableToolbar,
    SearchBarFilter,
    DropdownSelectFilter,
} from "@/components/common/Table/Filters";
import { PropsWithTable } from "@/components/common/Table/types";
import { useLocationList } from "@/service/locations/useLocationList";

function HallTableFilters<TData>({ table, onSearch }: PropsWithTable<TData>) {
    const { data: locations } = useLocationList({ pagination: { pageSize: 50, pageIndex: 0 } });

    const mappedLocations = locations.data?.map((it) => ({
        label: `${it.identifier} (${it.country})`,
        value: it.identifier,
    }));

    return (
        <DataTableToolbar table={table} onSearch={onSearch}>
            <DropdownSelectFilter
                column={table.getColumn("location")}
                title="Country"
                options={mappedLocations}
            />
            <SearchBarFilter
                value={table.getColumn("name").getFilterValue() as string}
                onChange={table.getColumn("name").setFilterValue}
                placeholder="Search by hall..."
            />
        </DataTableToolbar>
    );
}

export default HallTableFilters;
