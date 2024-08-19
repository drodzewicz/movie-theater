import { Table } from "@tanstack/react-table";

import {
    DataTableToolbar,
    SearchBarFilter,
    DropdownSelectFilter,
} from "@/components/common/Table/Filters";

export interface MovieManagerTableFiltersProps<TData> {
    table: Table<TData>;
}

function MovieManagerTableFilters<TData>({ table }: MovieManagerTableFiltersProps<TData>) {
    return (
        <DataTableToolbar table={table}>
            <DropdownSelectFilter
                column={table.getColumn("rating")}
                title="Country"
                options={[
                    { label: "Lithuania", value: "Lithuania" },
                    { label: "Poland", value: "Poland" },
                    { label: "Germany", value: "Germany" },
                ]}
            />
            <SearchBarFilter
                column={table.getColumn("title")}
                placeholder="Search by movie title..."
            />
        </DataTableToolbar>
    );
}

export default MovieManagerTableFilters;
