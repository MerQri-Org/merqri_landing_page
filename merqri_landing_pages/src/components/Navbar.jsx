import { useState } from 'react'
import { navLinks } from '../constants'
// import logo from '../assets/logo.png'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='flex py-6 items-center justify-between navbar mx-20'>
      <div>
        <img src="/images/logo.png" alt='logo' className='h-8' />
      </div>
      <div className='flex items-center'>
        <ul className='flex ml-10'>
          {navLinks.map((link, index) => (
            <li key={index} className='ml-6'>
              <a href={link.href} className='text-sm font-semibold text-gray-600 hover:text-black'>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <button className={`ml-4 bg-primary text-white font-semibold py-2 px-4 rounded-lg cursor-pointer hover:scale-[1.1]`}>Join Waitlist</button>
    </nav>
  )
}

export default Navbar