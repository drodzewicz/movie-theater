import { useQuery } from "@tanstack/react-query";

import { PaginationState, ColumnFiltersState, SortingState } from "@tanstack/react-table";
import ServiceClient from "@/service/service-client";
import { movieKeys, MovieListQueryKey } from "@/service/query-keys";
import { PaginatedResponse, QueryOptionsProps, MovieResponse } from "@/types/types";
import { getFilterParams, getPaginationParams, getSortingParams } from "@/lib/utils";

type MovieListProps = {
    pagination?: PaginationState;
    columnFilters?: ColumnFiltersState;
    sorting?: SortingState;
};

export function useMovieList(
    props?: MovieListProps,
    options?: QueryOptionsProps<PaginatedResponse<MovieResponse>, MovieListQueryKey>
) {
    const pagination = getPaginationParams(props);
    const filters = getFilterParams(props);
    const sorting = getSortingParams(props);

    return useQuery({
        ...options,
        queryFn: async () => {
            const response = await ServiceClient.instance.fetch({
                url: "/api/movies",
                params: {
                    ...pagination,
                    ...filters,
                    ...sorting,
                },
            });
            return response.data;
        },
        queryKey: movieKeys.list({ pagination, filters, sorting }),
        placeholderData: (prev) => prev || { data: [], itemsCount: 0, pageCount: 0 },
        staleTime: 1 * 60 * 1000,
    });
}
