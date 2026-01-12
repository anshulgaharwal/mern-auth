import React from "react";

const OTPForm = ({ onSuccess }) => {
  return (
    <>
      <h2>Verify your account</h2>
      <p>Enter the code we sent you</p>

      <input placeholder="6-digit code" />

      <button
        className="primary"
        onClick={() => {
          alert("Verified successfully (mock)");
          onSuccess(); 
        }}
      >
        Verify
      </button>
    </>
  );
};


export default OTPForm;
