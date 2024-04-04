import { shoe8 } from '../assets/images'
import Button from '../components/Button'

const SuperQuality = () => {
  return (
    <section
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
      id='about-us'
    >
      <div className='flex flex-col flex-1 max-lg:items-center'>
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg max-lg:text-center'>
          We Provide You <span className='text-coral-red'>Super</span>{' '}
          <span className='text-coral-red'>Quality</span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text max-lg:text-center'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text max-lg:text-center'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          className='object-contain'
          src={shoe8}
          alt='shoe8'
          width={570}
          height={522}
        />
      </div>
    </section>
  )
}

export default SuperQuality
