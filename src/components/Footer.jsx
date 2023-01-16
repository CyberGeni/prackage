import React from 'react'; import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer className="bg-black px-12 py-12 sm:px-16 md:px-24 md:py-16">
        <section className="pb-12">
            <p className="text-gray-200 text-lg w-1/2">Build your prackaged life now.</p>
            <button className="bg-blue-600 text-white rounded px-6 py-3 mt-4 hover:bg-blue-700 transition-all">View plans</button>
        </section>
        <section className="border-y border-gray-600 grid grid-cols-2 sm:grid-cols-4 gap-x-10 sm:gap-x-0 gap-y-4 py-12">
            <motion.div className="space-y-4 flex flex-col ">
                <Link to="/" className="text-gray-400 mt-7  text-sm">Product</Link>
                <Link to="/" className="text-gray-200 flex flex-wrap">Gifting <span className="bg-slate-700 text-xs sm:text-[9px] lg:text-xs rounded-full px-2 py-1 ml-1">Coming Soon</span></Link>
                <Link to="/humark" className="text-gray-200">Solutions</Link>
                <Link to="/pricing" className="text-gray-200">Pricing</Link>
            </motion.div>
            <motion.div className="space-y-4 flex flex-col ">
                <Link to="/" className="text-gray-400 mt-7 text-sm">Company</Link>
                <Link to="/about" className="text-gray-200">About us</Link>
                <Link to="/" className="text-gray-200">Press</Link>
                <Link to="/" className="text-gray-200">Contact</Link>
            </motion.div>
            <motion.div className="space-y-4 flex flex-col ">
                <Link to="/" className="text-gray-400 mt-7 text-sm">Social</Link>
                <Link to="/" className="text-gray-200">Twitter</Link>
                <Link to="/" className="text-gray-200">LinkedIn</Link>
                <Link to="/" className="text-gray-200">Facebook</Link>
            </motion.div>
            <motion.div className="space-y-4 flex flex-col ">
                <Link to="/" className="text-gray-400 mt-7 text-sm">Legal</Link>
                <Link to="/" className="text-gray-200">Terms</Link>
                <Link to="/" className="text-gray-200">Privacy</Link>
            </motion.div>
        </section>
        <section className="md:flex md:justify-between md:items-center mt-6 md:mt-8">
            <h1 className="text-white text-4xl font-bold">prackage</h1>
            <p className="text-gray-400 text-sm my-4">&copy; 2023 Digital Prackage Limited. All rights reserved.</p>
        </section>
    </footer>
  )
}

export default Footer