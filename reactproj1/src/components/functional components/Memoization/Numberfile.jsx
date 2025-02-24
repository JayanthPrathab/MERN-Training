import {memo,useState} from 'react';
const Numberfile=()=>{
    var [num,setNum]=useState(0);
    return(
        <div>
            Enter number <input type="number" value={num} onChange={(e)=>{setNum(e.target.value)}} /> <br />
            The number is {num}
        </div>
    );
}
export default memo(Numberfile);