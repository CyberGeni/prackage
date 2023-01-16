import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
function Layout() {
  return (
    <motion.div className='font-[BrOmega] '>
        <Navbar />
        <Outlet />
    </motion.div>
  )
}

export default Layout