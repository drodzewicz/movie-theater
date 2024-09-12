type NavItem = {
    title: string;
    href: string;
    icon: React.ElementType;
    color?: string;
    isChidren?: boolean;
    children?: NavItem[];
};

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
    indentifier: string;
    active: boolean;
    country: string;
    city: string;
    streetName: string;
    buildingNumber: string;
    zipCode: string;
};
