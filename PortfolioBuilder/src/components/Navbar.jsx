import { Link } from 'react-router-dom';
import ham from '../assets/3line.png';
import port from '../assets/portfolio.png';

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className='navbar'>
                <Link to={"/"}><li><img src={port} className="logo" /></li></Link>
                
                    <li>Features & Benifits</li>
                    <li><Link className='link' to='/template'>Templates</Link></li>
                    <li><Link className='link' to='/plans'>Plans & Pricing</Link></li>
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
