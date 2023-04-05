import '../style/CUnav.css';
import { Outlet, Link } from "react-router-dom";

const CUnAv = () => {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <h1 class="navbar-brand">LSP</h1>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2">
                            <li class="nav-item">
                                <Link to="/">Home</Link>
                            </li>
                            </ul>
                            <Link to="/logout"className="btn btn-outline-danger" type="submit">log-out</Link>
                        </div>
                    </div>
        </nav>
        </>
)
};
export default CUnAv;