import { useState } from "react";

function About(){
    var statinit=0;
    var instr=" "
    var [num,setNum]= useState(statinit)
    function handleIncrement(){
        setNum(num+1);
    }
    
    
    return(
        <div>
            <h2>This contains my ABOUT info</h2>
            <h3>State initial value is {statinit}</h3>
            <button onClick={()=>setNum(num-1)}>-</button>
            <h3>Current state: {num}</h3>
            <button onClick={handleIncrement}>+</button>
            <button onClick={()=>setNum(num=0)}>Reset</button>
            <br />
            
        </div>
    );
}
export default About;