import React from 'react'
import Menu from '../assets/icons/menu.svg'
import Close from '../assets/icons/close.svg'
import { useState } from 'react'

function Navbar() {

  const [isActive, setActive] = useState(false)
  function handleClick() {
    isActive ? setActive(false) : setActive(true)
  }


  return (
    <header className="relative flex justify-between mx-auto list-none">
        <h1 className="px-10 py-8 font-bold text-2xl">prackage</h1>
        <div className={isActive ? "left-[0vw] transition-all flex flex-col justify-between w-full h-screen text-2xl space-y-4 fixed bg-white" : "transition-all left-[100vw] fixed"}>
          <div className="flex justify-between px-10 py-8">    
            <h1 className="font-bold">prackage</h1>
            <img 
              onClick={handleClick}
              className="w-4 cursor-pointer"
              src={Close} alt="" 
              />
          </div>
          <nav className="space-y-7 px-10">
            <li>Home</li>
            <li>About us</li>
            <li>Pricing</li>
          </nav>

          <div className="flex flex-col space-y-4">
            <button>Log In</button>
            <button className="text-xl w-full bg-blue-600 mb-0 text-white px-6 py-4">Sign Up</button>
          </div>
        </div>
        <img onClick={handleClick} className="px-10 py-8" src={Menu} alt="" />
    </header>
  )
}

export default Navbar