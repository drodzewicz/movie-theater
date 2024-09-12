import useCurrentUser from "@/service/auth/useCurrentUser";
import { useQueryClient } from "@tanstack/react-query";
import querykeys from "@/service/auth/queryKeys";
import { useEffectAfterMount } from "@/hooks/useEffectAfterMount";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const LOCAL_STORAGE_KEY = "currentUserData"; // Key to save and retrieve from localStorage

function useHandleCachedAuthentication() {
    const queryClient = useQueryClient();
    const [, setCachedUser, clearCachedUser] = useLocalStorage(LOCAL_STORAGE_KEY);

    const { data: user, isError, isSuccess } = useCurrentUser();

    useEffectAfterMount(() => {
        if (user) {
            setCachedUser(user);
        }
    }, [isSuccess, user]);

    useEffectAfterMount(() => {
        clearCachedUser();
        queryClient.setQueryData(querykeys.currrentUser(), null);
    }, [isError, queryClient]);
}

export { useHandleCachedAuthentication };
