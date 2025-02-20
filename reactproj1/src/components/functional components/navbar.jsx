import { Link } from "react-router-dom";
import { useState } from "react";
const navbar = () => {
  var [dropdown1, setDropdown] = useState(false);
  return (
    /*inline styling*/

    <header>
      <nav>
        <li>
          <Link class="link" to="/Home">Home</Link>
        </li>
        <li>
          <Link class="link" to="/About">About</Link>
        </li>
        <li>
          <Link class="link" to="/Gallery">Gallery</Link>
        </li>
        
          <div class="dropdown" onMouseLeave={() => {
            setDropdown(!dropdown1);
          }}
          onMouseEnter={() => {
              setDropdown(!dropdown1);
            }}><span>

              Hooks</span>
              {dropdown1 &&
            (<ol class="dropdown-list">
              <li><Link class="link" to="/UseState">UseState</Link></li>
              <li>
                <Link class="link" to="/UseEffect">
                  UseEffect
                </Link>
              </li>
              <li><Link class="link" to="/UseEffectAPI">UseEffectAPI</Link></li>
              <li><Link class="link" to="/UseRef">UseRef</Link></li>
              <li><Link class="link" to="/UseMemo">UseMemo</Link></li>
            </ol>)    }
          
        </div>
        <li>
          <Link class="link" to="/Contact">
            Contact
          </Link>
        </li>
        <li>
          <Link class="link" to="/SignUp">
            SignUp
          </Link>
        </li>
      </nav>
    </header>
  );
};
export default navbar;
