import stretch from '../assets/stretch.jpg'
import Image from 'next/image';

const LowerImage = () => {
  return (
    <figure>
      <div>
        <Image
          className='lower-image'
          src={stretch}
          alt="Runner stretching on a track."
          >
        </Image>
      </div>
    </figure>
  )
}

export default LowerImage