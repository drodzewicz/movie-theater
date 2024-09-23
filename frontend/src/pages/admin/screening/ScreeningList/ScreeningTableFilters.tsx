import {
    DataTableToolbar,
    DropdownSelectFilter,
    SearchBarFilter,
} from "@/components/common/Table/Filters";
import { PropsWithTable } from "@/components/common/Table/types";
import { useGetHallList } from "@/service/halls/useGetHallList";
import { useLocationList } from "@/service/locations/useLocationList";
import { FilterOption } from "@/types/types";

function ScreeningTableFilters<TData>({ table }: PropsWithTable<TData>) {
    const { data: locations } = useLocationList<FilterOption[]>(
        { pagination: { pageSize: 50, pageIndex: 0 } },
        {
            select: (value) =>
                value.data?.map((it) => ({ label: it.identifier, value: it.identifier })),
        }
    );
    const { data: halls } = useGetHallList<FilterOption[]>(
        { pagination: { pageSize: 50, pageIndex: 0 } },
        { select: (value) => value.data?.map((it) => ({ label: it.name, value: it.name })) }
    );

    return (
        <DataTableToolbar table={table}>
            <SearchBarFilter
                value={(table.getColumn("movie")?.getFilterValue() as string) ?? ""}
                onChange={table.getColumn("movie")?.setFilterValue}
                placeholder="Search by movie..."
            />
            <DropdownSelectFilter
                column={table.getColumn("id")}
                title="Location"
                options={locations}
            />
            <DropdownSelectFilter column={table.getColumn("hall")} title="Halls" options={halls} />
        </DataTableToolbar>
    );
}

export default ScreeningTableFilters;
