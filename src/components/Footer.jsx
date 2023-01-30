import React from 'react'; import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from 'react-router-dom'
import AOS from 'aos';
function Footer() {
    AOS.init();
  return (
    <footer className="bg-black px-12 py-12 sm:px-16 md:px-24 md:py-16">
        <motion.section className="pb-12">
            <p className="text-gray-200 text-lg w-1/2">Build your prackaged life now.</p>
            <button className="bg-blue-600 text-white rounded px-6 py-3 mt-4 hover:bg-blue-700 transition-all">View plans</button>
        </motion.section>
        <motion.section className="border-y border-gray-600 grid grid-cols-2 sm:grid-cols-4 gap-x-10 sm:gap-x-0 gap-y-4 py-12">
            <motion.div className="space-y-4 flex flex-col ">
                <NavLink to="/" className="text-gray-400 mt-7  text-sm">Product</NavLink>
                <NavLink to="/gifting" className="nav text-gray-200 flex flex-wrap">Gifting <span className="bg-slate-700 text-xs sm:text-[9px] lg:text-xs rounded-full px-2 py-1 ml-1">Coming Soon</span></NavLink>
                <NavLink to="/humark" className="nav text-gray-200">Solutions</NavLink>
                <NavLink to="/pricing" className="nav text-gray-200">Pricing</NavLink>
            </motion.div>
            <motion.div className="space-y-4 flex flex-col ">
                <span className="nav text-gray-400 mt-7 text-sm">Company</span>
                <NavLink to="/about" className="nav text-gray-200">About us</NavLink>
                <NavLink to="/press" className="nav text-gray-200">Press</NavLink>
                <NavLink to="/contact" className="nav text-gray-200">Contact</NavLink>
            </motion.div>
            <motion.div className="nav space-y-4 flex flex-col ">
                <span className="nav text-gray-400 mt-7 text-sm">Social</span>
                <NavLink to="/twitter" className="nav text-gray-200">Twitter</NavLink>
                <NavLink to="/linkedin" className="nav text-gray-200">LinkedIn</NavLink>
                <NavLink to="/facebook" className="nav text-gray-200">Facebook</NavLink>
            </motion.div>
            <motion.div className="nav space-y-4 flex flex-col ">
                <span className="nav text-gray-400 mt-7 text-sm">Legal</span>
                <NavLink to="/terms" className="nav text-gray-200">Terms</NavLink>
                <NavLink to="/privacy" className="nav text-gray-200">Privacy</NavLink>
            </motion.div>
        </motion.section>
        <motion.section className="nav md:flex md:justify-between md:items-center mt-6 md:mt-8">
            <h1 className="text-white text-4xl font-bold">prackage</h1>
            <p className="text-gray-400 text-sm my-4">&copy; 2023 Digital Prackage Limited. All rights reserved.</p>
        </motion.section>
    </footer>
  )
}

export default Footer