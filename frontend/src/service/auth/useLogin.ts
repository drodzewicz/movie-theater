import { MutationFunction, useMutation, useQueryClient } from "@tanstack/react-query";

import { authKeys } from "@/service/query-keys";
import ServiceClient from "@/service/service-client";
import { MutationOptionsProps } from "@/types/types";

type LoginPayload = {
    username: string;
    password: string;
};

const useLogin = (options?: MutationOptionsProps<unknown, LoginPayload>) => {
    const queryClient = useQueryClient();

    const mutationFn: MutationFunction<unknown, LoginPayload> = async (data) => {
        const response = await ServiceClient.instance.fetch({
            method: "POST",
            url: "/api/auth/login",
            data,
        });
        return response.data;
    };

    return useMutation({
        ...options,
        mutationFn,
        onSuccess: (_data, _var, _context) => {
            queryClient.invalidateQueries({ queryKey: authKeys.all });
            options?.onSuccess?.(_data, _var, _context);
        },
    });
};

export default useLogin;
