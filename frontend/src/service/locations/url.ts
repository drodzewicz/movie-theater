const locationURL = {
    index: "/api/locations" as const,
    list: () => `${locationURL.index}` as const,
    id: (locationId: string) => `${locationURL.index}/${locationId}` as const,
    read: (locationId: string) => locationURL.id(locationId),
};

export default locationURL;
