import { AxiosError } from "axios";
import { MutationFunction, UseMutationOptions, useMutation } from "@tanstack/react-query";

import ServiceClient from "@/service/service-client";

type OptionsType = Omit<
    UseMutationOptions<LocationResponse, AxiosError<ApiDataValidationError>>,
    "mutationFn"
>;

const useUpdateLocationStatus = (id: string, options?: OptionsType) => {
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
