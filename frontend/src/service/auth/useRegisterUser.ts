import { AxiosError } from "axios";
import { MutationFunction, UseMutationOptions, useMutation } from "@tanstack/react-query";

import ServiceClient from "@/service/service-client";

type RegisterPayload = {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
};

type RegisterResponse = {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
};

type OptionsType = Omit<
    UseMutationOptions<RegisterResponse, AxiosError<ApiDataValidationError>, RegisterPayload>,
    "mutationFn"
>;

const useRegister = (options?: OptionsType) => {
    const mutationFn: MutationFunction<RegisterResponse, RegisterPayload> = async (data) => {
        const response = await ServiceClient.instance.fetch({
            url: "/api/auth/register",
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

export default useRegister;
