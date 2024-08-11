import App from "@/main/App";
import RouterErrorPage from "@/admin-pages/RouterErrorPage";

import { createBrowserRouter } from "react-router-dom";
import LocationManager from "@/admin-pages/LocationManager";
import MovieManager from "@/admin-pages/MovieManager";
import UserManager from "@/admin-pages/UserManager";

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
