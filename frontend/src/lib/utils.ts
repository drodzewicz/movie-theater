import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import _ from "lodash";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Replaces placeholders in a URL with corresponding values from the `parameters` object.
 *
 * Placeholders in the URL are marked with `$`, e.g., `/users/$userId`, and are replaced
 * by values in `parameters` where the key matches the placeholder (without the `$`).
 *
 * @param {string} url - The URL containing `$key` placeholders.
 * @param {Record<string, string>} parameters - Key-value pairs for replacing placeholders.
 * @returns {string} - The URL with placeholders replaced by values.
 *
 * @example
 * interpolateUrl('/users/$userId', { userId: '123' }); // '/users/123'
 */
export function interpolateUrl(
    url: string,
    parameters: Record<string, string>,
    options?: { prefix?: string }
) {
    const prefix = options?.prefix || "$";
    return url
        .split("/")
        .map((str) => (str.includes(prefix) ? parameters[str.substring(1)] : str))
        .join("/");
}

export function getPaginationParams(props: unknown) {
    const pagination = _.get(props, "pagination");
    return _.isEmpty(pagination)
        ? undefined
        : {
              size: _.get(pagination, "pageSize"),
              page: _.get(pagination, "pageIndex"),
          };
}

export function getFilterParams(props: unknown) {
    const columnFilters = _.get(props, "columnFilters");
    return _.isEmpty(columnFilters)
        ? undefined
        : _.mapValues(_.keyBy(columnFilters, "id"), "value");
}

export function getSortingParams(props: unknown) {
    const sorting = _.get(props, "sorting[0]") as { id: string; desc: boolean };
    return _.isEmpty(sorting)
        ? undefined
        : { sort: `${sorting.id},${sorting.desc ? "desc" : "asc"}` };
}

export function transformToOptions(data: string[]) {
    return data.map((it: string) => ({ label: it, value: it }));
}
