import CoE from "./CoE";

const StudentRes=(res)=>{
    return(
        
        <div>
            <CoE sgpa="10 sgpa" cgpa="10 cgpa" />
            <h1>Result</h1>
            <h2>SGPA: {res.sgpa}</h2>
            <h2>CGPA: {res.cgpa}</h2>
        </div>

    );
}
export default StudentRes;