import { useState } from 'react'
import { arrowRight } from '../assets/icons'
import { bigShoe1 } from '../assets/images'
import Button from '../components/Button'
import ShoeCard from '../components/ShoeCard'
import { shoes, statistics } from '../constants'

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1)

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 max-xl:items-center'>
        <p className='text-xl font-montserrat text-coral-red'>
          Our Summer Collection
        </p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold max-xl:text-center'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 max-xl:pr-0'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm max-xl:text-center'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label='Shop now' iconUrl={arrowRight} />
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16 max-xl:justify-center'>
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-36 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoeImage}
          alt='shoe collection'
          className='object-contain relative z-10 w-[610px] h-[500px] max-wider:w-[460px] max-wider:h-[350px] max-xl:w-[490px] max-xl:h-[380px]'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] xl:left-[10%] max-sm:px-6 max-xl:left-[50%] max-xl:translate-x-[-50%]'>
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => {
                  setBigShoeImage(shoe)
                }}
                bigShoeImg={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
