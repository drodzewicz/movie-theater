import { useState, useEffect, useCallback } from "react";

export function useOnResetTableFilters(callback: () => void) {
    const [areFiltersReset, setAreFiltersReset] = useState<boolean>(false);

    useEffect(() => {
        if (areFiltersReset) {
            callback();
            setAreFiltersReset(false);
        }
    }, [areFiltersReset, callback]);

    const resetFilter = useCallback(() => setAreFiltersReset(true), [])

    return { reset: resetFilter }
}
