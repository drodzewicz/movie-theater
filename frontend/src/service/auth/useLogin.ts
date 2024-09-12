import axios, { AxiosError } from "axios";
import {
    MutationFunction,
    UseMutationOptions,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";
import querykeys from "./queryKeys";

import authURL from "@/service/auth/url";

type LoginPayload = {
    username: string;
    password: string;
};

type OptionsType = Omit<UseMutationOptions<unknown, AxiosError, LoginPayload>, "mutationFn">;

const useLogin = (options?: OptionsType) => {
    const queryClient = useQueryClient();

    const mutationFn: MutationFunction<unknown, LoginPayload> = async (data) => {
        const response = await axios.post(authURL.login, data, { withCredentials: true });
        return response.data;
    };

    return useMutation({
        ...options,
        mutationFn,
        onSuccess: (_data, _var, _context) => {
            queryClient.invalidateQueries({ queryKey: querykeys.all });
            options?.onSuccess?.(_data, _var, _context);
        },
    });
};

export default useLogin;
