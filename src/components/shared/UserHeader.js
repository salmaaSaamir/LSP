import '../style/header.css';
import { Outlet, Link } from "react-router-dom";

const Headre = () => {
    return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
    <h1 className="navbar-brand">LSP</h1>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
            <Link to="/borrowReq" className="nav-link">Borrow_Requests</Link>
        </li>
        </ul>
        <Link to="/logout"className="btn btn-outline-danger" type="submit">log-out</Link>
    </div>
</div>
</nav>
<Outlet />
    </>
);
};
export default Headre;
