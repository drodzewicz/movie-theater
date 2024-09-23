import { useQuery } from "@tanstack/react-query";

import { CountryFilterOptionQueryKey, filterOptionKeys } from "@/service/query-keys";
import ServiceClient from "@/service/service-client";
import { FilterOption, QueryOptionsProps } from "@/types/types";
import { AxiosError } from "axios";
import { transformToOptions } from "@/lib/utils";

export function useGetCountryOptions(
    options?: QueryOptionsProps<string[], CountryFilterOptionQueryKey>
) {
    return useQuery<string[], AxiosError, FilterOption[], CountryFilterOptionQueryKey>({
        ...options,
        queryKey: filterOptionKeys.country,
        queryFn: async () => {
            const response = await ServiceClient.instance.fetch({
                url: "/api/filter-options/countries",
            });
            return response.data;
        },
        select: transformToOptions,
        placeholderData: [],
        staleTime: 1 * 60 * 1000,
    });
}
