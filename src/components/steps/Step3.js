import React from "react";

function Step3() {
    return (
        <section className="form-container">
          <h1>Pick add-ons</h1> 
          <p>Add-ons help enhance your gaming experience.</p> 
          
          
          <div className="option">
            <div className="checkbox-and-text">
              <input type="checkbox"/>
              <div className="option-text">
                <strong>Online service</strong>
                <p>Access to multiplayer games</p>
              </div>
            </div>
            <p className="cost">+$1/mo</p>
          </div>

          <div className="option">
            <div className="checkbox-and-text">
              <input type="checkbox"/>
              <div className="option-text">
                <strong>Larger storage</strong>
                <p>Extra 1TB of cloud save</p>
              </div>
            </div>
            <p className="cost">+$2/mo</p>
          </div>

          <div className="option">
            <div className="checkbox-and-text">
              <input type="checkbox"/>
              <div className="option-text">
                <strong>Customizable Profile</strong>
                <p>Custom theme on your profile</p>
              </div>
            </div>
            <p className="cost">+$2/mo</p>
          </div>
          
        </section>
    )
}

export default Step3;