import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/main-logo.jpeg';
import logo2 from '../assets/main-logo-blue-transparent.png';
import './NavBarStyles.css';

const NavBar = () => {
  return (
    <header className='header'>
      <div className="logo">
      <Link href="/">
        <Image src={logo2} alt="Dumbell with app name Body Buddy beside to the right."></Image>
      </Link>
      </div>
      <div className="links">
        <Link href="/login" className="btn full-rounded">
          <span>Log In</span>
          <div className="border full-rounded"></div>
        </Link>
        <Link href="/signup" className="btn-signup full-rounded">
          <span>Sign Up</span>
          <div className="border full-rounded"></div>
        </Link>
        <Link href="/workout" className="btn-signup full-rounded">
          <span>Workout</span>
          <div className="border full-rounded"></div>
        </Link>
      </div>
    </header>
  )
}

export default NavBar