// import '../style/HomeAdminHeader';
import { Link } from "react-router-dom";

const HomeNav = () => {
    return (
      <div class="navbar" >
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">LSP</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to="/Create"class="nav-link active">
          Create
        </Link>
          </li>
          <li class="nav-item">
          <Link to="/borrowReq"class="nav-link active">
          Show borrow requests
        </Link>
          </li>
          <li class="nav-item">
          <Link to="/userReq"class="nav-link active">
          User requests
        </Link>
          </li>
          </ul>
          <form class="d-flex">
          
          <Link to="/logout"className="btn btn-outline-danger" type="submit">log-out</Link>
        </form>
      </div>
    </div>
    </nav>
    </div>
)
};
export default HomeNav;