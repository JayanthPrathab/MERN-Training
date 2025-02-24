import sjit from '../assets/sjit.jpg';
import vschool from '../assets/vcshool.jpg';
import ksr from '../assets/ksr.jpg'
const About=()=>{
    return(
        <div className='comp'>
            <h2>My Education</h2>
            <div>
                <img className='schimg' src={sjit} alt="" /><br />
                <img className='schimg'  src={ksr} alt="" /><br />
                <img className='schimg' src={vschool} alt="" />
            </div>
        </div>
    );
}
export default About;