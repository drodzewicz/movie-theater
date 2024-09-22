import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import ServiceClient from "@/service/service-client";
import { ApiDataValidationError, MutationOptionsProps } from "@/types/types";

type RegisterPayload = {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
};

type RegisterResponse = {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
};

export function useRegisterAppManager(
    options?: MutationOptionsProps<
        RegisterResponse,
        RegisterPayload,
        AxiosError<ApiDataValidationError>
    >
) {
    return useMutation({
        ...options,
        mutationFn: async (data) => {
            const response = await ServiceClient.instance.fetch({
                url: "/api/auth/admin/register",
                method: "POST",
                data,
            });
            return response.data;
        },
    });
}
