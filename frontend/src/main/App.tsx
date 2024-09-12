import { Outlet } from "react-router-dom";
import Navbar from "@/components/navigation/Navbar";
import Sidebar from "@/components/navigation/Sidebar";
import { useIsAuthenticated } from "@/hooks/useIsAuthenticated";
import { useHandleCachedAuthentication } from "@/hooks/useHandleCachedAuthentication";

const App = () => {
    useHandleCachedAuthentication();

    const isAuth = useIsAuthenticated();

    return (
        <div>
            <Navbar />
            <div className="flex">
                {isAuth && <Sidebar />}
                <Outlet />
            </div>
        </div>
    );
};

export default App;
