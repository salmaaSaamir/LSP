import React, { useState } from "react";
// import '../style/Mybooks';
import { Link } from "react-router-dom";

function Mybooks(){
           ///////Toggle
    const [toggleButton,settoggleButton]=useState(false);
    const handleClick=()=>{
        settoggleButton(!toggleButton)
        console.log(toggleButton,"value");
    }

    return(
      <div className="class">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                <h1 className="navbar-brand">LSP</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
           <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
               <li  className="nav-item">
                <Link to="/userhome" className="nav-link" aria-current="page" href="/Mybooks">Home</Link>
               </li>
              </ul>
            </div> 
                    {/* Logout */}
              <Link to="/" type="button" class="btn btn-outline-danger">Log-out</Link>
           </div>
           </nav>

              {/* DataTable */}
     <div className="Table-grid">  
   <table class="table">
    <thead>
      <tr className="header">  
        <th className="coll" scope="col">Images</th>
        <th className="coll" scope="col">Date</th>
        <th className="coll" scope="col">BookName</th>
        <th className="coll" scope="col">AuthourName</th>
        <th className="coll" scope="col">State</th>
      </tr>
    </thead>
    <tbody class="table-group-divider">

        {/* 1 */}
      <tr>
        {/* <th scope="row"></th> */}
        <td><img src="https://covers.openlibrary.org/w/id/11593737-M.jpg" className="img"/></td>
        <td>15/3/2023</td>
        <td>Fortune`s childern</td>
        <td>Jennifer Greene</td>
        <td><div onClick={handleClick} className="toggle">
                {toggleButton? <div className="toggle-left"></div>:
                    <div className="toggle-right"></div>}
            </div></td>
      </tr>

           {/* 2 */}
      <tr>
        {/* <th scope="row"></th> */}
        <td><img src="https://covers.openlibrary.org/w/id/12547107-M.jpg" className="img"/></td>
        <td>29/3/2023</td>
        <td>Inside Out&Back Again</td>
        <td>THANHHA LAF</td>
        <td><div onClick={handleClick} className="toggle">
                {toggleButton? <div className="toggle-left"></div>:
                    <div className="toggle-right"></div>}
            </div></td>
          </tr>
            
            {/* 3 */}
      <tr>
        {/* <th scope="row"></th> */}
        <td><img src="https://covers.openlibrary.org/w/id/8231873-M.jpg" className="img"/></td>
        <td>25/2/2023</td>
        <td>The Eleventh Plague</td>
        <td>Jeff Hirsch</td>
        <td><div onClick={handleClick} className="toggle">
                {toggleButton? <div className="toggle-left"></div>:
                    <div className="toggle-right"></div>}
            </div></td>
      </tr>
    </tbody>
  </table> 
    </div>
  </div>  
    );
}
export default Mybooks