import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const RouterErrorPage = () => {
    const error = useRouteError();

    const status = isRouteErrorResponse(error) ? error.status : 400;
    const message = isRouteErrorResponse(error) ? error.data?.message : "Something went wrong";

    return (
        <div>
            <div>STATUS: {status}</div>
            <div>MESSAGE: {message}</div>
        </div>
    );
};

export default RouterErrorPage;
