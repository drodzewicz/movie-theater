import { useQuery } from "@tanstack/react-query";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import ServiceClient from "@/service/service-client";
import { CurrentUserQueryKey, authKeys } from "@/service/query-keys";
import { QueryOptionsProps } from "@/types/types";

export const LOCAL_STORAGE_KEY = "currentUserData"; // Key to save and retrieve from localStorage

type CurrentUserResponse = {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
};

export function useCurrentUser(
    options?: QueryOptionsProps<CurrentUserResponse, CurrentUserQueryKey>
) {
    const [cachedUser] = useLocalStorage(LOCAL_STORAGE_KEY);

    return useQuery({
        ...options,
        queryKey: authKeys.currrentUser,
        queryFn: async () => {
            const response = await ServiceClient.instance.fetch({ url: "/api/auth/current-user" });
            return response.data;
        },
        staleTime: Infinity,
        placeholderData: cachedUser,
        refetchOnMount: true,
    });
}
