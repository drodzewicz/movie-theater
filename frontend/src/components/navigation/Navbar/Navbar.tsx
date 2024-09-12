import LocationSelector from "@/components/common/LocationSelector";
import AuthenticatedUserControlls from "@/components/navigation/Navbar/AuthenticatedUserControlls";
import UnauthenticatedUserControlls from "@/components/navigation/Navbar/UnauthenticatedUserControlls";
import useCurrentUser from "@/service/auth/useCurrentUser";
import { useIsAuthenticated } from "@/hooks/useIsAuthenticated";

export function Navbar() {
    const isAuth = useIsAuthenticated();
    const { data: currentUser } = useCurrentUser();

    return (
        <nav className="flex py-2 px-2 gap-2 bg-slate-100">
            {isAuth && (
                <>
                    <LocationSelector />
                    <div className="flex justify-center w-full"></div>
                    <AuthenticatedUserControlls username={currentUser.username} />
                </>
            )}

            {!isAuth && (
                <>
                    <div className="flex justify-center w-full"></div>
                    <UnauthenticatedUserControlls />
                </>
            )}
        </nav>
    );
}

export default Navbar;
