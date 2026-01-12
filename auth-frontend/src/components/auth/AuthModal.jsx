import React, { useState } from "react";
import AuthOptions from "./AuthOptions";
import EmailForm from "./EmailForm";
import PhoneForm from "./PhoneForm";

const AuthModal = () => {
  const [step, setStep] = useState("options");
  return (
    <>
      <div className="overlay">
        <div className="modal">
          <button onClick={onclose} className="close">
            X
          </button>
          {step === "options" && <AuthOptions setStep={setStep} />}
          {step === "email" && <EmailForm setStep={setStep} />}
          {step === "phone" && <PhoneForm setStep={setStep} />}
          {step === "otp" && <OTPForm setStep={setStep} />}
        </div>
      </div>
    </>
  );
};

export default AuthModal;
