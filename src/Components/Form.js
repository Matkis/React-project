import React, { useState } from "react";
import "./FormStyles.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" value={name} onChange={handleNameChange} />
        <label>Email</label>
        <input
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="Please enter a valid email address"
          required
          value={email}
          onChange={handleEmailChange}
        />
        <label>Message</label>
        <textarea rows="6" placeholder="Enter your message" value={message} onChange={handleMessageChange} />
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
