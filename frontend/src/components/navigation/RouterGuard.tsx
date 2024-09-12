import { useIsAuthenticated } from "@/hooks/useIsAuthenticated";

import { Navigate, Outlet, useLocation } from "react-router-dom";

export type RouteGuardProps = {
    redirectTo: string;
    access?: "ALL" | "AUTH" | "ANONYMOUS";
};

function RouteGuard({ redirectTo, access = "ALL" }: RouteGuardProps) {
    const location = useLocation();

    const isAuth = useIsAuthenticated();

    const globalAccess = access === "ALL";
    const autheticatedOnly = access === "AUTH" && isAuth;
    const anonymouseOnly = access === "ANONYMOUS" && !isAuth;

    if (globalAccess || autheticatedOnly || anonymouseOnly) {
        return <Outlet />;
    }

    return <Navigate to={redirectTo} state={{ from: location }} />;
}

export default RouteGuard;
