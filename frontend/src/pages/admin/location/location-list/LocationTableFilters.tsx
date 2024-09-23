import {
    DataTableToolbar,
    SearchBarFilter,
    DropdownSelectFilter,
} from "@/components/common/table/filters";
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
            <DropdownSelectFilter
                column={table.getColumn("active")}
                title="Status"
                options={[
                    {
                        label: "Active",
                        value: "true",
                        icon: () => <span className="h-3 w-3 rounded-full bg-green-600 mr-2" />,
                    },
                    {
                        label: "Disabled",
                        value: "false",
                        icon: () => <span className="h-3 w-3 rounded-full bg-gray-400 mr-2" />,
                    },
                ]}
            />
        </DataTableToolbar>
    );
}

export default LocationTableFilters;
