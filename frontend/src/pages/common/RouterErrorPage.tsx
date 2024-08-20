import LinkButton from "@/components/common/LinkButton";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const RouterErrorPage = () => {
    const error = useRouteError();

    const status = isRouteErrorResponse(error) ? error.status : 400;
    const message = isRouteErrorResponse(error) ? error.data?.message : "Something went wrong";

    return (
        <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-3xl font-semibold ">{status}</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    {message}
                </h1>
                <p className="mt-6 text-base leading-7 text-gray-600">
                    Sorry, there has been a problem loading this page.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <LinkButton to="/" variant="default">
                        Go back home
                    </LinkButton>
                    <LinkButton to="/" variant="link">
                        Contact support <span aria-hidden="true">&rarr;</span>
                    </LinkButton>
                </div>
            </div>
        </div>
    );
};

export default RouterErrorPage;
