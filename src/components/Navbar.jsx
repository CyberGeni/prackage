import React from 'react'
import Menu from '../assets/icons/menu.svg'
import Close from '../assets/icons/close.svg'

function Navbar() {
  return (
    <header className="relative p-8 flex justify-between mx-auto list-none">
        <h1 className="font-bold text-2xl">prackage</h1>
        <div className="hidden flex flex-col justify-between w-full h-screen text-2xl space-y-4 absolute bg-white">
          <div className="flex justify-between px-10 py-8">  
            
            <img 
              className="w-4 cursor-pointer"
              src={Close} alt="" />
          </div>
            
          <nav className="space-y-5 px-10 h-full">
            <li>Home</li>
            <li>About us</li>
            <li>Pricing</li>
            <div>
              <button>Log In</button>
            </div>
          </nav>
          <div className="flex flex-col">
            <button className="text-xl w-full bg-blue-600 mb-0 text-white px-6 py-4">Sign Up</button>
          </div>
        </div>
        <img src={Menu} alt="" />
    </header>
  )
}

export default Navbar