const OTPForm = ({ setStep }) => {
  return (
    <>
      <h2>Verify</h2>

      <input placeholder="Enter OTP" />

      <button
        className="primary"
        onClick={() => {
          alert("Verified (mock)");
        }}
      >
        Verify
      </button>
    </>
  );
};

export default OTPForm;
