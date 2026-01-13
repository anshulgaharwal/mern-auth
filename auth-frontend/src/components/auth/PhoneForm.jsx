import { startAuth } from "../../utils/api";

const PhoneForm = ({ setStep }) => {
  const handleSendOtp = async () => {
    try {
      const phone = document.querySelector("#phone").value;
      const data = await startAuth({ phone });
      if (data.next === "PHONE_OTP") {
        setStep("otp");
      }
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <>
      <h2>Continue with phone</h2>

      <input type="tel" placeholder="Mobile number" />

      <button className="primary" onClick={handleSendOtp}>
        Send OTP
      </button>
    </>
  );
};

export default PhoneForm;
