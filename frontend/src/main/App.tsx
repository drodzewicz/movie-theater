import { Outlet } from "react-router-dom";
import Navbar from "@/components/navigation/Navbar";
import Sidebar from "@/components/navigation/Sidebar";

const App = () => {
    return (
        <div>
            <Navbar />
            <div className="flex">
                <Sidebar />
                <Outlet />
            </div>
        </div>
    );
};

export default App;
