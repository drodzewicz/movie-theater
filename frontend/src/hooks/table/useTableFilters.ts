import { useState, useCallback } from "react";
import { ColumnFiltersState } from "@tanstack/react-table";

export function useTableFilters() {
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [manualColumnFilters, setManualColumnFilters] = useState<ColumnFiltersState>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const syncManualFilterValues = useCallback(() => {
        const filters = [...columnFilters];
        if (searchTerm) {
            filters.push({ id: "searchTerm", value: searchTerm });
        }
        setManualColumnFilters(filters);
    }, [columnFilters, searchTerm]);

    return {
        globalFilter: searchTerm,
        columnFilters,
        onColumnFiltersChange: setColumnFilters,
        onGlobalFilterChange: setSearchTerm,
        manualColumnFilters,
        syncManualFilterValues,
    };
}
