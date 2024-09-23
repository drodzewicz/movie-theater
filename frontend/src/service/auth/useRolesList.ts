import { useQuery } from "@tanstack/react-query";

import ServiceClient from "@/service/service-client";
import { RoleListQueryKey, authKeys } from "@/service/query-keys";
import { QueryOptionsProps } from "@/types/types";
import { AxiosError } from "axios";

export function useRolesList<T = unknown[]>(
    options?: QueryOptionsProps<string[], RoleListQueryKey, T>
) {
    return useQuery<string[], AxiosError, T, RoleListQueryKey>({
        ...options,
        queryKey: authKeys.rolesList,
        queryFn: async () => {
            const response = await ServiceClient.instance.fetch({ url: "/api/auth/roles" });
            return response.data;
        },
        staleTime: Infinity,
        placeholderData: [],
    });
}
