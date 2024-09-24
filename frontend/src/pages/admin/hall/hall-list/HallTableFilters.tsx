import {
    DataTableToolbar,
    SearchBarFilter,
    DropdownSelectFilter,
} from "@/components/common/table/filters";
import StatusFilter from "@/components/common/table/filters/StatusFilter";
import { PropsWithTable } from "@/components/common/table/types";
import { useLocationList } from "@/service/locations/useLocationList";
import { FilterOption } from "@/types/types";

function HallTableFilters<TData>({ table, onSearch }: PropsWithTable<TData>) {
    const { data: locations } = useLocationList<FilterOption[]>(
        { pagination: { pageSize: 50, pageIndex: 0 } },
        {
            select: ({ data }) =>
                data?.map((it) => ({
                    label: `${it.identifier} (${it.country})`,
                    value: it.identifier,
                })),
        }
    );

    return (
        <DataTableToolbar table={table} onSearch={onSearch}>
            <SearchBarFilter
                value={table.getColumn("name").getFilterValue() as string}
                onChange={table.getColumn("name").setFilterValue}
                placeholder="Search by hall..."
            />
            <DropdownSelectFilter
                column={table.getColumn("location")}
                title="Location"
                options={locations}
            />
            <StatusFilter column={table.getColumn("active")} />
        </DataTableToolbar>
    );
}

export default HallTableFilters;
