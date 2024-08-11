import axios, { AxiosError } from "axios";
import { MutationFunction, UseMutationOptions, useMutation } from "react-query";

import authURL from "@/service/auth/url";

type LoginPayload = {
    username: string;
    password: string;
};

type LoginResponse = {
    user: any;
    accessToken: string;
};

type OptionsType = Omit<UseMutationOptions<LoginResponse, AxiosError, LoginPayload>, "mutationFn">;

const useLogin = (options: OptionsType) => {
    const mutationFn: MutationFunction<LoginResponse, LoginPayload> = async (data) => {
        const response = await axios.post(authURL.login, data, { withCredentials: true });
        return response.data;
    };

    return useMutation({
        ...options,
        mutationFn,
    });
};

export default useLogin;
