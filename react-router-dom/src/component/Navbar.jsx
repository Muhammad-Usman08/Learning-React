import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav>
        <ul className='flex justify-evenly mt-2'>
            <Link to={'/'}>Home</Link>
            <Link to={'about'}>About</Link>
            <Link to={'contact'}>Contact</Link>
        </ul>
    </nav>
    
    </>
  )
}

export default Navbar