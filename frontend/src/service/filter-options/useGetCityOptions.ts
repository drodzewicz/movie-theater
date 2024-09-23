import { useQuery } from "@tanstack/react-query";

import { CityFilterOptionQueryKey, filterOptionKeys } from "@/service/query-keys";
import ServiceClient from "@/service/service-client";
import { FilterOption, QueryOptionsProps } from "@/types/types";
import { AxiosError } from "axios";
import { transformToOptions } from "@/lib/utils";

export function useGetCityOptions(options?: QueryOptionsProps<string[], CityFilterOptionQueryKey>) {
    return useQuery<string[], AxiosError, FilterOption[], CityFilterOptionQueryKey>({
        ...options,
        queryKey: filterOptionKeys.city,
        queryFn: async () => {
            const response = await ServiceClient.instance.fetch({
                url: "/api/filter-options/cities",
            });
            return response.data;
        },
        select: transformToOptions,
        placeholderData: [],
        staleTime: 1 * 60 * 1000,
    });
}
