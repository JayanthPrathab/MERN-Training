import { Link } from "react-router-dom";
import { useState } from "react";
const navbar = () => {
  var [dropdown1, setDropdown] = useState(false);
  return (
    /*inline styling*/

    <header>
      <nav>
        <li>
          <Link className="link" to="/Home">Home</Link>
        </li>
        <li>
          <Link className="link" to="/About">About</Link>
        </li>
        <li>
          <Link className="link" to="/Gallery">Gallery</Link>
        </li>
        
          <div className="dropdown" onMouseLeave={() => {
            setDropdown(!dropdown1);
          }}
          onMouseEnter={() => {
              setDropdown(!dropdown1);
            }}><span>

              Hooks</span>
              {dropdown1 &&
            (<ol className="dropdown-list">
              <li><Link className="link" to="/UseState">UseState</Link></li>
              <li>
                <Link className="link" to="/UseEffect">
                  UseEffect
                </Link>
              </li>
              <li><Link className="link" to="/UseEffectAPI">UseEffectAPI</Link></li>
              <li><Link className="link" to="/UseRef">UseRef</Link></li>
              <li><Link className="link" to="/UseMemo">UseMemo</Link></li>
              <li><Link className="link" to="/UseCallback">UseCallback</Link></li>
              <li><Link className="link" to="/UseCustomHook">CustomHook</Link></li>
            </ol>)    }
          
        </div>
        <li>
          <Link className="link" to="/hoc">
            HoC
          </Link>
        </li>
        <li>
          <Link className="link" to="/Contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="link" to="/SignUp">
            SignUp
          </Link>
        </li>
      </nav>
    </header>
  );
};
export default navbar;
