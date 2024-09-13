import { AxiosError } from "axios";
import { QueryFunction, UseQueryOptions, useQuery } from "@tanstack/react-query";

import querykeys from "./queryKeys";
import { PaginationState } from "@tanstack/react-table";
import ServiceClient from "../service-client";

type LocationListQueryKey = ReturnType<(typeof querykeys)["list"]>;

type OptionsType = Omit<
    UseQueryOptions<
        PaginatedResponse<LocationResponse>,
        AxiosError,
        PaginatedResponse<LocationResponse>,
        LocationListQueryKey
    >,
    "queryKey" | "queryFn"
>;

type locationListProps = {
    pagination: PaginationState;
};

const useLocationList = (props?: locationListProps, options?: OptionsType) => {
    const { pagination } = props || {};

    const fetchLocationList: QueryFunction<
        PaginatedResponse<LocationResponse>,
        LocationListQueryKey
    > = async () => {
        const response = await ServiceClient.instance.fetch({
            url: "/api/locations",
            params: {
                size: pagination?.pageSize,
                page: pagination?.pageIndex,
            },
        });
        return response.data;
    };

    return useQuery({
        ...options,
        queryKey: querykeys.list({ pagination }),
        placeholderData: (prev) => prev || { data: [], itemsCount: 0, pageCount: 0 },
        queryFn: fetchLocationList,
        staleTime: 1 * 60 * 1000,
    });
};

export default useLocationList;
