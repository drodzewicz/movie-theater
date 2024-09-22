import { useQuery } from "@tanstack/react-query";

import { PaginationState, ColumnFiltersState, SortingState } from "@tanstack/react-table";
import ServiceClient from "../service-client";
import { usersKeys, AppManagerListQueryKey } from "@/service/query-keys";
import { PaginatedResponse, AppMangerResponse, QueryOptionsProps } from "@/types/types";
import { getFilterParams, getPaginationParams, getSortingParams } from "@/lib/utils";

type AppUserListProps = {
    pagination?: PaginationState;
    columnFilters?: ColumnFiltersState;
    sorting?: SortingState;
};

export function useGetAppManagers(
    props?: AppUserListProps,
    options?: QueryOptionsProps<PaginatedResponse<AppMangerResponse>, AppManagerListQueryKey>
) {
    const pagination = getPaginationParams(props);
    const filters = getFilterParams(props);
    const sorting = getSortingParams(props);

    return useQuery({
        ...options,
        queryFn: async () => {
            const response = await ServiceClient.instance.fetch({
                url: "/api/managers",
                params: {
                    ...pagination,
                    ...filters,
                    ...sorting,
                },
            });
            return response.data;
        },
        queryKey: usersKeys.listAppManager({ pagination, filters, sorting }),
        placeholderData: (prev) => prev || { data: [], itemsCount: 0, pageCount: 0 },
        staleTime: 1 * 60 * 1000,
    });
}
