import '../style/CUnav.css';

import { Link } from "react-router-dom";
const CUnAv = () => {
    return (

        <div  >

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">LSP</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/" class="navbar-link active">
                                    Home
                                </Link>
                            </li>
                        </ul>
                        <form class="d-flex">

                            <button class="bbtn" type="submit">Log Out</button>
                        </form>
                        </div>
                    </div>
                    </nav>
                    </div>
)
};
export default CUnAv;