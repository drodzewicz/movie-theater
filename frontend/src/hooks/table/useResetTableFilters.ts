import { useState, useEffect } from "react";

export function useOnResetTableFilters(callback: () => void) {
    const [areFiltersReset, setAreFiltersReset] = useState<boolean>(false);

    useEffect(() => {
        console.log(areFiltersReset);
        if (areFiltersReset) {
            callback();
            setAreFiltersReset(false);
        }
    }, [areFiltersReset, callback]);
}
