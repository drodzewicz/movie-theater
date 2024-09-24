import { useQuery } from "@tanstack/react-query";

import { PaginationState, ColumnFiltersState, SortingState } from "@tanstack/react-table";
import ServiceClient from "@/service/service-client";
import { screeningKeys, ScreeningListQueryKey } from "@/service/query-keys";
import { QueryOptionsProps } from "@/types/types";
import { getFilterParams, getPaginationParams, getSortingParams } from "@/lib/utils";

type ScreeningListProps = {
    pagination?: PaginationState;
    columnFilters?: ColumnFiltersState;
    sorting?: SortingState;
};

export function useScreeningList<T = PaginatedResponse<unknown>>(
    props?: ScreeningListProps,
    options?: QueryOptionsProps<PaginatedResponse<unknown>, ScreeningListQueryKey, T>
) {
    const pagination = getPaginationParams(props);
    const filters = getFilterParams(props);
    const sorting = getSortingParams(props);

    return useQuery({
        ...options,
        queryFn: async () => {
            const response = await ServiceClient.instance.fetch({
                url: "/api/screenings",
                params: {
                    ...pagination,
                    ...filters,
                    ...sorting,
                },
            });
            return response.data;
        },
        queryKey: screeningKeys.list({ pagination, filters, sorting }),
        placeholderData: (prev) => prev || { data: [], itemsCount: 0, pageCount: 0 },
        staleTime: 1 * 60 * 1000,
    });
}
