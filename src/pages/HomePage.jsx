import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='home-page'>
      <h1>Ini Adalah Halaman HomePage</h1>
      <Link to='/about' className='btn'>
        ke halaman About
      </Link>

      <Link to='/contact' className='btn'>
        ke halaman Contact
      </Link>
    </div>
  )
}

export default HomePage
