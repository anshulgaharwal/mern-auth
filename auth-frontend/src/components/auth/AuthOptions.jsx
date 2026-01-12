import React from "react";

const AuthOptions = () => {
  return (
    <>
      <h2>Get Started</h2>
      <button className="oauth google">
        Continue with Google
      </button>
      <button className="oauth" onClick={() => setStep("phone")}>
        Mobile Number
      </button>
      <div className="divider">
        OR
      </div>
      <button className="email-btn" onClick={() => setStep("email")}>
        Email Login
      </button>
    </>
  );
};

export default AuthOptions;
