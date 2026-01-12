import React from "react";
import Signup from "../components/Auth/Signup";
import '../styles/auth.css'

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
