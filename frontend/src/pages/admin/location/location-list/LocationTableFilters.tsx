import {
    DataTableToolbar,
    SearchBarFilter,
    DropdownSelectFilter,
} from "@/components/common/table/filters";
import StatusFilter from "@/components/common/table/filters/StatusFilter";
import { PropsWithTable } from "@/components/common/table/types";
import { useCityOptionList } from "@/service/filter-options/useCityOptionList";
import { useCountryOptionList } from "@/service/filter-options/useCountryOptionList";

function LocationTableFilters<TData>({ table, onSearch }: PropsWithTable<TData>) {
    const { data: countryOptions } = useCountryOptionList();
    const { data: cityOptions } = useCityOptionList();

    return (
        <DataTableToolbar table={table} onSearch={onSearch}>
            <SearchBarFilter
                value={table.getColumn("identifier").getFilterValue() as string}
                onChange={table.getColumn("identifier").setFilterValue}
                placeholder="Search by location..."
            />

            <DropdownSelectFilter
                column={table.getColumn("country")}
                title="Country"
                options={countryOptions}
            />
            <DropdownSelectFilter
                column={table.getColumn("city")}
                title="City"
                options={cityOptions}
            />
            <StatusFilter column={table.getColumn("active")} />
        </DataTableToolbar>
    );
}

export default LocationTableFilters;
