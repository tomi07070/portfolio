import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'


export const Navbar = () => {
  
  const [navVisible, setNavVisible] = useState(false);

  const handleAbrirClick = () => {
    setNavVisible(true);
  };

  const handleCerrarClick = () => {
    setNavVisible(false);
  };

  return (
    <>
      <header className='header'>
      <nav className={`nav ${navVisible ? 'visible' : ''}`} id='nav'>
        <div className="cerrar">
          <button onClick={handleCerrarClick}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
          <ul className='ul-nav' id='ul-n'>
            <li className='li-nav'><NavLink id='home' className='navlink-nav' to={'/home'}><i class="fa-solid fa-house"></i></NavLink></li>
            <li className='li-nav'><NavLink id='proyects' className='navlink-nav' to={'/proyects'}><i class="fa-solid fa-briefcase"></i></NavLink></li>
            <li className='li-nav'><NavLink id='skills' className='navlink-nav' to={'/skills'}><i class="fa-solid fa-gears"></i></NavLink></li>
            <li className='li-nav'><NavLink id='contact' className='navlink-nav' to={'/contact'}><i class="fa-solid fa-user"></i></NavLink></li>
          </ul>
          <div className='div-nav'>
          <ul className='ml-3' id='ul1-n'>
            <li className='li2-nav'><a className='a-nav' target='_blank' href ='https://www.instagram.com/'><i class="fa-brands fa-instagram"></i></a></li>
            <li className='li2-nav'><a className='a-nav'   target='_blank' href='https://www.tiktok.com/'><i class="fa-brands fa-tiktok"></i></a></li>
            <li className='li2-nav'><a className='a-nav' target='_blank'  href='https://www.facebook.com/'><i class="fa-brands fa-facebook-f"></i></a></li>
            <li className='li2-nav'><a className='a-nav' target='_blank'  href='https://github.com/tomi07070'><i class="fa-brands fa-github"></i></a></li>
        </ul>
        </div>
        </nav>
        <div className="bars-cont" id="abrir" onClick={handleAbrirClick}>
          <i className="fa-solid fa-bars"></i>
      </div>
        </header>
    </>
  )
}
