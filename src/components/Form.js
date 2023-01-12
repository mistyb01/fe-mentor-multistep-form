import React from "react";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";

function Form(props) {
    return (
        <main>
            <Step1/>
            <section className="form-navigation-buttons">Go Back Next Step</section>
      </main>
  
    )
}

export default Form;