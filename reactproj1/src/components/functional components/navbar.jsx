import {Link} from 'react-router-dom';
const navbar=()=>{
    return(
        /*inline styling*/
        
        <header>
            <nav> 
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Gallery">Gallery</Link></li>
                <div class="hov">
                <span>Hooks</span>
                <ol class="hoverapp">
                    <li>UseState</li>
                    <li><Link to="/UseEffect">UseEffect</Link></li>
                </ol></div>
                <li><Link to="/Contact">Contact</Link></li>
                <li><Link to="/SignUp">SignUp</Link></li>
            </nav>
        </header>
    );
}
export default navbar