import {
    DataTableToolbar,
    SearchBarFilter,
    DropdownSelectFilter,
} from "@/components/common/Table/Filters";
import { PropsWithTable } from "@/components/common/Table/types";

function OrderTableFilters<TData>({ table }: PropsWithTable<TData>) {
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
                value={table.getColumn("title").getFilterValue() as string}
                onChange={table.getColumn("title").setFilterValue}
                placeholder="Search by movie title..."
            />
        </DataTableToolbar>
    );
}

export default OrderTableFilters;
