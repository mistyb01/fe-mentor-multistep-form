import React from "react";

function Navigation(props) {
    return (
        <section className="form-navigation-buttons">
            {props.step < 4 && <button onClick={props.handleNextStep} className="next-button">Next Step</button>}
            {props.step === 4 && <button onClick={props.handleNextStep} className="next-button confirm">Confirm</button>}
            {props.step > 1 && <button onClick={props.handlePrevStep} className="back-button">Go Back</button>}
        </section>
    )
}

export default Navigation;
