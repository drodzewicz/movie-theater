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

interface QueryOptionsProps<R, K extends QueryKey, M = R, E = AxiosError>
    extends Omit<UseQueryOptions<R, E, M, K>, "queryKey" | "queryFn"> {}

interface MutationOptionsProps<R = unknown, P = unknown, E = AxiosError>
    extends Omit<UseMutationOptions<R, E, P>, "mutationFn"> {}

type FilterOption = {
    label: string;
    value: string;
};
