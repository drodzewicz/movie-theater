import { useState, useCallback } from "react";
import { ColumnFiltersState } from "@tanstack/react-table";

export function useTableFilters() {
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [manualColumnFilters, setManualColumnFilters] = useState<ColumnFiltersState>([]);

    const syncManualFilterValues = useCallback(() => {
        setManualColumnFilters(columnFilters);
    }, [columnFilters]);

    return {
        columnFilters,
        onColumnFiltersChange: setColumnFilters,
        manualColumnFilters,
        syncManualFilterValues,
    };
}
