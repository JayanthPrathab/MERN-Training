import { useState } from "react";
import { Link } from "react-router-dom";
const Template2raw = () => {
  const [code, setCode] = useState(
    `<div>
  <div className="rawtemp1">
    <div className="rawtempit1">
      Hello World
    </div>
    <div className="rawtempit1">
      Welcome to the template
    </div>
  </div>
</div>`
  );
  const handleRun = () => {
    setOutput(code);
  };
  const [output, setOutput] = useState(null);
  return (
    <div>
      <div className="rawtemp1">
        <div className="rawtempit1">
          <textarea
            className="code-editor"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          /> <br />
          <button className="run-button" onClick={handleRun}>
            Run
          </button>
        </div>
        <div className="rawtempit1">
          <div dangerouslySetInnerHTML={{ __html: output }} />
        </div>
      </div>
        <br />
        <h6><Link to='/template2'>Click Here</Link> to view the Output of Sample template</h6>
    </div>
  );
};
export default Template2raw;
