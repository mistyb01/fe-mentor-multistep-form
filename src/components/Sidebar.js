import React from "react";

function Sidebar(props) {
    return (
        <section id="sidebar">
        <div className="step-section">
          <span className={`step-circle${props.step === 1 ? ' active' : ''}`}>1</span>
          <div className="step-text-wrapper">
          <span className="step-text">Step 1</span>
          <span className="step-desc">Your info</span>
          </div>
        </div>
  
        <div className="step-section">
          <span className={`step-circle${props.step === 2 ? ' active' : ''}`}>2</span>
          <div className="step-text-wrapper">
            <span className="step-text">Step 2</span>
            <span className="step-title">Select plan</span>
          </div>
        </div>
  
        <div className="step-section">
          <span className={`step-circle${props.step === 3 ? ' active' : ''}`}>3</span>
          <div className="step-text-wrapper">
            <span className="step-text">Step 3</span>
            <span className="step-title">Add-ons</span>
          </div>
        </div>
  
        <div className="step-section">
          <span className={`step-circle${props.step === 4 ? ' active' : ''}`}>4</span>
          <div className="step-text-wrapper">
            <span className="step-text">Step 4</span>
            <span className="step-title">Summary</span>
          </div>
        </div>
      </section>  
    )
}

export default Sidebar;