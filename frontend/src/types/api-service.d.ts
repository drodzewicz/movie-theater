type ApiDataValidationError = {
    errors: unknown[];
    message: string;
    statusCode: number;
    timeStamp: string;
};

type PaginatedResponse<T> = {
    data: T[];
    itemsCount: number;
    pageCount: number;
};

type LocationResponse = {
    id: string;
    identifier: string;
    active: boolean;
    country: string;
    city: string;
    streetName: string;
    buildingNumber: string;
    zipCode: string;
};

type HallResponse = {
    id: string;
    name: string;
    room?: string;
    floor?: string;
    location: {
        id: string;
        identifier: string;
    };
};

type MovieResponse = {
    id: string;
    title: string;
    description: string;
    rating: number;
    posterUrl: string;
    trailerUrl: string;
};

type AppUserResponse = {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
};

type AppMangerResponse = {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    appUserRole: string;
};
