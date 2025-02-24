import c from '../assets/c.png';
import cpp from '../assets/cpp.png';
import database from '../assets/database.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import java from '../assets/java.png';
import git from '../assets/git.png';
import vs from '../assets/vs.png'
const Skill=()=>{
    return(
        <div className="skillcont">
            <center><h2 className='hcode'>I code in: </h2></center>
            <div>
            <ul className='code'>
                <li><img className="ico" src={c} alt="" srcset="" /></li>
                <li><img className="ico" src={cpp} alt="" srcset="" /></li>
                <li><img className="ico" src={java} alt="" srcset="" /></li>
                <li><img className="ico" src={html} alt="" srcset="" /></li>
                <li><img className="ico" src={css} alt="" srcset="" /></li>
                <li><img className="ico" src={js} alt="" srcset="" /></li>
                <li><img className="ico" src={database} alt="" srcset="" /></li>
            </ul>
            </div>
            <center><h2 className='hcode'>Tools I use:</h2></center>
            <ul className='code'>
                <li><img className="ico" src={git} alt="" srcset="" /></li>
                <li><img className="ico" src={vs} alt="" srcset="" /></li>
            </ul>
        </div>
    );
}
export default Skill;