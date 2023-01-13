import React from "react";
import { ReactComponent as ArcadeIcon } from "../../assets/images/icon-arcade.svg";
import { ReactComponent as AdvancedIcon } from "../../assets/images/icon-advanced.svg";
import { ReactComponent as ProIcon } from "../../assets/images/icon-pro.svg";

function Step2() {
    return (
        <section className="form-container">
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
            <section className="options-container">
                <div className="option left">
                    <ArcadeIcon/>
                    <div className="option-text">
                        <strong>Arcade</strong>
                        <p>$9/mo</p>
                    </div>
                </div>

                <div className="option left">
                    <AdvancedIcon/>
                    <div className="option-text">
                        <strong>Advanced</strong>
                        <p>$9/mo</p>
                    </div>
                </div>

                <div className="option left">
                    <ProIcon/>
                    <div className="option-text">
                        <strong>Pro</strong>
                        <p>$9/mo</p>
                    </div>
                </div>
            </section>
            <section className="billing-option-toggle">
                
            </section>
      </section>
    )
}

export default Step2;