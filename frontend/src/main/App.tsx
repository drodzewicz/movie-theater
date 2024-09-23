import { Outlet } from "react-router-dom";
import Navbar from "@/components/navigation/navbar";
import Sidebar from "@/components/navigation/sidebar";
import { useIsAuthenticated } from "@/hooks/useIsAuthenticated";
import { useHandleCachedAuthentication } from "@/hooks/useHandleCachedAuthentication";

function App() {
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
}

export default App;
