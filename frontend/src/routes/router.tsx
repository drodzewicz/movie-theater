import App from "@/main/App";
import RouterErrorPage from "@/pages/common/RouterErrorPage";

import { createBrowserRouter, Outlet } from "react-router-dom";

import LocationListPage from "@/pages/admin/location/location-list";
import CreateHallPage from "@/pages/admin/hall/hall-create";
import HallListPage from "@/pages/admin/hall/hall-list";
import HallShowPage from "@/pages/admin/hall/hall-show";
import CreateLocationPage from "@/pages/admin/location/location-create";
import LocationShowPage from "@/pages/admin/location/location-show";
import ManagerListPage from "@/pages/admin/manager/manager-list";
import CreateMoviePage from "@/pages/admin/movie/movie-create";
import MovieListPage from "@/pages/admin/movie/movie-list";
import OrderListPage from "@/pages/admin/order/order-list";
import ScreeningListPage from "@/pages/admin/screening/screening-list";
import UserListPage from "@/pages/admin/user/user-list";
import LoginPage from "@/pages/common/login/LoginPage";
import RegisterPage from "@/pages/user/register/RegisterPage";
import RouteGuard from "@/components/navigation/RouterGuard";
import { AppRoutes } from "@/routes/routes";

export type RoutesObject = {
    element?: React.ReactNode | null;
    errorElement?: React.ReactNode;
    path?: AppRoutes | "";
    children?: RoutesObject[];
};

const routesObject: RoutesObject[] = [
    {
        element: <App />,
        errorElement: <RouterErrorPage />,
        children: [
            {
                element: <RouteGuard access="ANONYMOUS" redirectTo="/" />,
                children: [
                    {
                        path: "/login",
                        element: <LoginPage />,
                    },
                    {
                        path: "/register",
                        element: <RegisterPage />,
                    },
                ],
            },
            {
                element: <RouteGuard access="AUTH" redirectTo="/login" />,
                children: [
                    {
                        path: "/",
                        element: <LocationListPage />,
                    },
                    {
                        path: "/locations",
                        element: <Outlet />,
                        children: [
                            {
                                path: "",
                                element: <LocationListPage />,
                            },
                            {
                                path: "/locations/create",
                                element: <CreateLocationPage />,
                            },
                            {
                                path: "/locations/:locationId",
                                element: <LocationShowPage />,
                            },
                            {
                                path: "/locations/:locationId/create-hall",
                                element: <CreateHallPage />,
                            },
                        ],
                    },
                    {
                        path: "/movies",
                        element: <Outlet />,
                        children: [
                            {
                                path: "",
                                element: <MovieListPage />,
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
                                element: <UserListPage />,
                            },
                            {
                                path: "/users/managers",
                                element: <ManagerListPage />,
                            },
                        ],
                    },

                    {
                        path: "/orders",
                        element: <Outlet />,
                        children: [
                            {
                                path: "",
                                element: <OrderListPage />,
                            },
                            {
                                path: "/orders/create",
                                element: <UserListPage />,
                            },
                        ],
                    },
                    {
                        path: "/halls",
                        element: <Outlet />,
                        children: [
                            {
                                path: "",
                                element: <HallListPage />,
                            },
                            {
                                path: "/halls/:hallId",
                                element: <HallShowPage />,
                            },
                        ],
                    },
                    {
                        path: "/screenings",
                        element: <ScreeningListPage />,
                    },
                ],
            },
        ],
    },
];

const router = createBrowserRouter(routesObject);

export default router;
