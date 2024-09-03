import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
function Intro() {
  return (
    <div>
      <h1>Christian Saguirre</h1>
      <p>
        Im a Web and Mobile Developer, whose not afraid to be a beginner and
        likes to learn a lot. I like to listen to music and sometimes create
        covers of songs as a hobby.{" "}
      </p>
    </div>
  );
}

function Avatar() {
  return (
    <img
      src="image.png"
      className="avatar"
      alt="Christian Saguirre"
      srcset=""
    />
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skillName="React ⚛️" color="orangered" />
      <Skill skillName="Web Development 💻" color="red" />
      <Skill skillName="Mobile Development 📱" color="yellow" />
      <Skill skillName="Java ♨️" color="blue" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      {props.skillName}
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
