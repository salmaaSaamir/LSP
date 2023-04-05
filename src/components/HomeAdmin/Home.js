import '../style/AdminBody.css';
import '../style/HomeAdminHeader.css';
import { Link } from "react-router-dom";
import HomeNav from './HomeNav';
const Home = () => {
  return (
    <div class="border">
      <HomeNav></HomeNav>
      <div class="border1">
        <table class="table table-hover">
          <thead>
            <tr>

              <th scope="col">Title</th>

              <th scope="col">Author</th>
              <th scope="col">ISBN</th>
              <th scope="col">Rack Number</th>
              <th scope="col">Subject</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>

              <td>Mark</td>

              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
                <Link to="/Update">
                  <button type="button" class="btn btn-outline-success">Update</button>
                </Link>


                <button type="button" class="btn btn-danger">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
                <Link to="/Update">
                  <button type="button" class="btn btn-outline-success">Update</button>
                </Link>
                <button type="button" class="btn btn-danger">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
                <Link to="/Update">
                  <button type="button" class="btn btn-outline-success">Update</button>
                </Link>
                <button type="button" class="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
};
export default Home;