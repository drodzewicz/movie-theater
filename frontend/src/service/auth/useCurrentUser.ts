import axios, { AxiosError } from "axios";
import { QueryFunction, UseQueryOptions, useQuery, useQueryClient } from "react-query";

import authURL from "@/service/auth/url";
import querykeys from "./queryKeys";

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
    const queryClient = useQueryClient();

    const fetchCurrentUser: QueryFunction<CurrentUserResponse, CurrentUserQueryKey> = async () => {
        const response = await axios.get(authURL.currentUser, { withCredentials: true });
        return response.data;
    };

    return useQuery({
        ...options,
        queryKey: querykeys.currrentUser(),
        queryFn: fetchCurrentUser,
        staleTime: Infinity,
        onError: (error) => {
            queryClient.setQueryData(querykeys.currrentUser(), null);
            options?.onError?.(error);
        },
    });
};

export default useCurrentUser;
