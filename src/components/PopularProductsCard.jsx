import { star } from '../assets/icons'

const PopularProductsCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className='flex flex-col w-full max-sm:w-full cursor-pointer max-sm:items-center max-sm:max-w-[240px] max-sm:mx-auto'>
      <img
        className='max-md:block max-md:w-full max-md:h-full max-md:object-cover max-md:max-w-none max-md:max-h-none rounded-[20px]'
        src={imgURL}
        alt={name}
      />
      <div className='mt-8 flex justify-start items-center gap-2.5'>
        <img src={star} alt='rating' width={24} height={24} />
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>
          ({rating})
        </p>
      </div>
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
        {name}
      </h3>
      <p className='mt-2 font-semibold font-montserrat text-coral-red text-lg leading-normal'>
        {price}
      </p>
    </div>
  )
}

export default PopularProductsCard
