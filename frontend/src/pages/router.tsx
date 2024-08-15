import App from "@/main/App";
import RouterErrorPage from "@/pages/common/RouterErrorPage";

import { createBrowserRouter, Outlet } from "react-router-dom";
import LocationManagerPage from "@/pages/admin/LocationManager/LocationManagerPage";
import MovieManager from "@/pages/admin/MovieManager";
import UserManager from "@/pages/admin/UserManager";
import LoginPage from "@/pages/common/Login/LoginPage";
import RegisterPage from "@/pages/user/Register/RegisterPage";
import ConfirmPassword from "./common/Login/ConfirmPassword";
import CreateLocationPage from "@/pages/admin/CreateLocation/CreateLocationPage";

const router = createBrowserRouter([
    {
        element: <App />,
        errorElement: <RouterErrorPage />,
        children: [
            {
                path: "/",
                element: <LocationManagerPage />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/confrim-password",
                element: <ConfirmPassword />,
            },
            {
                path: "/register",
                element: <RegisterPage />,
            },
            {
                path: "/locations",
                element: <Outlet />,
                children: [
                    {
                        path: "",
                        element: <LocationManagerPage />,
                    },
                    {
                        path: "/locations/create",
                        element: <CreateLocationPage />,
                    },
                ],
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
