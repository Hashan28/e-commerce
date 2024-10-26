import React from 'react'
import './css/Loggingsignup.css';

const Loggingsignup = () => {
  return (
    <div className='Loggingsignup'>
      <div className="loggingSignup-container">
        <h1>Sign Up</h1>
        <div className="loginSignup-feilds">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email-address'/>
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
        <div className="loginsign-agree">
          <input type="checkbox" name='' id=''  />
          <p>By continuing, I agree to the terms of use  & privacy and policy</p>
        </div>
      </div>
    </div>
  )
}

export default Loggingsignup