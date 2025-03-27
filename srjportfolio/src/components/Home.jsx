import TrueFocus from "./Truefocus";
import Homeback from "./Homeback";
import CircularText from "./CircularText";
import '../css/home.css';
const Home = () => {
  return (
    <div>
      <br />
      <br />
      <div className="circ">
      <CircularText
        text="PASSIONATE*PROBLEM*SOLVER*"
        onHover="speedUp"
        spinDuration={20}
        className="custom-class"
      /></div>
      <div className="circ1">
      <CircularText
        text="INNOVATE*DESIGN*DEVELOP*"
        onHover="speedUp"
        spinDuration={20}
        className="custom-class"
      /></div>
      <div className="focus">
        <TrueFocus
          sentence="Jayanth Prathab SR"
          manualMode={false}
          blurAmount={5}
          borderColor="cyan"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
      </div>
      
      <div
        style={{ position: "relative", height: "500px", overflow: "hidden" }}
      >
        <Homeback
          variation={0}
          pixelRatioProp={window.devicePixelRatio || 1}
          shapeSize={1.5}
          roundness={0.25}
          borderSize={0.05}
          circleSize={0.25}
          circleEdge={1}
        />
      </div>
    </div>
  );
};
export default Home;
