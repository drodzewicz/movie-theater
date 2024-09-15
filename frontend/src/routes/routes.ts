export const routes = [
    "/",
    "/login",
    "/register",
    "/locations",
    "/locations/:locationId",
    "/locations/create",
    "/movies",
    "/movies/create",
    "/users",
    "/users/managers",
    "/orders",
    "/orders/create",
    "/halls",
    "/halls/:hallId",
    "/halls/create",
    "/screenings",
] as const;

export type AppRoutes = (typeof routes)[number];
