import { AxiosError } from "axios";
import { MutationFunction, useMutation } from "@tanstack/react-query";

import ServiceClient from "@/service/service-client";
import { ApiDataValidationError, MutationOptionsProps } from "@/types/types";

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

const useRegister = (
    options?: MutationOptionsProps<
        RegisterResponse,
        RegisterPayload,
        AxiosError<ApiDataValidationError>
    >
) => {
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
