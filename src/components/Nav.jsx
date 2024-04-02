import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
import { useState } from 'react'

const Nav = () => {
  const [activeMenu, setactiveMenu] = useState(false)

  const handleMenu = () => {
    if (activeMenu) {
      setactiveMenu(false)
      document.body.style.overflow = 'visible'
    } else {
      setactiveMenu(true)
      document.body.style.overflow = 'hidden'
    }
  }

  document.body.addEventListener('click', (e) => {
    if (e.target.id === 'nav-link') {
      setactiveMenu(false)
      document.body.style.overflow = 'visible'
    }
  })

  return (
    <header className='padding-x py-8 absolute z-20 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img src={headerLogo} alt='logo' width={130} height={29} />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                className='font-montserrat leading-normal text-lg text-slate-gray max-lg:text-white'
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ul
          className={`hidden max-lg:flex max-lg:flex-col bg-coral-red flex-1 justify-center items-center gap-10 absolute ${
            activeMenu ? 'top-0' : 'top-[-1000px]'
          } right-0 h-screen left-0 p-10 z-10 transition-all delay-100 ease-in`}
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                id='nav-link'
                className='font-montserrat leading-normal text-lg text-slate-gray max-lg:text-white'
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className='hidden max-lg:block cursor-pointer relative z-10'
          onClick={handleMenu}
        >
          <img src={hamburger} alt='hamburger' width={25} height={25} />
        </button>
      </nav>
    </header>
  )
}

export default Nav
