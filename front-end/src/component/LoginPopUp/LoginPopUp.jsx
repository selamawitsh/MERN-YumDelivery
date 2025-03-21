import React, { useState } from 'react'

import './LoginPopUp.css'
import { assets } from './../../assets/frontend_assets/assets';
function LoginPopUp({setShowLogin}) {
  const [currentState,setCurrentState]=useState("Sign Up")
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
          {currentState==="Login"?<></>:<input type="text" placeholder='your name' required />}
          
          <input type="email" placeholder='your email' required />
          <input type="password" placeholder='password' required />
          <button>{currentState==="Sign Up"? "Create Account":"Login"}</button>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>
              By continuing, i agree to the terms of use and privacy policy.
            </p>
          </div>
          <p>
            {currentState==="Login"
              ?<p>Create a new account? <span onClick={()=>setCurrentState("Sign up")}>Click here</span></p>
              :<p>Alredy have an accont?<span onClick={()=>setCurrentState("Login")}>Login</span></p>}
            
            
          </p>
        </div>
      </form>
    </div>
  )
}

export default LoginPopUp