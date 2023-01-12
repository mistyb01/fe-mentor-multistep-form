import './App.css';

function App() {
  return (
    <div className="App">
      <section id="sidebar">
      <div class="step-section">
        <span class="step-text">Step 1</span>
        <span class="step-title">Your info</span>
      </div>

      <div class="step-section">
        <span class="step-text">Step 2</span>
        <span class="step-title">Select plan</span>
      </div>

      <div class="step-section">
        <span class="step-text">Step 3</span>
        <span class="step-title">Add-ons</span>
      </div>

      <div class="step-section">
        <span class="step-text">Step 4</span>
        <span class="step-title">Summary</span>
      </div>
    </section>

      <main>
      <section class="form-step-1">
        Personal info Please provide your name, email address, and phone number.
        Name e.g. Stephen King Email Address e.g. stephenking@lorem.com Phone
        Number e.g. +1 234 567 890 Next Step
      </section>

      <section class="form-step-2">
        Select your plan You have the option of monthly or yearly billing.
        Arcade $9/mo Advanced $12/mo Pro $15/mo Monthly Yearly
      </section>

      <section class="form-step-3">
        Pick add-ons Add-ons help enhance your gaming experience. Online service
        Access to multiplayer games +$1/mo Larger storage Extra 1TB of cloud
        save +$2/mo Customizable Profile Custom theme on your profile +$2/mo Go
        Back Next Step
      </section>

      <section class="form-step-4">
        Finishing up Double-check everything looks OK before confirming.
      </section>

      {/* <!-- Dynamically add subscription and add-on selections here --> */}

      <section class="form-step-5">
        Thank you! Thanks for confirming your subscription! We hope you have fun
        using our platform. If you ever need support, please feel free to email
        us at support@loremgaming.com.
      </section>

      <section class="form-navigation-buttons">Go Back Next Step</section>
    </main>

    <div class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by <a href="#">Your Name Here</a>.
    </div>
    </div>
  );
}

export default App;
