import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import '../components/css/Signup.css';
// import LoGin from './loGin';
function Signup() {
  var [firstName,setFN]=useState("");
  var [lastName,setLN]=useState("");
  var [email,setEmail]=useState("");
  var [password,setPass]=useState("");
  var [mobile,setMob]=useState();
  const handleSignin=(event)=>{
    event.preventDefault();
    axios.post('https://portfolio-builder-yssn.onrender.com',{
      firstName:firstName,
      lastName:lastName,
      email:email,
      password:pass,
      mobile:mobile
    })  
    alert("Signup successful!!! Now Login");
  }
  return (
    <div>
      <div className="outerbox">
        <h2>SignUp</h2> <br />
        <form className="form" onSubmit={handleSignin}>
          First Name
          <br />
          <input type="text" value={firstName} onChange={(e)=>{setFN(e.target.value)}}/>
          <br />
          <br />
          Last Name
          <br />
          <input type="text" value={lastName} onChange={(e)=>{setLN(e.target.value)}}/>
          <br />
          <br />
          Email
          <br />
          <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <br />
          <br />
          Mobile Number <br />
          <input type="number" value={mobile} onChange={(e)=>{setMob(e.target.value)}}/>
          <br />
          <br />
          Password <br />
          <input type="password" value={password} onChange={(e)=>{setPass(e.target.value)}}/>
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
