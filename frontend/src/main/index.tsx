import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "@/pages/router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "@/assets/styles/main.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = document.getElementById("root");

if (!root) {
    throw new Error("root not found");
}

const container = createRoot(root);

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
        },
    },
});

container.render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} position="bottom" />
    </QueryClientProvider>
);
