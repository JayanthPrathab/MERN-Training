import {memo, useState} from 'react';
const Textfile=()=>{
    var [txt,setTxt]=useState("")
    return(
        <div>
            Enter text: <input type="text" value={txt} onChange={(e)=>{setTxt(e.target.value)}}/> <br />
            The text is {txt}
        </div>
    );
}
export default memo(Textfile);