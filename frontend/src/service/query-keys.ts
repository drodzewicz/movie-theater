export const locationKeys = {
    all: [{ scope: "location" }] as const,
    list: ({ pagination, filters, sorting }: any) =>
        [{ scope: "location", entity: "list" }, pagination, filters, sorting] as const,
    item: (id: string) => [{ scope: "location", entity: "item" }, id] as const,
};

export type AllLocationsQueryKeys = (typeof locationKeys)["all"];
export type LocationListQueryKey = ReturnType<(typeof locationKeys)["list"]>;
export type GetLocationQueryKey = ReturnType<(typeof locationKeys)["item"]>;

export const authKeys = {
    all: [{ scope: "auth" }] as const,
    currrentUser: () => [{ ...authKeys.all[0], entity: "current-user" }] as const,
};

export type AllAuthQueryKey = (typeof authKeys)["all"];
export type CurrentUserQueryKey = ReturnType<(typeof authKeys)["currrentUser"]>;

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
