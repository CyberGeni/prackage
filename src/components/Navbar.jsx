import React from 'react'; import { motion, AnimatePresence } from "framer-motion";
import Menu from '../assets/icons/menu.svg'
import Close from '../assets/icons/close.svg'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../App.css'
function Navbar() {

  const [isActive, setActive] = useState(false)

  function handleClick() {  
    isActive ? setActive(false) : setActive(true)
    if (window.innerWidth > 768) {
      setActive(true)
    }
  }

  return (
    <header className={isActive ? "fixed flex justify-between mx-auto list-none overflow-hidden w-full z-50" : "z-50 fixed flex justify-between mx-auto list-none overflow-hidden w-full backdrop-blur-3xl"}>
        <NavLink to="/" className="px-10 py-6 font-bold text-2xl">prackage</NavLink>
        <motion.div className=
          {isActive ? "left-[0vw] md:left-unset transition-all flex flex-col md:flex-row justify-between w-full h-screen md:h-fit text-2xl md:text-base space-y-4 md:space-y-0 fixed md:relative bg-white" : "transition-all left-[100vw] absolute md:relative md:flex md:justify-between w-full md:left-0 md:text-lg md:my-2"}>
          <motion.div className="flex justify-between px-10 py-6 md:px-0 md:py-0">    
            <Link to="/" className="font-bold md:hidden">prackage</Link>
            <img 
              onClick={handleClick}
              className="w-4 cursor-pointer md:hidden"
              src={Close}
              alt="Close Icon"
              />
          </motion.div>
          <nav className="space-y-7 md:w-full md:space-y-0 flex flex-col md:flex-row md:items-center md:justify-center px-10 md:py-3 md:px-0 md:space-x-5">
            <NavLink className='nav hover:underline hover:decoration-4 hover:underline-offset-4 hover:decoration-dotted  hover:decoration-blue-500 ' to="/">Home</NavLink>
            <NavLink className='nav hover:underline hover:decoration-4 hover:underline-offset-4 hover:decoration-dotted  hover:decoration-blue-500 ' to="/about">About us</NavLink>
            <NavLink className='nav hover:underline hover:decoration-4 hover:underline-offset-4 hover:decoration-dotted  hover:decoration-blue-500 ' to="/pricing">Pricing</NavLink>
            <NavLink className='nav hover:underline hover:decoration-4 hover:underline-offset-4 hover:decoration-dotted  hover:decoration-blue-500 ' to="/blog">Blog</NavLink>
          </nav>

          <motion.div className="flex flex-col w-auto md:space-x-8 md:pr-10 md:flex-row md:items-center md:justify-center space-y-4 md:space-y-0">
            <button className="md:w-max hover:text-xl transition-all">Log In</button>
            <button className="text-xl md:text-base md:rounded  md:w-max w-full bg-blue-600 mb-0 text-white px-6 py-4 md:py-2 md:hover:bg-blue-700 transition-all ">Sign Up</button>
          </motion.div>
        </motion.div>
        <img onClick={handleClick} className="px-10 py-8 md:hidden md:h-fit" src={Menu} alt="" />
    </header>
  )
}

export default Navbar