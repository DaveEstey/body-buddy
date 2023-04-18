import stretch from '../assets/stretch.jpg'
import Image from 'next/image';
import Link from 'next/link';

const LowerImage = () => {
  return (
    <figure>
      <div className="lower-image-container">
        <Image
          className="lower-image"
          src={stretch}
          alt="Runner stretching on a track."
          >
        </Image>
        <div className="workout-planner">
          <h1>Begin your fitness journey today!</h1>
          <h4>Click below to sign up!</h4>
          <div className="lower-sign-up">
            <Link href="/login" className="btn-signup full-rounded">
              <span>Sign Up</span>
              <div className="border full-rounded"></div>
            </Link>
          </div>
        </div>
      </div>
    </figure>
  )
}

export default LowerImage