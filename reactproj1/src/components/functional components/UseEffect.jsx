import { useState,useEffect } from "react";

const UseEffect=()=>{
    var [txt,settxt]=useState("")
    useEffect(()=>{
        console.log(txt);
    },[]); //useEffect(()=>{anonymous funtion},[dependencies]) dependencies are important to have a check.
    return(
        <section>
            <h1> Hello this is useEffect example</h1>
            <input type="text" onChange={(event)=>{settxt(event.target.value)}} />
            <h3>Typed text: {txt}</h3> 
        </section>
    );
}
export default UseEffect;