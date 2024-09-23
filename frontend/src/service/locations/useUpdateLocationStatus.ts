import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import ServiceClient from "@/service/service-client";
import { MutationOptionsProps } from "@/types/types";

export function useUpdateLocationStatus(
    id: string,
    options?: MutationOptionsProps<LocationResponse, boolean, AxiosError<ApiDataValidationError>>
) {
    return useMutation({
        ...options,
        mutationFn: async (active: boolean) => {
            const response = await ServiceClient.instance.fetch({
                url: "/api/locations/$id/status",
                variables: { id },
                params: { active },
                method: "PATCH",
            });
            return response.data;
        },
    });
}
