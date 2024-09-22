import { Table } from "@tanstack/react-table";
import { useState, useEffect, useCallback } from "react";

type OnResetTableProps<TData> = {
    table: Table<TData>;
    callback?: () => void;
};

export function useOnResetTableFilters<T>({ table, callback }: OnResetTableProps<T>) {
    const [areFiltersReset, setAreFiltersReset] = useState<boolean>(false);

    useEffect(() => {
        if (areFiltersReset) {
            callback();
            setAreFiltersReset(false);
        }
    }, [areFiltersReset, callback]);

    const resetFilters = useCallback(() => {
        table.resetColumnFilters();
        table.resetGlobalFilter();
        setAreFiltersReset(true);
    }, [table]);

    return { resetFilters };
}
