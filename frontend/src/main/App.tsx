import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar/Sidebar";

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
