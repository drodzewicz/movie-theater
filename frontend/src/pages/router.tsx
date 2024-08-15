import App from "@/main/App";
import RouterErrorPage from "@/pages/common/RouterErrorPage";

import { createBrowserRouter } from "react-router-dom";
import LocationManagerPage from "@/pages/admin/LocationManager/LocationManagerPage";
import MovieManager from "@/pages/admin/MovieManager";
import UserManager from "@/pages/admin/UserManager";
import LoginPage from "@/pages/common/Login/LoginPage";
import RegisterPage from "@/pages/user/Register/RegisterPage";
import ConfirmPassword from "./common/Login/ConfirmPassword";

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
                element: <LocationManagerPage />,
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
