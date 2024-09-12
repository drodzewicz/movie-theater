import axios, { AxiosError } from "axios";
import { MutationFunction, UseMutationOptions, useMutation } from "@tanstack/react-query";

import URL from "@/service/locations/url";

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
        const response = await axios.post(URL.index, data);
        return response.data;
    };

    return useMutation({
        ...options,
        mutationFn,
    });
};

export default useCreateLocation;
