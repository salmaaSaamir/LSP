// import '../style/CUnav.css'

// import { Link } from "react-router-dom";
import CUnAv from './CUnAv';
const Create = () => {
  return (
    <div class="border">
      <CUnAv></CUnAv>
      <form >
      <div class="form-group row">
      <div class="h2"><h2>Create Your Book</h2></div> 
            <label class="col-sm-2 col-form-label">Title</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Author</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">ISBN</label>
            <div class="col-sm-10">
              <input type="number" class="form-control" />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Rack Number</label>
            <div class="col-sm-10">
              <input type="number" class="form-control" />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Photo of book</label>
            <div class="col-sm-10">
              <input type="file" class="form-control" />
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label">Subject</label>
            <div class="col-sm-10">
              <input type="number" class="form-control" />
            </div>
          </div>
      <button class="updatebtn">Create</button>
      </form>
    </div>
  )
};
export default Create;