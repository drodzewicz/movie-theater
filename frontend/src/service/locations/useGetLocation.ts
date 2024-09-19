import { useQuery } from "@tanstack/react-query";

import { GetLocationQueryKey, locationKeys } from "@/service/query-keys";
import ServiceClient from "@/service/service-client";
import { LocationResponse, QueryOptionsProps } from "@/types/types";
import { AxiosError } from "axios";

export function useGetLocation(
    locationId: string,
    options?: QueryOptionsProps<LocationResponse, GetLocationQueryKey>
) {
    return useQuery<LocationResponse, AxiosError, LocationResponse, GetLocationQueryKey>({
        ...options,
        queryKey: locationKeys.item(locationId),
        queryFn: async ({ queryKey: [, id] }) => {
            const response = await ServiceClient.instance.fetch({
                url: "/api/locations/$id",
                variables: { id },
            });
            return response.data;
        },
        staleTime: 1 * 60 * 1000,
    });
}
