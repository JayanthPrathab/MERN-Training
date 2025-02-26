import { useState } from "react";
import axios from 'axios';
import "../css/SignUp.css";
import { Link } from "react-router-dom";
// import LoGin from './loGin';
function SignUp() {
  const [firstName,setFN]=useState("");
  const [lastName,setLN]=useState("");
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const [mobile,setMob]=useState();
  const handleSignup=(event)=>{
    event.preventDefault();  
    axios.post("http://localhost:3001/signup",{
    firstName:firstName,
    lastName:lastName,
    email:email,
    password:pass,
    mobile:mobile,});
  }
  return (
    <div>
      <div className="outerbox">
        <h2>SignUp</h2>
        <form onSubmit={handleSignup}>
          First Name
          <br />
          <input type="text" value={firstName} onChange={(e)=>{setFN(e.target.value)}} />
          <br />
          <br />
          Last Name
          <br />
          <input type="text" value={lastName} onChange={(e)=>{setLN(e.target.value)}} />
          <br />
          <br />
          Email
          <br />
          <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <br />
          <br />
          Mobile Number <br />
          <input type="number" value={mobile} onChange={(e)=>{setMob(e.target.value)}}/>
          <br />
          <br />
          Password <br />
          <input type="password" value={pass} onChange={(e)=>{setPass(e.target.value)}} />
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
export default SignUp;
