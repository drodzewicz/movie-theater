export const locationKeys = {
    all: [{ scope: "location" }] as const,
    list: ({ pagination, filters, sorting }: any) =>
        [{ scope: "location", entity: "list" }, pagination, filters, sorting] as const,
    item: (id: string) => [{ scope: "location", entity: "item" }, id] as const,
};

export type AllLocationsQueryKeys = (typeof locationKeys)["all"];
export type LocationListQueryKey = ReturnType<(typeof locationKeys)["list"]>;
export type GetLocationQueryKey = ReturnType<(typeof locationKeys)["item"]>;

export const movieKeys = {
    all: [{ scope: "movie" }] as const,
    list: ({ pagination, filters, sorting }: any) =>
        [{ scope: "movie", entity: "list" }, pagination, filters, sorting] as const,
    item: (id: string) => [{ scope: "movie", entity: "item" }, id] as const,
};

export type AllMoviesQueryKeys = (typeof movieKeys)["all"];
export type MovieListQueryKey = ReturnType<(typeof movieKeys)["list"]>;
export type GetMovieQueryKey = ReturnType<(typeof movieKeys)["item"]>;

export const authKeys = {
    all: [{ scope: "auth" }] as const,
    currrentUser: () => [{ ...authKeys.all[0], entity: "current-user" }] as const,
    rolesList: () => [{ ...authKeys.all[0], entity: "list", type: "role" }] as const,
};

export type AllAuthQueryKey = (typeof authKeys)["all"];
export type CurrentUserQueryKey = ReturnType<(typeof authKeys)["currrentUser"]>;
export type RoleListQueryKey = ReturnType<(typeof authKeys)["rolesList"]>;

export const filterOptionKeys = {
    all: [{ scope: "filter-options" }] as const,
    city: () => [{ ...authKeys.all[0], entity: "city" }] as const,
    country: () => [{ ...authKeys.all[0], entity: "country" }] as const,
};

export type AllFilterOptionQueryKey = (typeof filterOptionKeys)["all"];
export type CityFilterOptionQueryKey = ReturnType<(typeof filterOptionKeys)["city"]>;
export type CountryFilterOptionQueryKey = ReturnType<(typeof filterOptionKeys)["country"]>;

export const hallKeys = {
    all: [{ scope: "hall" }] as const,
    locationHalls: ({ locationId }: any) =>
        [{ scope: "hall", entity: "list" }, locationId] as const,
    list: ({ pagination, filters, sorting }: any) =>
        [{ scope: "hall", entity: "list" }, pagination, filters, sorting] as const,
    item: (id: string) => [{ scope: "hall", entity: "item" }, id] as const,
};

export type AllHallsQueryKeys = (typeof hallKeys)["all"];
export type HallListQueryKey = ReturnType<(typeof hallKeys)["list"]>;
export type LocationHallListQueryKey = ReturnType<(typeof hallKeys)["locationHalls"]>;
export type GetHallQueryKey = ReturnType<(typeof hallKeys)["item"]>;

export const usersKeys = {
    all: [{ scope: "user" }] as const,
    listAppUser: ({ pagination, filters, sorting }: any = {}) =>
        [{ scope: "user", entity: "list", type: "regular" }, pagination, filters, sorting].filter(
            Boolean
        ),
    listAppManager: ({ pagination, filters, sorting }: any = {}) =>
        [{ scope: "user", entity: "list", type: "manager" }, pagination, filters, sorting].filter(
            Boolean
        ),
};

export type AllUserQueryKey = (typeof usersKeys)["all"];
export type AppUserListQueryKey = ReturnType<(typeof usersKeys)["listAppUser"]>;
export type AppManagerListQueryKey = ReturnType<(typeof usersKeys)["listAppManager"]>;
