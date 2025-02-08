import { useState } from "react";

export default function App() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);
    const divStyle = {
        display: "flex",
        alignItems: "center",
        justifyContext: "spaceBetween",
        textAlign: "center",
    };

    const date = new Date("october 22 2024");
    date.setDate(date.getDate() + count);
    return (
        <div>
            <div style={divStyle}>
                <button
                    onClick={() => {
                        if (step >= 1) {
                            setStep((x) => x - 1);
                        }
                    }}
                >
                    -
                </button>
                <p>Step: {step}</p>
                <button onClick={() => setStep((x) => x + 1)}>+</button>
            </div>
            <div style={divStyle}>
                <button onClick={() => setCount((x) => x - step)}>-</button>
                <p>Count: {count}</p>
                <button onClick={() => setCount((x) => x + step)}>+</button>
            </div>
            <p>
                {count === 0
                    ? "Today is "
                    : count < 0
                    ? `${-count} days ago was `
                    : `${count} days after today is `}
                {date.toDateString()}
            </p>
        </div>
    );
}
