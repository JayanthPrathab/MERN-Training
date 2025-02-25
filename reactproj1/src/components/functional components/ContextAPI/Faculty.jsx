import CoE from './CoE.jsx';
import Exam from './Exam.jsx'
const Faculty=(res)=>{
    return(
        <div>
            
            <Exam sgpa={res.sgpa} cgpa={res.cgpa}/>
            <h2>Faculty correcting papers</h2>
            
        </div>
    );
}
export default Faculty;