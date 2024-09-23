import { useQuery } from "@tanstack/react-query";

import ServiceClient from "../service-client";
import { hallKeys, LocationHallListQueryKey } from "@/service/query-keys";
import { QueryOptionsProps } from "@/types/types";

type LocationHallsProps = {
    locationId: string;
};

export function useGetLocationHalls(
    { locationId }: LocationHallsProps,
    options?: QueryOptionsProps<HallResponse[], LocationHallListQueryKey>
) {
    return useQuery({
        ...options,
        queryFn: async ({ queryKey: [, id] }) => {
            const response = await ServiceClient.instance.fetch({
                url: "/api/locations/$id/halls",
                variables: { id },
            });
            return response.data;
        },
        queryKey: hallKeys.locationHalls({ locationId }),
        placeholderData: [],
        staleTime: 1 * 60 * 1000,
    });
}
