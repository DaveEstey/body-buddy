'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/main-logo.jpeg';
import logo2 from '../assets/main-logo-blue-transparent.png';
import './NavBarStyles.css';

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);



  return (
    <header className='header'>
      <div className="logo">
      <Link href="/">
        <Image src={logo2} alt="Dumbell with app name Body Buddy beside to the right."></Image>
      </Link>
      </div>
      <div className={click ? "nav-menu active" : "nav-menu"}>
        <Link href="/login" className="btn full-rounded" onClick={handleClick}>
          <span>Log In</span>
          <div className="border full-rounded"></div>
        </Link>
        <Link href="/login" className="btn-signup full-rounded" onClick={handleClick}>
          <span>Sign Up</span>
          <div className="border full-rounded"></div>
        </Link>
        <Link href="/workout" className="btn-signup full-rounded" onClick={handleClick}>
          <span>Workout</span>
          <div className="border full-rounded"></div>
        </Link>
      </div>
      <div className="hamburger" onClick={handleClick}>
          {click ? (
          <FaTimes size={20} style={{ color: "#000" }}/>
          ) : (
          <FaBars size={20} style={{ color: "#000" }}/>
          )}
        </div>
    </header>
  )
}

export default NavBar