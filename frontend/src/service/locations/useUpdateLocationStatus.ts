import { AxiosError } from "axios";
import { MutationFunction, useMutation } from "@tanstack/react-query";

import ServiceClient from "@/service/service-client";
import { ApiDataValidationError, LocationResponse, MutationOptionsProps } from "@/types/types";

const useUpdateLocationStatus = (
    id: string,
    options?: MutationOptionsProps<LocationResponse, boolean, AxiosError<ApiDataValidationError>>
) => {
    const mutationFn: MutationFunction<LocationResponse> = async (active: boolean) => {
        const response = await ServiceClient.instance.fetch({
            url: "/api/locations/$id/status",
            variables: { id },
            params: { active },
            method: "PATCH",
        });
        return response.data;
    };

    return useMutation({
        ...options,
        mutationFn,
    });
};

export default useUpdateLocationStatus;
