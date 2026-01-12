import React from "react";

const EmailForm = () => {
  return (
    <>
      <h2>Continue with email</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="password" />
      <button className="primary" onClick={() => setStep("otp")}>Continue</button>
    </>
  );
};

export default EmailForm;
