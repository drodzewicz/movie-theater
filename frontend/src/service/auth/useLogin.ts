import { useMutation, useQueryClient } from "@tanstack/react-query";

import { authKeys } from "@/service/query-keys";
import ServiceClient from "@/service/service-client";
import { MutationOptionsProps } from "@/types/types";

type LoginPayload = {
    username: string;
    password: string;
};

export function useLogin(options?: MutationOptionsProps<unknown, LoginPayload>) {
    const queryClient = useQueryClient();

    return useMutation({
        ...options,
        mutationFn: async (data) => {
            const response = await ServiceClient.instance.fetch({
                method: "POST",
                url: "/api/auth/login",
                data,
            });
            return response.data;
        },
        onSuccess: (_data, _var, _context) => {
            queryClient.invalidateQueries({ queryKey: authKeys.all });
            options?.onSuccess?.(_data, _var, _context);
        },
    });
}
