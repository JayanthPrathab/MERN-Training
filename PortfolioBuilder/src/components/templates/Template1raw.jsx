import { useState } from "react";
import { Link } from "react-router-dom";
const Template1raw = () => {
  
  const [output, setOutput] = useState(null);
  return (
    <div>
        <br />
        <center><h6><Link to='/template1'>Click Here</Link> to view the Output of Sample template</h6></center>
        <br /><br />
    </div>
  );
};
export default Template1raw;
