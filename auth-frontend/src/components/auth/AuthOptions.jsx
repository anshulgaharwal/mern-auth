const AuthOptions = ({ setStep }) => {
  return (
    <>
      <h2>Get started</h2>

      <button
        className="google-btn"
        onClick={() => {
          console.log("Google clicked");
          setStep("otp");
        }}
      >
        Continue with Google
      </button>

      <button
        className="secondary"
        onClick={() => {
          console.log("Phone clicked");
          setStep("phone");
        }}
      >
        Continue with phone
      </button>

      <div className="divider">OR</div>

      <button
        className="secondary"
        onClick={() => {
          console.log("Email clicked");
          setStep("email");
        }}
      >
        Continue with email
      </button>
    </>
  );
};

export default AuthOptions;
