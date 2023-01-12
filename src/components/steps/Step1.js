import React from "react";

function Step1() {
    return (
        <section className="form-step-1">
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>
            <form className="user-info-form">
                <span>
                    <label htmlFor="fullName">Name</label>
                    <input type="text" id="fullName" name="fullName" placeholder="e.g. Stephen King"></input>
                </span>

                <span>
                    <label htmlFor="email">Email Address</label>
                    <input type="text" id="email" name="email" placeholder="e.g. stephenking@lorem.com"></input> 
                </span>

                <span>
                    <label htmlFor="phone">Phone Number</label> 
                    <input type="text" id="phone" name="phone" placeholder="e.g. +1 234 567 890"></input>    
                </span>                                                                                                        
            </form>
      </section>
    )
}

export default Step1;