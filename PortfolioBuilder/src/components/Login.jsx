import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logimg from '../assets/logini.jpg'

const Login = () => {
  var [email, setEmail] = useState("");
  var [password, setPass] = useState("");
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post("https://portfolio-builder-yssn.onrender.com/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.isLogin) {
          localStorage.setItem("token", res.data.token); // 👈 this is important
          alert("Login successful");
          navigate('/')
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.error("Login error", err);
        alert("Something went wrong!");
      });
  };
  return (
    <div className="outerbox">
    
    <div className="logincont">
        <img className="logi" src={logimg} alt="" />
      <div className="form" ><form onSubmit={handleLogin}>
        <h2>Login</h2> <br />
        E-mail <br />
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />{" "}
        <br />
        <br />
        Password <br />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />{" "}
        <br />
        <br />
        <button type="submit">Login</button>
      </form></div>
    </div>
    </div>
  );
};
export default Login;
