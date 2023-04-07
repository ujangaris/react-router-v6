import React from 'react'
import { Link } from 'react-router-dom'

const ContactPage = () => {
  return (
    <div className='contact-page'>
      {' '}
      <h1>Ini Adalah Halaman ContactPage</h1>
      <Link to='/' className='btn'>
        ke halaman Home
      </Link>
    </div>
  )
}

export default ContactPage
