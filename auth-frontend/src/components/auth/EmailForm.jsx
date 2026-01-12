const EmailForm = ({ setStep }) => {
  return (
    <>
      <h2>Continue with email</h2>

      <input type="email" placeholder="Email address" />
      <input type="password" placeholder="Password" />

      <button
        className="primary"
        onClick={() => {
          console.log("Email continue");
          setStep("otp");
        }}
      >
        Continue
      </button>
    </>
  );
};

export default EmailForm;
