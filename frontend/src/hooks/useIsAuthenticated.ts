import { useCurrentUser } from "@/service/auth/useCurrentUser";

export const LOCAL_STORAGE_KEY = "currentUserData"; // Key to save and retrieve from localStorage

function useIsAuthenticated() {
    const { data: user } = useCurrentUser();

    return !!user?.username;
}

export { useIsAuthenticated };
