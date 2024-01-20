import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'
export const Navbar = () => {
  
  

  return (
    <>
      <header className='header'>
        <nav className='nav w-20 h-[690px] bg-zinc-900'>
          <ul className='ml-3'>
            <li className='text-xl p-4'><NavLink id='home' className='text-gray-500 hover:text-[#ffd700]' to={'/home'}><i class="fa-solid fa-house"></i></NavLink></li>
            <li className='text-xl p-4'><NavLink id='proyects' className='text-gray-500 hover:text-[#ffd700]' to={'/proyects'}><i class="fa-solid fa-briefcase"></i></NavLink></li>
            <li className='text-xl p-4'><NavLink id='skills' className='text-gray-500 hover:text-[#ffd700]' to={'/skills'}><i class="fa-solid fa-gears"></i></NavLink></li>
            <li className='text-xl p-4'><NavLink id='contact' className='text-gray-500 hover:text-[#ffd700]' to={'/contact'}><i class="fa-solid fa-user"></i></NavLink></li>
          </ul>
          <div className='absolute top-[500px]'>
          <ul className='ml-3'>
            <li className='text-xl p-2 ml-2'><a className='text-gray-500 hover:text-gray-100' target='_blank' href ='https://www.instagram.com/'><i class="fa-brands fa-instagram"></i></a></li>
            <li className='text-xl p-2 ml-2'><a className='text-gray-500 hover:text-gray-100'   target='_blank' href='https://www.tiktok.com/'><i class="fa-brands fa-tiktok"></i></a></li>
            <li className='text-xl p-2 ml-2'><a className='text-gray-500 hover:text-gray-100' target='_blank'  href='https://www.facebook.com/'><i class="fa-brands fa-facebook-f"></i></a></li>
            <li className='text-xl p-2 ml-2'><a className='text-gray-500 hover:text-gray-100' target='_blank'  href='https://github.com/tomi07070'><i class="fa-brands fa-github"></i></a></li>
        </ul>
        </div>
        </nav>
        </header>
    </>
  )
}
