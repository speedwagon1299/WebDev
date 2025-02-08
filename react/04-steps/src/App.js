import { useState } from "react";

const messages = ["Learn React", "Apply for Jobs", "Invest your new income"];

export default function App() {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    function handlePrev() {
        if (step >= 2) {
            setStep((x) => x - 1);
        }
    }

    function handleNext() {
        if (step <= 2) {
            setStep((x) => x + 1);
        }
    }

    return (
        <>
            <button className="close" onClick={() => setIsOpen((x) => !x)}>
                &times;
            </button>

            {isOpen && (
                <div className="steps">
                    <div className="numbers">
                        <div className={step >= 1 ? "active" : ""}>1</div>
                        <div className={step >= 2 ? "active" : ""}>2</div>
                        <div className={step >= 3 ? "active" : ""}>3</div>
                    </div>

                    <p className="message">
                        Step {step}: {messages[step - 1]}
                    </p>

                    <div className="buttons">
                        <button
                            style={{
                                backgroundColor: "#7950f2",
                                color: "#fff",
                            }}
                            onClick={handlePrev}
                            // onClick={() => alert("Previous")}
                            // onMouseEnter={() => alert("Hovered Previous")}
                        >
                            Prev
                        </button>
                        <button
                            style={{
                                backgroundColor: "#7950f2",
                                color: "#fff",
                            }}
                            onClick={handleNext}
                            // onClick={() => alert("Next")}
                            // onMouseEnter={() => alert("Hovered Next")}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
