import axios, { AxiosError } from "axios";
import { MutationFunction, UseMutationOptions, useMutation } from "@tanstack/react-query";

import authURL from "@/service/auth/url";

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
        const response = await axios.post(authURL.register, data);
        return response.data;
    };

    return useMutation({
        ...options,
        mutationFn,
    });
};

export default useRegister;
