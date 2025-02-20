import { useState } from "react";
const UseState=()=>{
    var [str,setStr]=useState("")
    return(
        <div><br /><br />
            Enter text
            <input id="v" onChange={()=>{var value = document.getElementById("v").value;setStr(str=value)}} type='text'/>
            <h3>Current String: {str}</h3><br />
            <h3>Task of the day</h3>
        </div>
    );
}
export default UseState;