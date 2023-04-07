import React, { useState } from "react";
import '../style/Signin.css';
import { Link } from "react-router-dom";

function Signin(){
    return(
        <div className="class2">
            <div className="right-side">
            <h2>Welcome Back!</h2>
        <p className="ppp">To Keep connected with us Please login with your personal info.</p>
        <Link to="/Signup" type="button" className="btn1 btn-">Sign-up</Link>
        </div>
    <div className="left-side" >
    <form action="" >
        <h1>Sign In</h1>
        <p>Please Signin to your title lock pro account</p>
    <div class="form-group">
    <input type="email" class="form-control"  placeholder="Enter email" name="email" />
    <label ></label>
    <input type="password" class="form-control"  placeholder="Password" name="password" />
    <label ></label>
  </div>
  <button type="submit" class="btn btn-success">Submit</button>
  <p className="pp">Don't Have an Account?</p>
  </form>
    </div>


    </div>

    )
}
export default Signin