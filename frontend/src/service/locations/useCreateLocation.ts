import { AxiosError } from "axios";
import { MutationFunction, UseMutationOptions, useMutation } from "@tanstack/react-query";

import ServiceClient from "../service-client";

type CreateLocationPayload = {
    country: string;
    city: string;
    streetName: string;
    buildingNumber: string;
    zipCode: string;
};

type OptionsType = Omit<
    UseMutationOptions<LocationResponse, AxiosError<ApiDataValidationError>, CreateLocationPayload>,
    "mutationFn"
>;

const useCreateLocation = (options?: OptionsType) => {
    const mutationFn: MutationFunction<LocationResponse, CreateLocationPayload> = async (data) => {
        const response = await ServiceClient.instance.fetch({
            url: "/api/locations",
            method: "POST",
            data,
        });
        return response.data;
    };

    return useMutation({
        ...options,
        mutationFn,
    });
};

export default useCreateLocation;
