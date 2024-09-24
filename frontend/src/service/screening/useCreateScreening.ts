import { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import ServiceClient from "@/service/service-client";
import { MutationOptionsProps } from "@/types/types";
import { screeningKeys } from "@/service/query-keys";

type CreateScreeningPayload = {
    date: Date;
    movieId: string;
    hallId: string;
    locationId: string;
};

export function useCreateScreening(
    options?: MutationOptionsProps<
        unknown,
        CreateScreeningPayload,
        AxiosError<ApiDataValidationError>
    >
) {
    const queryClient = useQueryClient();

    return useMutation({
        ...options,
        mutationFn: async (data) => {
            const response = await ServiceClient.instance.fetch({
                url: "/api/screenings",
                method: "POST",
                data,
            });
            return response.data;
        },
        onSuccess: (_data, _var, _context) => {
            queryClient.invalidateQueries({ queryKey: screeningKeys.all });
            options?.onSuccess?.(_data, _var, _context);
        },
    });
}
