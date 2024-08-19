import App from "@/main/App";
import RouterErrorPage from "@/pages/common/RouterErrorPage";

import { createBrowserRouter, Outlet } from "react-router-dom";
import LocationManagerPage from "@/pages/admin/LocationManager/LocationManagerPage";
import LoginPage from "@/pages/common/Login/LoginPage";
import RegisterPage from "@/pages/user/Register/RegisterPage";
import ConfirmPassword from "./common/Login/ConfirmPassword";
import CreateLocationPage from "@/pages/admin/CreateLocation/CreateLocationPage";
import MovieManagerPage from "./admin/MovieManager/MovieManagerPage";
import UserManagerPage from "./admin/UserManager/UserManagerPage";
import ManagerManagerPage from "./admin/ManagerManager/ManagerManagerPage";
import OrderManagerPage from "./admin/OrderManager/OrderManagerPage";
import LocationShowPage from "./admin/LocationShow/LocationShowPage";
import HallManagerPage from "./admin/HallManager/HallManagerPage";
import ScreeningManagerPage from "./admin/ScreeningManager/ScreeningManagerPage";
import CreateHallPage from "./admin/CreateHall/CreateHallPage";
import CreateMoviePage from "./admin/CreateMovie/CreateMoviePage";
import HallShowPage from "./admin/HallShow/HallShowPage";

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
                        path: "/locations/:locationId",
                        element: <LocationShowPage />,
                    },
                    {
                        path: "/locations/create",
                        element: <CreateLocationPage />,
                    },
                ],
            },
            {
                path: "/movies",
                element: <Outlet />,
                children: [
                    {
                        path: "",
                        element: <MovieManagerPage />,
                    },
                    {
                        path: "/movies/create",
                        element: <CreateMoviePage />,
                    },
                ],
            },
            {
                path: "/users",
                element: <Outlet />,
                children: [
                    {
                        path: "",
                        element: <UserManagerPage />,
                    },
                    {
                        path: "/users/managers",
                        element: <ManagerManagerPage />,
                    },
                ],
            },

            {
                path: "/orders",
                element: <Outlet />,
                children: [
                    {
                        path: "",
                        element: <OrderManagerPage />,
                    },
                    {
                        path: "/orders/create",
                        element: <UserManagerPage />,
                    },
                ],
            },
            {
                path: "/halls",
                element: <Outlet />,
                children: [
                    {
                        path: "",
                        element: <HallManagerPage />,
                    },
                    {
                        path: "/halls/:hallId",
                        element: <HallShowPage />,
                    },
                    {
                        path: "/halls/create",
                        element: <CreateHallPage />,
                    },
                ],
            },
            {
                path: "/screenings",
                element: <ScreeningManagerPage />,
            },
        ],
    },
]);

export default router;
