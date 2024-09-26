import { ListOptions } from "@/types/types";

// UTILITY
export const TYPE = {
    list: { type: "list" } as const,
    item: { type: "item" } as const,
    details: { type: "details" } as const,
};

export const SCOPE = {
    location: { scope: "location" } as const,
    movie: { scope: "movie" } as const,
    auth: { scope: "auth" } as const,
    filterOptions: { scope: "filter-options" } as const,
    hall: { scope: "hall" } as const,
    user: { scope: "user" } as const,
    screening: { scope: "screening" } as const,
};

// LOCATION
export const locationKeys = {
    all: [SCOPE.location],
    item: (locationId: string) => [{ ...SCOPE.location, ...TYPE.item, locationId }],
    details: (locationId: string) => [{ ...SCOPE.location, ...TYPE.details, locationId }],
    list: (listProps: ListOptions = {}) => [{ ...SCOPE.location, ...TYPE.list, ...listProps }],
};

export type AllLocationsQueryKeys = (typeof locationKeys)["all"];
export type LocationListQueryKey = ReturnType<(typeof locationKeys)["list"]>;
export type GetLocationQueryKey = ReturnType<(typeof locationKeys)["item"]>;

// MOVIE
export const movieKeys = {
    all: [SCOPE.movie],
    item: (movieId: string) => [{ ...SCOPE.movie, ...TYPE.item, movieId }],
    details: (movieId: string) => [{ ...SCOPE.movie, ...TYPE.details, movieId }],
    list: (listProps: ListOptions = {}) => [{ ...SCOPE.movie, ...TYPE.list, ...listProps }],
};

export type AllMoviesQueryKeys = (typeof movieKeys)["all"];
export type MovieListQueryKey = ReturnType<(typeof movieKeys)["list"]>;
export type GetMovieQueryKey = ReturnType<(typeof movieKeys)["item"]>;

// AUTH
export const authKeys = {
    all: [SCOPE.auth],
    currrentUser: [{ ...SCOPE.auth, entity: "current-user" as const }],
    rolesList: [{ ...SCOPE.auth, ...TYPE.list, entity: "role" as const }],
};

export type AllAuthQueryKey = (typeof authKeys)["all"];
export type CurrentUserQueryKey = (typeof authKeys)["currrentUser"];
export type RoleListQueryKey = (typeof authKeys)["rolesList"];

// FILTER OPTIONS
export const filterOptionKeys = {
    all: [SCOPE.filterOptions],
    city: [{ ...SCOPE.filterOptions, entity: "city" }],
    country: [{ ...SCOPE.filterOptions, entity: "country" }],
};

export type AllFilterOptionQueryKey = (typeof filterOptionKeys)["all"];
export type CityFilterOptionQueryKey = (typeof filterOptionKeys)["city"];
export type CountryFilterOptionQueryKey = (typeof filterOptionKeys)["country"];

// HALL
export const hallKeys = {
    all: [SCOPE.hall],
    locationHalls: (locationId: string) => [{ ...SCOPE.hall, ...TYPE.list, locationId }],
    list: (listProps: ListOptions = {}) => [{ ...SCOPE.hall, ...TYPE.list, ...listProps }],
    item: (hallId: string) => [{ ...SCOPE.hall, ...TYPE.item, hallId }],
    details: (hallId: string) => [{ ...SCOPE.hall, ...TYPE.details, hallId }],
};

export type AllHallsQueryKeys = (typeof hallKeys)["all"];
export type HallListQueryKey = ReturnType<(typeof hallKeys)["list"]>;
export type LocationHallListQueryKey = ReturnType<(typeof hallKeys)["locationHalls"]>;
export type GetHallQueryKey = ReturnType<(typeof hallKeys)["item"]>;

// USER
export const usersKeys = {
    all: [SCOPE.user],
    listAppUser: (listProps: ListOptions = {}) => [
        { ...SCOPE.user, ...TYPE.list, entity: "regular", ...listProps },
    ],
    listAppManager: (listProps: ListOptions = {}) => [
        { ...SCOPE.user, ...TYPE.list, entity: "manager", ...listProps },
    ],
};

export type AllUserQueryKey = (typeof usersKeys)["all"];
export type AppUserListQueryKey = ReturnType<(typeof usersKeys)["listAppUser"]>;
export type AppManagerListQueryKey = ReturnType<(typeof usersKeys)["listAppManager"]>;

// Screening
export const screeningKeys = {
    all: [SCOPE.screening],
    item: (screeningId: string) => [{ ...SCOPE.screening, ...TYPE.item, screeningId }],
    details: (screeningId: string) => [{ ...SCOPE.screening, ...TYPE.details, screeningId }],
    list: (listProps: ListOptions = {}) => [{ ...SCOPE.screening, ...TYPE.list, ...listProps }],
};

export type AllScreeningsQueryKeys = (typeof screeningKeys)["all"];
export type ScreeningListQueryKey = ReturnType<(typeof screeningKeys)["list"]>;
export type GetScreeningQueryKey = ReturnType<(typeof screeningKeys)["item"]>;
