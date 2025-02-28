import { Link } from "react-router-dom";
const Template=()=>{
    return(
        <div>
            <br /><br />
            <div className="tempCont">
                <div className="tempit">
                    <h5> <Link className="link" to='/template1raw'>Visionary</Link></h5>
                </div>
                <div className="tempit">
                    <h5><Link className="link" to='/template2raw'>Chronicle</Link></h5>
                </div>
                <div className="tempit">
                    <h5><Link className="link" to='/template3raw'>Genesis</Link></h5>
                </div>
            </div>
        </div>
    );
}
export default Template;