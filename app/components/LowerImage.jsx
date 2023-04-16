import stretch from '../assets/stretch.jpg'
import Image from 'next/image';
import Link from 'next/link';

const LowerImage = () => {
  return (
    <figure>
      <div>
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
            <Link href="/workout" className="btn full-rounded lower-sign-up">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </figure>
  )
}

export default LowerImage