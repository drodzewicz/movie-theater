import App from "@/main/App";
import RouterErrorPage from "@/pages/common/RouterErrorPage";

import { createBrowserRouter, Outlet } from "react-router-dom";

import LocationListPage from "@/pages/admin/location/LocationList";
import CreateHallPage from "@/pages/admin/hall/CreateHall";
import HallListPage from "@/pages/admin/hall/HallList";
import HallShowPage from "@/pages/admin/hall/HallShow";
import CreateLocationPage from "@/pages/admin/location/CreateLocation";
import LocationShowPage from "@/pages/admin/location/LocationShow";
import ManagerListPage from "@/pages/admin/manager/ManagerList";
import CreateMoviePage from "@/pages/admin/movie/CreateMovie";
import MovieListPage from "@/pages/admin/movie/MovieList";
import OrderListPage from "@/pages/admin/order/OrderList";
import ScreeningListPage from "@/pages/admin/screening/ScreeningList";
import UserListPage from "@/pages/admin/user/UserList";
import LoginPage from "@/pages/common/Login/LoginPage";
import RegisterPage from "@/pages/user/Register/RegisterPage";
import RouteGuard from "@/components/navigation/RouterGuard";

const router = createBrowserRouter([
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
                            {
                                path: "/halls/create",
                                element: <CreateHallPage />,
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
]);

export default router;
