import { copyrightSign } from '../assets/icons'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col max-lg:items-center'>
        <div className='flex flex-col items-start max-lg:items-center'>
          <a href='/'>
            <img src={footerLogo} alt='footerLogo' width={150} height={46} />
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm max-lg:text-center'>
            Get shoes ready for the new term at your nearest Nike store. Find{' '}
            Your perfect Size In Store. Get Rewards
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon, index) => (
              <div
                key={index}
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
              >
                <img
                  key={icon.alt}
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap max-md:flex-col max-md:items-center max-md:text-center max-md:gap-8'>
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4
                key={section.title}
                className='text-white font-montserrat text-2xl leading-normal font-medium mb-6'
              >
                {section.title}
              </h4>
              <ul key={section.links}>
                {section.links.map((link, index) => (
                  <li
                    className='mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer'
                    key={index}
                  >
                    <a href={link.link} key={link.link}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            className='rounded-full m-0'
            src={copyrightSign}
            alt='copyright'
            width={20}
            height={20}
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer
