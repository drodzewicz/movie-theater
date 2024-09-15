import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { URLS } from "@/service/url";
import { interpolateUrl } from "@/lib/utils";

type UrlType = (typeof URLS)[number];

type FetchOptions = AxiosRequestConfig<any> & { url: UrlType; variables?: Record<string, string> };

class ServiceClient {
    private static objectInstance: ServiceClient;

    protected client: AxiosInstance;

    constructor() {}

    public static get instance(): ServiceClient {
        if (!ServiceClient.objectInstance) {
            ServiceClient.objectInstance = new ServiceClient();
        }

        return ServiceClient.objectInstance;
    }

    public initialize() {
        this.client = axios.create({
            withCredentials: true,
            paramsSerializer: {
                indexes: null,
            },
        });
    }

    fetch({ url, variables, ...options }: FetchOptions) {
        let newUrl: string = url;
        if (url.includes("$")) {
            newUrl = interpolateUrl(url, variables);
        }

        return this.client({ url: newUrl, ...options });
    }
}

export default ServiceClient;
