import React from 'react'
import './Navbar.scss'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt='' />
      <ul className='nav-links'>
        <li>
          <a href='/' className='nav-link'>
            home
          </a>
        </li>
        <li>
          <a href='/' className='nav-link'>
            about
          </a>
        </li>
        <li>
          <a href='/' className='nav-link active'>
            tours
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
