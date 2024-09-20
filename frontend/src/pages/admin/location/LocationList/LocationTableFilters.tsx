import {
    DataTableToolbar,
    SearchBarFilter,
    DropdownSelectFilter,
} from "@/components/common/Table/Filters";
import { PropsWithTable } from "@/components/common/Table/types";
import { useGetCityOptions } from "@/service/filter-options/useGetCityOptions";
import { useGetCountryOptions } from "@/service/filter-options/useGetCountryOptions";

function LocationTableFilters<TData>({ table, onSearch }: PropsWithTable<TData>) {
    const { data: countryOptions } = useGetCountryOptions();
    const { data: cityOptions } = useGetCityOptions();

    return (
        <DataTableToolbar table={table} onSearch={onSearch}>
            <SearchBarFilter
                column={table.getColumn("identifier")}
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
