import React from 'react'
import Menu from '../assets/icons/menu.svg'
import Close from '../assets/icons/close.svg'
import { useState } from 'react'

function Navbar() {

  const [isActive, setActive] = useState(false)

  function handleClick() {  
    isActive ? setActive(false) : setActive(true)
    if (window.innerWidth > 768) {
      setActive(true)
    }
  }

  return (
    <header className="relative flex justify-between mx-auto list-none">
        <h1 className="px-10 py-8 font-bold text-2xl">prackage</h1>
        <div className=
          {isActive ? "left-[0vw] md:left-unset transition-all flex flex-col md:flex-row justify-between w-full h-screen md:h-fit text-2xl md:text-base space-y-4 md:space-y-0 fixed md:relative bg-white" : "transition-all left-[100vw] absolute md:relative md:flex md:justify-between w-full md:left-0 md:text-lg md:my-2"}>
          <div className="flex justify-between px-10 py-8 md:px-0 md:py-0">    
            <h1 className="font-bold md:hidden">prackage</h1>
            <img 
              onClick={handleClick}
              className="w-4 cursor-pointer md:hidden"
              src={Close}
              />
          </div>
          <nav className="space-y-7 md:w-full md:space-y-0 md:flex md:items-center md:justify-center px-10 md:py-8 md:px-0 md:space-x-5">
            <li>Home</li>
            <li>About us</li>
            <li>Pricing</li>
          </nav>

          <div className="flex flex-col w-auto md:space-x-3 md:pr-10 md:flex-row md:items-center md:justify-center space-y-4 md:space-y-0">
            <button className="md:w-full">Log In</button>
            <button className="text-xl md:text-base rounded w-full bg-blue-600 mb-0 text-white px-6 py-4 md:py-2 ">Sign Up</button>
          </div>
        </div>
        <img onClick={handleClick} className="px-10 py-8 md:hidden md:h-fit" src={Menu} alt="" />
    </header>
  )
}

export default Navbar