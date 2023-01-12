import React from "react";

function Step1() {
    return (
        <section className="form-step-1">
            <h1>Personal info</h1>
            <span>Please provide your name, email address, and phone number.</span>
            <form>
            <label htmlFor="fullName">Name</label>
            <input type="text" name="fullName" placeholder="e.g. Stephen King"></input>
            <label htmlFor="email">Email Address</label>
            <input type="text" name="email" placeholder="e.g. stephenking@lorem.com"></input> 
            <label htmlFor="phone">Phone Number</label> 
            <input type="text" name="phone" placeholder="e.g. +1 234 567 890"></input>                                                                                                           
            </form>
      </section>
    )
}

export default Step1;