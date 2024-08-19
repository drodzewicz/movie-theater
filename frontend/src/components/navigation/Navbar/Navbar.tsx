import LocationSelector from "@/components/common/LocationSelector";
import AuthenticatedUserControlls from "./AuthenticatedUserControlls";
import UnauthenticatedUserControlls from "./UnauthenticatedUserControlls";

export function Navbar() {
    return (
        <nav className="flex py-2 px-2 gap-2 bg-slate-100">
            <LocationSelector />
            <div className="flex justify-center w-full"></div>
            <AuthenticatedUserControlls username="DelltaMan" />
            <UnauthenticatedUserControlls />
        </nav>
    );
}

export default Navbar;
