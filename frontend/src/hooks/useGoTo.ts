import { useNavigate, NavigateOptions } from "react-router-dom";
import queryString from "query-string";
import { AppRoutes } from "@/routes/routes";
import { interpolateUrl } from "@/lib/utils";

export interface GoToOptions extends NavigateOptions {
    variables?: Record<string, string>;
    params?: Record<string, string>;
}

export function useGoTo() {
    const navigate = useNavigate();

    return (path: AppRoutes, props?: GoToOptions) => {
        const { params, variables, ...options } = props || {};

        const pathname = path.includes(":")
            ? interpolateUrl(path, variables, { prefix: ":" })
            : path;
        const search = params ? queryString.stringify(params) : undefined;
        navigate({ pathname, search }, options);
    };
}
