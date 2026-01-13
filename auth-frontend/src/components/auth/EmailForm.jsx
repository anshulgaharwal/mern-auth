import { startAuth } from "../../utils/api";

const EmailForm = ({ setStep }) => {
  const handleContinue = async () => {
    try{
      const email = document.querySelector("#email").value;
      const data = await startAuth({email});
      if(data.next === "EMAIL_OTP"){
        setStep("otp");
      }
    }
    catch(err){
      alert(err.message);
    }
  }
  return (
    <>
      <h2>Continue with email</h2>

      <input type="email" placeholder="Email address" />
      <input type="password" placeholder="Password" />

      <button className="primary" onClick={handleContinue}>
        Continue
      </button>
    </>
  );
};

export default EmailForm;

//document: represents webpage
//querySelector finds element with id
//value: reads the value user typed