import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import ServiceClient from "@/service/service-client";
import { MutationOptionsProps } from "@/types/types";

export function usePublishScreening(
    id: string,
    options?: MutationOptionsProps<unknown, unknown, AxiosError<ApiDataValidationError>>
) {
    return useMutation({
        ...options,
        mutationFn: async () => {
            const response = await ServiceClient.instance.fetch({
                url: "/api/screenings/$id/publish",
                variables: { id },
                method: "post",
            });
            return response.data;
        },
    });
}
