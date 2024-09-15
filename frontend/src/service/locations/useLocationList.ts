import { useQuery } from "@tanstack/react-query";

import { PaginationState } from "@tanstack/react-table";
import ServiceClient from "../service-client";
import { locationKeys, LocationListQueryKey } from "@/service/query-keys";
import { PaginatedResponse, LocationResponse, QueryOptionsProps } from "@/types/types";

type locationListProps = {
    pagination: PaginationState;
};

export function useLocationList(
    props?: locationListProps,
    options?: QueryOptionsProps<PaginatedResponse<LocationResponse>, LocationListQueryKey>
) {
    const { pagination } = props || {};

    return useQuery({
        ...options,
        queryFn: async () => {
            const response = await ServiceClient.instance.fetch({
                url: "/api/locations",
                params: {
                    size: pagination?.pageSize,
                    page: pagination?.pageIndex,
                },
            });
            return response.data;
        },
        queryKey: locationKeys.list({ pagination }),
        placeholderData: (prev) => prev || { data: [], itemsCount: 0, pageCount: 0 },
        staleTime: 1 * 60 * 1000,
    });
}
