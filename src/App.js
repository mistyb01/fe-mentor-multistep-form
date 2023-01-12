import React, { useState } from "react";
import './App.css';
import Form from './components/Form';
import Sidebar from './components/Sidebar';
import Navigation from "./components/Navigation";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  
  return (
    <main>
      <Sidebar step={currentStep} />
      <Form step={currentStep} />
      <Navigation step={currentStep}
          handleNextStep={() => {setCurrentStep(prev => prev + 1)}} 
          handlePrevStep={() => {setCurrentStep(prev => prev - 1)}} />

      {/* <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
          >Frontend Mentor</a
        >. Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </main>
  );
}

export default App;
