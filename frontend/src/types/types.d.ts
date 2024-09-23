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

interface QueryOptionsProps<R, K extends QueryKey, M = R, E = AxiosError>
    extends Omit<UseQueryOptions<R, E, M, K>, "queryKey" | "queryFn"> {}

interface MutationOptionsProps<R = unknown, P = unknown, E = AxiosError>
    extends Omit<UseMutationOptions<R, E, P>, "mutationFn"> {}

type FilterOption = {
    label: string;
    value: string;
};

type PaginationParams = {
    size?: number;
    page?: number;
};

type FilterParams = Record<string, unknown>;

type SortParams = { sort: string };

type ListOptions = {
    pagination?: PaginationParams;
    filters?: FilterParams;
    sorting?: SortParams;
};
