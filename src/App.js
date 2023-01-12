import React, { useState } from "react";
import './App.css';
import Form from './components/Form';
import Sidebar from './components/Sidebar';

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  
  return (
    <div className="App">
      <Sidebar step={currentStep} />
      <Form step={currentStep} 
        handleNextStep={() => {setCurrentStep(prev => prev + 1)}} 
        handlePrevStep={() => {setCurrentStep(prev => prev - 1)}} />

      {/* <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
          >Frontend Mentor</a
        >. Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </div>
  );
}

export default App;
