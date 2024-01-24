import React from 'react'
import Logo from './Logo/Logo'
import Searchbar from './Search/Searchbar'
import Nav from './Nav'

const Navbar = () => {
  return (
    <header className='sticky top-0 z-50 bg-white p-5 shadow-md'>
      <div className='container grid grid-cols-3 relative'>
        <Logo />
        <Searchbar />
        <Nav />
      </div>
    </header>

  )
}

export default Navbar