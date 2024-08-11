import App from "@/main/App";
import RouterErrorPage from "@/pages/common/RouterErrorPage";

import { createBrowserRouter } from "react-router-dom";
import LocationManager from "@/pages/admin/LocationManager";
import MovieManager from "@/pages/admin/MovieManager";
import UserManager from "@/pages/admin/UserManager";
import Login from "@/pages/common/Login";

const router = createBrowserRouter([
    {
        element: <App />,
        errorElement: <RouterErrorPage />,
        children: [
            {
                path: "/",
                element: <LocationManager />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/locations",
                element: <LocationManager />,
            },
            {
                path: "/movies",
                element: <MovieManager />,
            },
            {
                path: "/users",
                element: <UserManager />,
            },
        ],
    },
]);

export default router;
