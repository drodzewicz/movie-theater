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
