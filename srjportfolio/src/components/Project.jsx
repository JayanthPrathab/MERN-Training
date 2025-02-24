import mine from '../assets/coal.jpeg';
import portf from '../assets/portf.jpg';
const Project=()=>{
    return(
        <div className='comp'>
            <h2>Projects</h2>
            <div className='projcont'>
            <div className='proj1'>
                <h4>Portfolio Building website</h4>
                <img className="projimg" src={portf} alt="" /> <br /> <br />
                A user-friendly platform for creating professional portfolios with dynamic templates, real-time previews, and easy content m
                anagement. It ensures responsiveness for seamless access across all devices.
            </div>
            <div className='proj2'>
                <h4>Coal Mining Safety System using IoT Integration </h4>
                <img className="projimg" src={mine} alt="" /> <br /> <br />
                An IoT-powered system that monitors hazardous gases, temperature, and worker safety in real time.
                 It provides instant alerts and automated responses to enhance safety and reduce risks in coal mines.
            </div>
            </div>
        </div>
    );
}
export default Project;