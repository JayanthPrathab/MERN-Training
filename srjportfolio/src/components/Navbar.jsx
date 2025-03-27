import { Link } from "react-router-dom";
const Navbar=()=>{
    return(
        <div>
            <nav>
                <ul className="ddlist">
                    <li><Link to="/education">Education</Link></li>
                    <li><Link ro="/projects">Projects</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link>Experience</Link></li>
                </ul>
            </nav>
        </div>
    );
}
export default Navbar;