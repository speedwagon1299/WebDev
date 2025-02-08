import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skillData = [
    {
        lang: "Python",
        exp: "2 years",
        color: "red",
    },
    {
        lang: "C++",
        exp: "3 years",
        color: "blue",
    },
    {
        lang: "C",
        exp: "4 years",
        color: "green",
    },
    {
        lang: "Java",
        exp: "5 years",
        color: "orange",
    },
];

function App() {
    return (
        <div className="card">
            <Avatar />
            <div className="data">
                <Intro />
                <ul className="skill-list">
                    {skillData.map((skill) => (
                        <Skill skillObj={skill} key={skill.lang} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

function Avatar() {
    return (
        <div>
            <img className="avatar" src="Bojack.png" alt="Literally Me" />
        </div>
    );
}

function Intro() {
    return (
        <div>
            <h1>Kanye West</h1>
            <p>I am Kanye West</p>
        </div>
    );
}

// function SkillList(props) {
//   const style = { backgroundColor: props.color };
//   return (
//     <div style={style} className="skill">
//       <h5>{props.lang}</h5>
//       <h5>{props.exp}</h5>
//     </div>
//   );
// }

function Skill({ skillObj }) {
    const style = { backgroundColor: skillObj.color };
    const expDict = {
        "2 years": "Beginner",
        "3 years": "Intermediate",
        "4 years": "Advanced",
        "5 years": "Advanced",
    };
    return (
        <li>
            <div style={style} className="skill">
                <h5>{skillObj.lang}</h5>
                <h5>{`- ${expDict[skillObj.exp]}`}</h5>
            </div>
        </li>
    );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
