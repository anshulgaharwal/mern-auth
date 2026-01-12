import React from "react";
import Signup from "../components/Auth/Signup";

const AuthPage = () => {
  return (
    <>
      <div className="auth-container">
        <div className="auth-box">
          <Signup />
        </div>
      </div>
    </>
  );
};

export default AuthPage;
