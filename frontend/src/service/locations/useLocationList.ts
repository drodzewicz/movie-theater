import { useQuery } from "@tanstack/react-query";

import { PaginationState, ColumnFiltersState, SortingState } from "@tanstack/react-table";
import ServiceClient from "../service-client";
import { locationKeys, LocationListQueryKey } from "@/service/query-keys";
import { PaginatedResponse, LocationResponse, QueryOptionsProps } from "@/types/types";
import { getFilterParams, getPaginationParams, getSortingParams } from "@/lib/utils";

type LocationListProps = {
    pagination?: PaginationState;
    columnFilters?: ColumnFiltersState;
    sorting?: SortingState;
};

export function useLocationList<T = PaginatedResponse<LocationResponse>>(
    props?: LocationListProps,
    options?: QueryOptionsProps<PaginatedResponse<LocationResponse>, LocationListQueryKey, T>
) {
    const pagination = getPaginationParams(props);
    const filters = getFilterParams(props);
    const sorting = getSortingParams(props);

    return useQuery({
        ...options,
        queryFn: async () => {
            const response = await ServiceClient.instance.fetch({
                url: "/api/locations",
                params: {
                    ...pagination,
                    ...filters,
                    ...sorting,
                },
            });
            return response.data;
        },
        queryKey: locationKeys.list({ pagination, filters, sorting }),
        placeholderData: (prev) => prev || { data: [], itemsCount: 0, pageCount: 0 },
        staleTime: 1 * 60 * 1000,
    });
}
