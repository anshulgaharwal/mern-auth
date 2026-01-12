import React, { useState } from "react";
import AuthOptions from "./AuthOptions";
import EmailForm from "./EmailForm";
import PhoneForm from "./PhoneForm";
import OTPForm from "./OTPForm";
import "../../styles/auth.css";

const AuthModal = ({ onClose }) => {
  const [step, setStep] = useState("options");

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="close">
          ✕
        </button>

        {step === "options" && <AuthOptions setStep={setStep} />}
        {step === "email" && <EmailForm setStep={setStep} />}
        {step === "phone" && <PhoneForm setStep={setStep} />}
        {step === "otp" && <OTPForm onSuccess={onClose} />}
      </div>
    </div>
  );
};

export default AuthModal;
