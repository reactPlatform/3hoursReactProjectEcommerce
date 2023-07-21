import React from 'react'
import '../index.css';
const Navbar = () => {
  return (
    <div className='navbarContainer'>
        <a href='/'>Homepage</a>
        <a href='/store'>Store</a>
        <a href='/cart'>Cart</a>
    </div>
  )
}

export default Navbar