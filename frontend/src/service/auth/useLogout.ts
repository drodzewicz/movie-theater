import { AxiosError } from "axios";
import {
    MutationFunction,
    UseMutationOptions,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import querykeys from "./queryKeys";
import ServiceClient from "../service-client";

type OptionsType = Omit<UseMutationOptions<unknown, AxiosError>, "mutationFn">;

const useLogout = (options?: OptionsType) => {
    const queryClient = useQueryClient();

    const mutationFn: MutationFunction = async () => {
        const response = await ServiceClient.instance.fetch({
            url: "/api/auth/logout",
            method: "POST",
        });

        return response.data;
    };

    return useMutation({
        ...options,
        mutationFn,
        onSuccess: (_data, _var, _context) => {
            queryClient.invalidateQueries({ queryKey: querykeys.all });
            options?.onSuccess?.(_data, _var as void, _context);
        },
    });
};

export default useLogout;
