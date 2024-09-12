import axios, { AxiosError } from "axios";
import { QueryFunction, UseQueryOptions, useQuery } from "@tanstack/react-query";

import authURL from "@/service/auth/url";
import querykeys from "./queryKeys";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const LOCAL_STORAGE_KEY = "currentUserData"; // Key to save and retrieve from localStorage

type CurrentUserQueryKey = ReturnType<(typeof querykeys)["currrentUser"]>;

type CurrentUserResponse = {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
};

type OptionsType = Omit<
    UseQueryOptions<CurrentUserResponse, AxiosError, CurrentUserResponse, CurrentUserQueryKey>,
    "queryKey" | "queryFn"
>;
const useCurrentUser = (options?: OptionsType) => {
    const [cachedUser] = useLocalStorage(LOCAL_STORAGE_KEY);

    const fetchCurrentUser: QueryFunction<CurrentUserResponse, CurrentUserQueryKey> = async () => {
        const response = await axios.get(authURL.currentUser, { withCredentials: true });
        return response.data;
    };

    return useQuery({
        ...options,
        queryKey: querykeys.currrentUser(),
        queryFn: fetchCurrentUser,
        staleTime: Infinity,
        placeholderData: () => cachedUser,
        refetchOnMount: true,
    });
};

export default useCurrentUser;
