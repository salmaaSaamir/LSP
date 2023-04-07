import '../style/Signup.css';
import { Link } from "react-router-dom";


function Signup(){
    return(
      <div className="class2">
      <div className="left1-side">
      <form action="">
      <h1>Create Account</h1>

  <div class="form-group">
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter UserName" name="name"/>
    <label ></label>
  </div>

    <div class="form-group">
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" />
    <label ></label>
  </div>

  <div class="form-group">
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password"/>
    <label ></label>
  </div>

  <div class="form-group">
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Phone" name="Phone"/>
    <label ></label>
  </div>

  <div class="form-group">
    <select>
    <option value="" class="form-control">Choose Type</option>
    <option value="Liberirean" class="form-control">Liberirean</option>
    <option value="normal" class="form-control">Normal</option>
    </select>
    <label ></label>
  </div>

  <button type="submit" class="btn btn-success">Sign-up</button>
  </form>
    </div>
    
    <div className="right1-side" >
        <h2>Hello, Friend!</h2>
        <p className="ppp">Enter your personal details and start jouerny with us.</p>
        <Link to="/"  type="button" class="btn1 btn-">Sign-In</Link>
    </div>
    </div>
  )
}
export default Signup