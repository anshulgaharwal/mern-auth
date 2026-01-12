import React, { useState } from "react";
import AuthOptions from "./AuthOptions";
import EmailForm from "./EmailForm";
import PhoneForm from "./PhoneForm";
import  "../../styles/auth.css";
import OTPForm from "./OTPForm";

const AuthModal = () => {
  const [step, setStep] = useState("options");
  return (
    <>
      <div className="overlay" onClick={onclose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
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
