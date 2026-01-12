const PhoneForm = ({ setStep }) => {
  return (
    <>
      <h2>Continue with phone</h2>

      <input type="tel" placeholder="Mobile number" />

      <button
        className="primary"
        onClick={() => {
          console.log("Phone OTP");
          setStep("otp");
        }}
      >
        Send OTP
      </button>
    </>
  );
};

export default PhoneForm;
