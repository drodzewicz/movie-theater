import { Link, Outlet } from "react-router-dom";

const App = () => {
    return (
        <div>
            Hello worlda
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <Link to="/locations">locations</Link>
            <Link to="/movies">movies</Link>
            <Outlet />
        </div>
    );
};

export default App;
