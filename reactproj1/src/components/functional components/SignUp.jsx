import "../css/SignUp.css";
import { Link } from "react-router-dom";
// import LoGin from './loGin';
function SignUp() {
  return (
    <div>
      <div class="outerbox">
        <h2>SignUp</h2>
        <form action="">
          Email
          <br />
          <input type="text" />
          <br />
          <br />
          Mobile Number <br />
          <input type="number" />
          <br />
          <br />
          Password <br />
          <input type="password" />
          <br />
          <br />
          Re-enter Password <br />
          <input type="password" />
          <br />
          <br />
          <button>Submit</button>
        </form><br />
        <div>
          Already having an account? <Link to="/loGin">Login</Link>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
