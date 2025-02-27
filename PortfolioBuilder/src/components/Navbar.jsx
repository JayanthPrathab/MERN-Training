import { Link } from 'react-router-dom';
import ham from '../assets/3line.png';
import port from '../assets/portfolio.png';
const Navbar = () => {
  return (
    <div>
      <header>
        <nav className='navbar'>
                <li><img src={port} className="logo" /></li>
                
                    <li>Features & Benifits</li>
                    <li>Templates</li>
                    <li>Plans & Pricing</li>
                    <li>Help</li>
                    <li><Link className="link" to="/signup">Signup</Link></li>
                
            <div>
                <img className="hamburgerico" src={ham}  />
            </div>
        </nav>
      </header>
    </div>
  );
};
export default Navbar;
