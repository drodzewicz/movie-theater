import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import ServiceClient from "@/service/service-client";
import { MutationOptionsProps } from "@/types/types";

export function useUpdateHallStatus(
    id: string,
    options?: MutationOptionsProps<unknown, boolean, AxiosError<ApiDataValidationError>>
) {
    return useMutation({
        ...options,
        mutationFn: async (active: boolean) => {
            const response = await ServiceClient.instance.fetch({
                url: "/api/halls/$id/status",
                variables: { id },
                params: { active },
                method: "PATCH",
            });
            return response.data;
        },
    });
}
