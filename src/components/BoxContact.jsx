import React from "react";

const BoxContact = () => {
  return (
    <div className="ask-question-container">
      <form className="input-container">
        <h2>If you have any question, please contact us</h2>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email id" />
        <input type="text" placeholder="Phone no" />
        <textarea type="text" row="4" placeholder="How can we help you?" />
        <button className="">Submit</button>
      </form>
    </div>
  );
};

export default BoxContact;
