import { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import ServiceClient from "@/service/service-client";
import { MutationOptionsProps } from "@/types/types";
import { locationKeys } from "@/service/query-keys";

type CreateLocationPayload = {
    identifier: string;
    country: string;
    city: string;
    streetName: string;
    buildingNumber: string;
    zipCode: string;
};

export function useCreateLocation(
    options?: MutationOptionsProps<
        LocationResponse,
        CreateLocationPayload,
        AxiosError<ApiDataValidationError>
    >
) {
    const queryClient = useQueryClient();

    return useMutation({
        ...options,
        mutationFn: async (data) => {
            const response = await ServiceClient.instance.fetch({
                url: "/api/locations",
                method: "POST",
                data,
            });
            return response.data;
        },
        onSuccess: (_data, _var, _context) => {
            queryClient.invalidateQueries({ queryKey: locationKeys.all });
            options?.onSuccess?.(_data, _var, _context);
        },
    });
}
