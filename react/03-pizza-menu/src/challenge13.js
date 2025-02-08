import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
    return (
        <div className="card">
            <Avatar />
            <div className="data">
                <Intro />
                <ul className="skill-list">
                    <li>
                        <SkillList lang="Python" exp="2 years" color="red" />
                    </li>
                    <li>
                        <SkillList lang="C++" exp="2 years" color="blue" />
                    </li>
                    <li>
                        <SkillList lang="C" exp="3 years" color="green" />
                    </li>
                    <li>
                        <SkillList lang="Java" exp="5 years" color="orange" />
                    </li>
                </ul>
            </div>
        </div>
    );
}

function Avatar() {
    return (
        <div>
            <img src="Bojack.png" alt="Literally Me" />
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

function SkillList(props) {
    const style = { backgroundColor: props.color };
    return (
        <div style={style} className="skill">
            <h5>{props.lang}</h5>
            <h5>{props.exp}</h5>
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
