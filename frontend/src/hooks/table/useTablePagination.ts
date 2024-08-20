import {  useState } from "react";
import { PaginationState } from "@tanstack/react-table";

type TablePaginationProps = {
    page?: number;
    size?: number;
};

const useTablePagination = (props?: TablePaginationProps) => {
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: props?.page ?? 0,
        pageSize: props?.size ?? 10,
    });

    return { pagination, onPaginationChange: setPagination };
};

export { useTablePagination };
