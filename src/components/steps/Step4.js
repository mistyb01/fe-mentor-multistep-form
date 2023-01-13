import React from "react";

function Step4() {
    return (
        <section className="form-container results">
          <h1>Finishing up</h1> 
          <p>Double-check everything looks OK before confirming.</p>
          <div className="results-table">

            <div className="results-row">
              <div>
              <p><strong>Arcade (monthly)</strong></p>
              <p className="change-text"><u>Change</u></p>
              </div>
              <p className="result-cost"><strong>$90/yr</strong></p>
            </div>

            <hr/>

            <div className="results-row">
              <p>Online service</p>
              <p className="result-cost"><strong>+$10/yr</strong></p>
            </div>

            <div className="results-row">
              <p>Larger storage</p>
              <p className="result-cost"><strong>+$20/yr</strong></p>
            </div>
          </div>

          <div className="results-row last">
            <p>Total (per year)</p>
            <p className="cost">$120/yr</p>
          </div>

        </section>
    )
}

export default Step4;