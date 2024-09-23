import { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import ServiceClient from "@/service/service-client";
import { MutationOptionsProps } from "@/types/types";
import { hallKeys } from "@/service/query-keys";

type CreateHallPayload = {
    locationId: string;
    name: string;
    room?: string;
    floor?: string;
    rowCount: number;
    seatCountPerRow: number;
};

export function useCreateHall(
    options?: MutationOptionsProps<
        HallResponse,
        CreateHallPayload,
        AxiosError<ApiDataValidationError>
    >
) {
    const queryClient = useQueryClient();

    return useMutation({
        ...options,
        mutationFn: async ({ locationId, ...data }) => {
            const response = await ServiceClient.instance.fetch({
                url: "/api/locations/$id/halls",
                method: "POST",
                variables: { id: locationId },
                data,
            });
            return response.data;
        },
        onSuccess: (_data, _var, _context) => {
            queryClient.invalidateQueries({ queryKey: hallKeys.all });
            options?.onSuccess?.(_data, _var, _context);
        },
    });
}
