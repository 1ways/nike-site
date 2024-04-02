import { star } from '../assets/icons'

const PopularProductsCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className='flex flex-col flex-1 w-full max-sm:w-full'>
      <img className='max-w-[280px] max-h-[280px]' src={imgURL} alt={name} />
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
