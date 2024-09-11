import { Outlet } from "react-router-dom";
import Navbar from "@/components/navigation/Navbar";
import Sidebar from "@/components/navigation/Sidebar";
import { useIsAuthenticated } from "@/service/auth/useIsAuthenticated";

const App = () => {
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
