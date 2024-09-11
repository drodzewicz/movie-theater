import useCurrentUser from "@/service/auth/useCurrentUser";

function useIsAuthenticated() {
    const { data: user } = useCurrentUser();

    return !!user?.username;
}

export { useIsAuthenticated };
