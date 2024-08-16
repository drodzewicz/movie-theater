import LocationChooser from "../LocationChooser/LocationChooser";
import AuthenticatedUserControlls from "./AuthenticatedUserControlls";
import UnauthenticatedUserControlls from "./UnauthenticatedUserControlls";

export function Navbar() {
    return (
        <nav className="flex py-2 px-2 gap-2 bg-slate-100">
            <LocationChooser />
            <div className="flex justify-center w-full"></div>
            <AuthenticatedUserControlls username="DelltaMan" />
            <UnauthenticatedUserControlls />
        </nav>
    );
}

export default Navbar;
