import axios, { AxiosError } from "axios";
import { MutationFunction, UseMutationOptions, useMutation, useQueryClient } from "react-query";

import authURL from "@/service/auth/url";

type OptionsType = Omit<UseMutationOptions<unknown, AxiosError>, "mutationFn">;

const useLogout = (options: OptionsType) => {
    const queryClient = useQueryClient();

    const mutationFn: MutationFunction = async () => {
        const response = await axios.post(authURL.logout, {}, { withCredentials: true });
        return response.data;
    };

    return useMutation({
        ...options,
        mutationFn,
        onSuccess: (_data, _var, _context) => {
            queryClient.removeQueries();
            options?.onSuccess?.(_data, _var as void, _context);
        },
    });
};

export default useLogout;
