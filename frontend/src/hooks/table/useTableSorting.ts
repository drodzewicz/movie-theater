import { useState } from "react";
import { SortingState } from "@tanstack/react-table";

const useTableSorting = () => {
    const [sorting, setSorting] = useState<SortingState>([]);
    return { sorting, onSortingChange: setSorting };
};

export { useTableSorting };
