import {
    DataTableToolbar,
    DropdownSelectFilter,
    SearchBarFilter,
} from "@/components/common/table/filters";
import StatusFilter from "@/components/common/table/filters/StatusFilter";
import { PropsWithTable } from "@/components/common/table/types";
import { useHallList } from "@/service/halls/useHallList";
import { useLocationList } from "@/service/locations/useLocationList";
import { FilterOption } from "@/types/types";

function ScreeningTableFilters<TData>({ table, onSearch }: PropsWithTable<TData>) {
    const { data: locations } = useLocationList<FilterOption[]>(
        { pagination: { pageSize: 50, pageIndex: 0 } },
        {
            select: (value) => value.data?.map((it) => ({ label: it.identifier, value: it.id })),
        }
    );
    const { data: halls } = useHallList<FilterOption[]>(
        { pagination: { pageSize: 50, pageIndex: 0 } },
        { select: (value) => value.data?.map((it) => ({ label: it.name, value: it.id })) }
    );

    return (
        <DataTableToolbar table={table} onSearch={onSearch}>
            <SearchBarFilter
                value={(table.getColumn("movie")?.getFilterValue() as string) ?? ""}
                onChange={table.getColumn("movie")?.setFilterValue}
                placeholder="Search by movie..."
            />
            <DropdownSelectFilter
                column={table.getColumn("location")}
                title="Location"
                options={locations}
            />
            <DropdownSelectFilter column={table.getColumn("hall")} title="Halls" options={halls} />
            <StatusFilter column={table.getColumn("published")} />
        </DataTableToolbar>
    );
}

export default ScreeningTableFilters;
