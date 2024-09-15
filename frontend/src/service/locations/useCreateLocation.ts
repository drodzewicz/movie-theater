import { AxiosError } from "axios";
import { MutationFunction, useMutation } from "@tanstack/react-query";

import ServiceClient from "@/service/service-client";
import { LocationResponse, ApiDataValidationError, MutationOptionsProps } from "@/types/types";

type CreateLocationPayload = {
    identifier: string;
    country: string;
    city: string;
    streetName: string;
    buildingNumber: string;
    zipCode: string;
};

const useCreateLocation = (
    options?: MutationOptionsProps<
        LocationResponse,
        CreateLocationPayload,
        AxiosError<ApiDataValidationError>
    >
) => {
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
