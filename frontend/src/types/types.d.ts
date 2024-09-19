import { QueryKey, UseMutationOptions, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";

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
    identifier: string;
    active: boolean;
    country: string;
    city: string;
    streetName: string;
    buildingNumber: string;
    zipCode: string;
};

interface QueryOptionsProps<R, K extends QueryKey, E = AxiosError>
    extends Omit<UseQueryOptions<R, E, R, K>, "queryKey" | "queryFn"> {}

interface MutationOptionsProps<R = unknown, P = unknown, E = AxiosError>
    extends Omit<UseMutationOptions<R, E, P>, "mutationFn"> {}

type FilterOption = {
    label: string;
    value: string;
};
