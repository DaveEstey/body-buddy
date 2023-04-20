'use client';

import { useState } from 'react';
import './LoginPageStyles.css'
import { useRouter } from 'next/navigation';
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const router = useRouter();

  const [isActive, setActive] = useState(false);
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
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    
    if (fieldName === 'logInEmail') {
      setLogInData({
        ...logInData,
        email: fieldValue
      });
    } else if (fieldName === 'logInPassword') {
      setLogInData({
        ...logInData,
        password: fieldValue
      });
    }
  };

  const handleSwitch = (e) => {
    e.preventDefault();
    setActive(!isActive);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const response = await signIn('credentials', {
      redirect: false,
      email: registrationData.email,
      password: registrationData.password,
    });
    if (response?.error) {
      console.error(response.error);
    } else {
      router.push('/profile');
    }
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
    const response = await signIn('credentials', {
      redirect: false,
      email: logInData.email,
      password: logInData.password,
    });
    if (response?.error) {
      console.error(response.error);
    } else {
      router.push('/profile');
    }
  };

  return (
    // Following form created by Florin Pop and posted at https://freefrontend.com/css-login-forms/ JavaScript refactored for React by Body Buddy dev team.
      <div className="login-bg">
        <div className={isActive ? "container" : "container right-panel-active" } id="container">
          <div className="form-container sign-up-container">
            <form onSubmit={handleSignUp}>
              <h1>Create Account</h1>
              {/* <div class="social-container">
                <Link></Link>
                <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
              </div> */}
              <span>Choose a username and email for registration</span>
              <label htmlFor="name">Username</label>
              <input type="text" id="name" name="name" value={registrationData.name} onChange={updateRegistration}/>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={registrationData.email} onChange={updateRegistration}/>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" value={registrationData.password} onChange={updateRegistration}/>
              <button className="sign-up-btn">Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form onSubmit={handleLogIn}>
              <h1>Sign in</h1>
              {/* <div class="social-container">
                <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
              </div> */}
              <span>to your account</span>
              <label htmlFor="logInEmail">Email</label>
              <input type="email" id="logInEmail" name="logInEmail" value={logInData.email} onChange={updateLogIn}/>
              <label htmlFor="logInPassword">Password</label>
              <input type="password" id="logInPassword" name="logInPassword" value={logInData.password} onChange={updateLogIn}/>
              {/* <a href="#">Forgot your password?</a> */}
              <button className="sign-in-btn">Sign In</button>
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
                <p>Enter your personal details and start your fitness journey</p>
                <button onClick={handleSwitch} className="ghost" id="signUp">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default LoginPage