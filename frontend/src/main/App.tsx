import { Link, Outlet } from "react-router-dom";

const App = () => {
    return (
        <div>
            Hello worlda
            <Link to="/locations">locations</Link>
            <Link to="/movies">movies</Link>
            <Outlet />
        </div>
    );
};

export default App;
