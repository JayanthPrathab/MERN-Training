import CoE from './CoE.jsx';
import Exam from './Exam.jsx'
const Faculty=(res)=>{
    return(
        <div>
            <h2>Faculty correcting papers</h2>
            <CoE sgpa={res.sgpa} cgpa={res.cgpa}/>
        </div>
    );
}
export default Faculty;