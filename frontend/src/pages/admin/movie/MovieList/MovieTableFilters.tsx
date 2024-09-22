import {
    DataTableToolbar,
    SearchBarFilter,
} from "@/components/common/Table/Filters";
import { PropsWithTable } from "@/components/common/Table/types";

function MovieTableFilters<TData>({ table, onSearch }: PropsWithTable<TData>) {
    return (
        <DataTableToolbar table={table} onSearch={onSearch}>
            <SearchBarFilter
                value={table.getColumn("title").getFilterValue() as string}
                onChange={table.getColumn("title").setFilterValue}
                placeholder="Search by movie title..."
            />
        </DataTableToolbar>
    );
}

export default MovieTableFilters;
