import React, { useState } from "react";
import AuthModal from "../components/Auth/AuthModal";
import '../styles/landing.css'

const Landing = () => {
    const [showAuth, setShowAuth] = useState(false);
  return(
    <>
    <div className="landing">
        <h1>Welcome</h1>
        <button onClick={() => setShowAuth(true)}>
            SignUp / Login
        </button>
    </div>
    {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}

    </>
  )
};

export default Landing;
