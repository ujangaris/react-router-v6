import React from 'react'
import { NavLink } from 'react-router-dom'
const NavComponents = () => {
  return (
    <div className='nav-com'>
    {/* buat path halaman yang dituju */}
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
    </div>
  )
}

export default NavComponents
