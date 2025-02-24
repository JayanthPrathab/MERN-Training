import StudentRes from "./StudentRes";
const CoE=(res)=>{
    return(
        <div>
            <h2>Results OUT!!!</h2>    
            <StudentRes sgpa={res.sgpa} cgpa={res.cgpa}/>
                    
        </div>
    );
}
export default CoE;