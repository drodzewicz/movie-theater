import { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import ServiceClient from "@/service/service-client";
import { MutationOptionsProps } from "@/types/types";
import { movieKeys } from "@/service/query-keys";

type CreateMoviePayload = {
    title: string;
    description: string;
    duration: number;
    releaseDate: Date;
    posterUrl?: string;
    trailerUrl?: string;
};

export function useCreateMovie(
    options?: MutationOptionsProps<
        MovieResponse,
        CreateMoviePayload,
        AxiosError<ApiDataValidationError>
    >
) {
    const queryClient = useQueryClient();

    return useMutation({
        ...options,
        mutationFn: async (data) => {
            const response = await ServiceClient.instance.fetch({
                url: "/api/movies",
                method: "POST",
                data,
            });
            return response.data;
        },
        onSuccess: (_data, _var, _context) => {
            queryClient.invalidateQueries({ queryKey: movieKeys.all });
            options?.onSuccess?.(_data, _var, _context);
        },
    });
}
