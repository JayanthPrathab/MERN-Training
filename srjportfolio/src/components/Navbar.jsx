import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <header>
        <center>
          <h2 className="name"> Jayanth Prathab </h2>
        </center>
        <nav className="navbar">
          <ul className="leftnav">
            <li>
              <Link className="link" to="/project">
                Projects
              </Link>
            </li>
            <li>
              <Link className="link" to="/resume.pdf" target="blank">
                Resume
              </Link>
            </li>
          </ul>
          <ul className="rightnav">
            <li>
              <Link className="link" to="/skill">
                Skills
              </Link>
            </li>
            <li>
              <Link className="link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default Navbar;
