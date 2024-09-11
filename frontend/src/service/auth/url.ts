const authURL = {
    index: "/api/auth" as const,
    logout: "/api/auth/logout" as const,
    login: "/api/auth/login" as const,
    register: "/api/auth/register" as const,
    currentUser: "/api/auth/current-user" as const,
};

export default authURL;
