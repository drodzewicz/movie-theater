import axios, { AxiosError } from "axios";
import { QueryFunction, UseQueryOptions, useQuery } from "@tanstack/react-query";

import URL from "@/service/locations/url";
import querykeys from "./queryKeys";
import { PaginationState } from "@tanstack/react-table";

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
        const response = await axios.get(URL.list(), {
            withCredentials: true,
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
