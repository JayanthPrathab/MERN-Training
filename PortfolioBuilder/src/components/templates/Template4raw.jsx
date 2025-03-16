import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./template4raw.css";
const Template4raw = () => {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [experience, setExperience] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);

  const skillsOptions = [
    "React",
    "HTML",
    "DeepLearning",
    "MongoDB",
    "Node.js",
    "Python",
    "Machine Learning",
    "IoT",
    "JavaScript",
    "CSS",
    "C++",
  ];

  const handleSkillChange = (event) => {
    const skill = event.target.value;
    if (skill && !selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const removeSkill = (skillToRemove) => {
    setSelectedSkills(
      selectedSkills.filter((skill) => skill !== skillToRemove)
    );
  };

  const handleData=(event)=>{
    event.preventDefault();
    axios.post("https://portfolio-builder-yssn.onrender.com/template4raw",{
        name:name,
        about:about,
        experience:experience,
        skills:selectedSkills,
    })
  }
  return (
    <div>
      <br />
      <center>
        <h6>
          <Link to="/template4">Click Here</Link> to view the Output of Sample
          template
        </h6>
      </center>
      <br />
      <br />
      <h6>Enter your DETAILS below and check your result</h6>
      <center>
        <form onSubmit={handleData}>
          Name <br />
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          About <br />
          <textarea
            value={about}
            onChange={(e) => {
              setAbout(e.target.value);
            }}
          ></textarea>
          <br />
          Experience <br />
          <textarea
            value={experience}
            onChange={(e) => {
              setExperience(e.target.value);
            }}
          ></textarea>
          <br />
          Skills <br />
          <select onChange={handleSkillChange}>
            <option value="">Select a skill</option>
            {skillsOptions.map((skill, index) => (
              <option key={index} value={skill}>
                {skill}
              </option>
            ))}
          </select>
          {/* Display selected skills as badges */}
          <div className="skills-container">
            {selectedSkills.length > 0 ? (
              selectedSkills.map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill}{" "}
                  <button type="button" onClick={() => removeSkill(skill)}>
                    ✖
                  </button>
                </span>
              ))
            ) : (
              <p>No skills selected</p>
            )}
          </div>
          <br />
          <br />
          <button type='submit'>Submit</button>
        </form>
      </center>
    </div>
  );
};
export default Template4raw;
