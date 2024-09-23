import { useQuery } from "@tanstack/react-query";

import ServiceClient from "../service-client";
import { hallKeys, HallListQueryKey } from "@/service/query-keys";
import { QueryOptionsProps } from "@/types/types";
import { getPaginationParams, getFilterParams, getSortingParams } from "@/lib/utils";
import { PaginationState, ColumnFiltersState, SortingState } from "@tanstack/react-table";

type HallListProps = {
    pagination?: PaginationState;
    columnFilters?: ColumnFiltersState;
    sorting?: SortingState;
};

export function useGetHallList<T = PaginatedResponse<HallResponse>>(
    props?: HallListProps,
    options?: QueryOptionsProps<PaginatedResponse<HallResponse>, HallListQueryKey, T>
) {
    const pagination = getPaginationParams(props);
    const filters = getFilterParams(props);
    const sorting = getSortingParams(props);

    return useQuery({
        ...options,
        queryFn: async () => {
            const response = await ServiceClient.instance.fetch({
                url: "/api/halls",
                params: {
                    ...pagination,
                    ...filters,
                    ...sorting,
                },
            });
            return response.data;
        },
        queryKey: hallKeys.list({ pagination, filters, sorting }),
        placeholderData: (prev) => prev || { data: [], itemsCount: 0, pageCount: 0 },
        staleTime: 1 * 60 * 1000,
    });
}
