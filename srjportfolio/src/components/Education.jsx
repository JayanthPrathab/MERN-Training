import img from "../assets/srj.jpg";
import "../css/education.css";
import CountUp from "./Countup";
import GradientText from "./GradientText";
const Education = () => {
  return (
    <div className="main2">
      <h1>Me!!</h1>
      <center>
        <img className="me" src={img} alt="" />
      </center><br />
      <div class="container text-center">
        <div class="row">
          <div class="col">
          <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={10}
              showBorder={false}
              className="custom-class"
            >
            <h5>St. Joseph's Institute of Technology <br /> B.E ECE <br />
            <CountUp
              from={0}
              to={9.5}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            /></h5>
             </GradientText>
          </div>
          <div class="col">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={10}
              showBorder={false}
              className="custom-class"
            >
              <h5>Higher Secondary Schooling <br />
              KSR Akshara <br />
              <CountUp
                from={0}
                to={94}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />{" "}
              %</h5>
            </GradientText>
          </div>
          <div class="col">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={10}
              showBorder={false}
              className="custom-class"
            >
              <h5>
                {" "}
                High School <br /> V School <br />
                <CountUp
                  from={0}
                  to={95}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />{" "}
                %{" "}
              </h5>
            </GradientText>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
