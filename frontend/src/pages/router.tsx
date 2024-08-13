import App from "@/main/App";
import RouterErrorPage from "@/pages/common/RouterErrorPage";

import { createBrowserRouter } from "react-router-dom";
import LocationManager from "@/pages/admin/LocationManager";
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
                element: <LocationManager />,
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
