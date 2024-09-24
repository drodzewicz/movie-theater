import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import ServiceClient from "@/service/service-client";
import { MutationOptionsProps } from "@/types/types";

export function useUpdateManagerStatus(
    username: string,
    options?: MutationOptionsProps<unknown, boolean, AxiosError<ApiDataValidationError>>
) {
    return useMutation({
        ...options,
        mutationFn: async (active: boolean) => {
            const response = await ServiceClient.instance.fetch({
                url: "/api/managers/$username/status",
                variables: { username },
                params: { active },
                method: "PATCH",
            });
            return response.data;
        },
    });
}
