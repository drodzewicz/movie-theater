export const locationKeys = {
    all: [{ scope: "location" }] as const,
    list: ({ pagination }: any) => [{ scope: "location", pagination }] as const,
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
