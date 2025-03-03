import { Link } from "react-router-dom";
const Template=()=>{
    return(
        <div>
            <br /><br />
            <div className="tempCont">
            <Link className="link" to='/template1raw'>
                <div className="tempit">
                    <h5> Visionary</h5>
                </div>
            </Link>
            <Link className="link" to='/template2raw'>
                <div className="tempit">
                    <h5>Chronicle</h5>
                </div>
            </Link>
            <Link className="link" to='/template3raw'>
                <div className="tempit">
                    <h5>Genesis</h5>
                </div></Link>
            </div>
        </div>
    );
}
export default Template;