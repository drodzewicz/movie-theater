import axios from "axios";
import { useEffect } from "react";

const MovieManager = () => {
    useEffect(() => {
        axios("/api/locations").then((res) => {
            console.log(res);
        });
    }, []);

    return <div>MovieManager</div>;
};

export default MovieManager;
