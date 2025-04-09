import { Link } from "react-router-dom";
import ham from "../assets/3line.png";
import port from "../assets/portfolio.png";
import useAuth from "../hook/useAuth";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate= useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate('/login');
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <Link to={"/"}>
            <li>
              <img src={port} className="logo" />
            </li>
          </Link>

          <li>Features & Benefits</li>
          <li>
            <Link className="link" to="/template">
              Templates
            </Link>
          </li>
          <li>
            <Link className="link" to="/plans">
              Plans & Pricing
            </Link>
          </li>
          <li>Help</li>

          {!isAuthenticated ? (
            <>
              <li>
                <Link className="link" to="/signup">
                  Signup
                </Link>
              </li>
              <li>
                <Link className="link" to="/login">
                  Login
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <span className="profile-tag">
                  👤 {user.email || "Profile"}
                </span>
              </li>
              <li>
                <button className="link" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          )}

          <div>
            <img className="hamburgerico" src={ham} />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
