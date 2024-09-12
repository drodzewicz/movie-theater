const locationQueryKeys = {
    all: [{ scope: "location" }] as const,
    list: ({ pagination }: any) => [{ scope: "location", pagination }] as const,
    item: () => [{ scope: "location", entity: "item" }] as const,
};

export default locationQueryKeys;
