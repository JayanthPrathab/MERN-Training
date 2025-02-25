import Faculty from "./Faculty";
import StudentRes from "./StudentRes";
const CoE=(res)=>{
    return(
        <div>
            <Faculty sgpa={res.sgpa} cgpa={res.cgpa}/>
            <h2>Results OUT!!!</h2>
        </div>
    );
}
export default CoE;