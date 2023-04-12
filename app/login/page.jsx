'use client';

import { useState } from 'react';
import './LoginPageStyles.css'
import rack from '../assets/squat-rack.jpg';
import Image from 'next/image';
import Link from 'next/link';


const LoginPage = () => {

  const [isActive, setActive] = useState('false');
  const [registrationData, setRegistrationData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [logInData, setLogInData] = useState({
    email: '',
    password: '',
  })

  const updateRegistration = (e) => {
    setRegistrationData({
      ...registrationData,
      [e.target.name]: e.target.value
    });
  };

  const updateLogIn = (e) => {
    setLogInData({
      ...logInData,
      [e.target.name]: e.target.value
    });
  };

  const handleSwitch = (e) => {
    e.preventDefault();
    setActive(!isActive);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
  }

  return (
    // Following form created by Florin Pop and posted at https://freefrontend.com/css-login-forms/ JavaScript refactored for React by dev team.
    <div className={isActive ? "container" : "container right-panel-active" } id="container">
	    <div className="form-container sign-up-container">
		    <form action="#">
			    <h1>Create Account</h1>
			    {/* <div class="social-container">
            <Link></Link>
				    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
			      <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
			      <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
		      </div> */}
		      <span>or use your email for registration</span>
					<label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={registrationData.name} onChange={updateRegistration}/>
          <label htmlFor="email">Email</label>
					<input type="email" id="email" name="email" value={registrationData.email} onChange={updateRegistration}/>
					<label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={registrationData.password} onChange={updateRegistration}/>
					<button>Sign Up</button>
		    </form> 
	    </div>
	    <div className="form-container sign-in-container">
		    <form action="#">
          <h1>Sign in</h1>
          {/* <div class="social-container">
            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
          </div> */}
          <span>or use your account</span>
          <label htmlFor="logInEmail">Email</label>
          <input type="email" id="logInemail" name="logInEmail" value={logInData.email} onChange={updateLogIn}/>
          <label htmlFor="logInPassword">Password</label>
          <input type="password" id="logInPassword" name="logInPassword" value={logInData.password} onChange={updateLogIn}/>
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
	    </div>
	    <div className="overlay-container">
		    <div className="overlay">
			    <div className="overlay-panel overlay-left">
				    <h1>Welcome Back!</h1>
				    <p>To keep connected with us please login with your personal info</p>
				    <button onClick={handleSwitch} className="ghost" id="signIn">Sign In</button>
			    </div>
			    <div className="overlay-panel overlay-right">
				    <h1>Hello, Friend!</h1>
				    <p>Enter your personal details and start journey with us</p>
				    <button onClick={handleSwitch} className="ghost" id="signUp">Sign Up</button>
			    </div>
		    </div>
	    </div>
    </div>
  )
}

export default LoginPage