export const routes = [
    "/",
    "/login",
    "/register",
    "/locations",
    "/locations/create",
    "/locations/:locationId",
    "/locations/:locationId/create-hall",
    "/movies",
    "/movies/create",
    "/users",
    "/users/managers",
    "/orders",
    "/orders/create",
    "/halls",
    "/halls/:hallId",
    "/screenings",
] as const;

export type AppRoutes = (typeof routes)[number];
