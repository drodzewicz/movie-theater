import { QueryFunction, useQuery } from "@tanstack/react-query";

import { GetLocationQueryKey, locationKeys } from "@/service/query-keys";
import ServiceClient from "@/service/service-client";
import { LocationResponse, QueryOptionsProps } from "@/types/types";

const useGetLocation = (
    locationId: string,
    options?: QueryOptionsProps<LocationResponse, GetLocationQueryKey>
) => {
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
