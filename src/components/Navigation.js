import React from "react";

function Navigation(props) {
    return (
        <section className="form-navigation-buttons">
            {props.step < 4 && <button onClick={props.handleNextStep} className="next-button">Next Step</button>}
            {props.step === 4 && <button onClick={props.handleNextStep} className="next-button">Confirm</button>}
            {props.step > 1 && props.step < 5 && <button onClick={props.handlePrevStep} className="back-button">Go Back</button>}
        </section>
    )
}

export default Navigation;
