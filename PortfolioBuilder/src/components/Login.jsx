import axios from "axios";
import { useState } from "react";

const Login=()=>{
    var [email,setEmail]=useState("");
    var [password,setPass]=useState("");
    const handleLogin=(event)=>{
        event.preventDefault();
        axios.post("https://portfolio-builder-yssn.onrender.com/login",{
            email:email,
            password:password
        });
        alert("Login successful!!!");
    }
    return(
        <div className="outerbox">
            <form className="form" onSubmit={handleLogin}>
                <h2>Login here</h2> <br />
                E-mail <br />
                <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/> <br /><br />
                Password <br />
                <input type="password" value={password} onChange={(e)=>{setPass(e.target.value)}}/> <br /><br />
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}
export default Login;