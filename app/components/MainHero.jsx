import Image from 'next/image';
import mainHero from '../assets/MainHero.jpg';

const MainHero = () => {
  return (
    <figure>
      <div className='main-hero'>
        <Image
          src={mainHero}
          alt="Woman performing a barbell bacck squat."
          priority
          >
        </Image>
      </div>
    </figure>
  )
}

export default MainHero