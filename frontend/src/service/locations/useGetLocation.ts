import { AxiosError } from "axios";
import { QueryFunction, UseQueryOptions, useQuery } from "@tanstack/react-query";

import { GetLocationQueryKey, locationKeys } from "@/service/query-keys";
import ServiceClient from "@/service/service-client";

type OptionsType = Omit<
    UseQueryOptions<LocationResponse, AxiosError, LocationResponse, GetLocationQueryKey>,
    "queryKey" | "queryFn"
>;

const useGetLocation = (locationId: string, options?: OptionsType) => {
    const fetchLocationList: QueryFunction<LocationResponse, GetLocationQueryKey> = async ({
        queryKey: [, id],
    }) => {
        const response = await ServiceClient.instance.fetch({
            url: "/api/locations/$id",
            variables: { id },
        });
        return response.data;
    };

    return useQuery({
        ...options,
        queryKey: locationKeys.item(locationId),
        queryFn: fetchLocationList,
        staleTime: 1 * 60 * 1000,
    });
};

export default useGetLocation;
