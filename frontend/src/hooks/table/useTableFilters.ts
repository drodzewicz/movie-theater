import { useState } from "react";
import { ColumnFiltersState } from "@tanstack/react-table";

const useTableFilters = () => {
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

    return { columnFilters, onColumnFiltersChange: setColumnFilters };
};

export { useTableFilters };
