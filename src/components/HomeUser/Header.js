import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <h1 class="navbar-brand">LSP</h1>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/My-Books" className="nav-link">My Books</Link>
              </li>
            <div class="search">
            <select class="form-select" aria-label="Default select example">
              <option selected>All</option>
              <option value="1">Title</option>
              <option value="2">Author</option>
              <option value="3">Subject(Category)</option>
              <option value="4">Rack Number</option>
              </select>
            <form class="d-flex search me-4">
              <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-success" type="submit">Search</button>
            </form>
            </div>  
            </ul>
            <div>
            <Link to="/"className="btn btn-outline-danger" type="submit">log-out</Link>
            </div>
          </div>
        </div>
      </nav>
        </>
    );
};
export default Header;