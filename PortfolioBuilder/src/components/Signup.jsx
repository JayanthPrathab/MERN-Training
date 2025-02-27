import { Link } from "react-router-dom";
import '../components/css/Signup.css';
// import LoGin from './loGin';
function Signup() {

  return (
    <div>
      <div className="outerbox">
        <h2>SignUp</h2>
        <form>
          First Name
          <br />
          <input />
          <br />
          <br />
          Last Name
          <br />
          <input />
          <br />
          <br />
          Email
          <br />
          <input />
          <br />
          <br />
          Mobile Number <br />
          <input/>
          <br />
          <br />
          Password <br />
          <input />
          <br />
          <br />
          <button type='submit'>Submit</button>
        </form><br />
        <div>
          Already having an account? <Link to="/loGin">Login</Link>
        </div>
      </div>
    </div>
  );
}
export default Signup;
