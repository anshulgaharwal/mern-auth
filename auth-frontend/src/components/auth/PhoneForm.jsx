import React from 'react'

const PhoneForm = () => {
  return (
    <>
    <h2>Continue with mobile number</h2>
    <input type="tel" placeholder='Mobile Number'/>
    <button className='primary' onClick={() => setStep("otp")}>
        Send OTP
    </button>
    </>
  )
}

export default PhoneForm