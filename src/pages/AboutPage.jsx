import React from 'react'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <div className='about-page'>
      <h1>Ini Adalah Halaman AboutPage</h1>
      <Link to='/' className='btn'>
        ke halaman Home
      </Link>
    </div>
  )
}

export default AboutPage
