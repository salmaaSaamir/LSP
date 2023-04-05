import React from 'react';
import '../style/Details.css';
import { Link } from 'react-router-dom';
const Details = () =>{
    return(
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid" >
    <h1 className="navbar-brand" >LSP</h1>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/My-Books" className="nav-link active" aria-current="page">MyBooks</Link>
        </li>
      </ul>
      <form className="d-flex" >
      <Link to="/" class="btn btn-outline-danger">Log-out</Link>
      </form>
    </div>
  </div>
</nav>
            <div className="card mb-3" >
            <div className="row g-0" >
            <div className="col-md-4" >
                <img src="https://covers.openlibrary.org/w/id/9257612-M.jpg" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
            <div className="card-body">
            <h5 className="card-title">make it happen :surrounding your fear</h5>
            <p className="card-text">In this warm and witty book, Jordanna shares her personal experiences and struggles along with her fool-proof equation for manifesting whatever you desire, from your dream job to a lasting relationship. Whether you're a matter-of-fact sceptic or a somewhat hippie yoga-lover, Make It Happen will empower you to take ownership of your life and create anything you want.</p>
            <br/>
            <p>
                <b>BUPLSHER: </b><span>Thomas Nicola</span>
            </p>
            <p>
                <b>DATE BUPLSHER: </b><span>15/6/2022</span>
            </p>
            <p>
                <b>ISPN: </b><span>1868</span>
            </p>
            <p>
                <b>LANGUAGE: </b><span>ENGLISH</span>
            </p>
            <p>
                <b>PAGES: </b><span>448p</span>
            </p>
            <button type="button" class="btn btn-success">Borrow</button>
            <Link to="/userhome" type="button" class="btn btn-success">Go Back</Link>
            
            </div>
    </div>
            </div>  
    </div>

    </div>
    );
}
export default Details;