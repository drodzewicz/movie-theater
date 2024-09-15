import { useMutation, useQueryClient } from "@tanstack/react-query";

import ServiceClient from "@/service/service-client";
import { authKeys } from "@/service/query-keys";
import { MutationOptionsProps } from "@/types/types";

export function useLogout(options?: MutationOptionsProps) {
    const queryClient = useQueryClient();

    return useMutation({
        ...options,
        mutationFn: async () => {
            const response = await ServiceClient.instance.fetch({
                url: "/api/auth/logout",
                method: "POST",
            });

            return response.data;
        },
        onSuccess: (_data, _var, _context) => {
            queryClient.invalidateQueries({ queryKey: authKeys.all });
            options?.onSuccess?.(_data, _var as void, _context);
        },
    });
}
