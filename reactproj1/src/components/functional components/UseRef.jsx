import { useEffect, useRef,useState } from "react";

const UseRef=()=>{
    var [txt,setTxt]=useState("")
    var previousRender=useRef();
    useEffect(()=>{
        previousRender.current=txt;
    },[txt])
    return(
        <div>
        <h1>This is UseRef Example</h1>
        Enter text here: {" "}
        <input  type="text" onChange={(e)=>{setTxt(e.target.value)}}/> <br />
        Current render: {txt} <br />
        Previous render: {previousRender.current}
        </div>
    );
}
export default UseRef;