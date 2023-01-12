import React from "react";

function Sidebar(props) {
    return (
        <section id="sidebar">
        <div className="step-section">
          <span className="step-text">Step 1</span>
          <span className="step-title">Your info</span>
        </div>
  
        <div className="step-section">
          <span className="step-text">Step 2</span>
          <span className="step-title">Select plan</span>
        </div>
  
        <div className="step-section">
          <span className="step-text">Step 3</span>
          <span className="step-title">Add-ons</span>
        </div>
  
        <div className="step-section">
          <span className="step-text">Step 4</span>
          <span className="step-title">Summary</span>
        </div>
      </section>  
    )
}

export default Sidebar;