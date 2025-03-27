import "../css/projects.css";
import hard from "../assets/hardware.png";
import soft from "../assets/software.png";
import {Link} from 'react-router-dom';
const Projects = () => {
  return (
    <div className="main">
      <h1>Projects</h1>
        <br /><br />
      <div className="row">
        
          <div className="col">
            <h5>Hardware</h5>
            <Link to='/hardwareproj'><img className="img" src={hard} alt="img" /></Link>
          </div>
        
        
          <div className="col">
            <h5>Software</h5>
            <Link to='/softwareproj'><img className="img" src={soft} alt="" /></Link>
          </div>
    
      </div>
    </div>
  );
};
export default Projects;
