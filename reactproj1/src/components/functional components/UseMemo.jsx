import { useState, useMemo } from "react";
function slowdouble(num){
    for(var i=0;i<10000000000;i++){}
    return 2*num;
}
const UseMemo=()=>{
    var[num,setNum]=useState(0);
    var[theme,setTheme]=useState(false);
    var styling={
        backgroundColor: theme?"black":"white",
        color: theme?"white":"black"
    }
    var double=useMemo(()=>{
        return slowdouble(num);
    },[num]) //useMemo just allows the dobling to slow down the page. Normally due to slow function, toggling b/w theme is also affected. UseMemo avoids this.
    return(
        <div style={styling}>
            <h1>UseMemo Example</h1>
            <h2>Number Box</h2>
            <input type="number" onChange={()=>{setNum(num+1)}} /> <br />
            <h2>Number: {num}</h2> 
            <h2>Double Number: {double(num)}</h2> 
            <button onClick={()=>{setTheme(!theme)}}>Change Theme</button>
        </div>
    );
}
export default UseMemo;