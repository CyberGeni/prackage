import React from 'react'

function Footer() {
  return (
    <footer className="bg-black px-12 py-12 sm:px-16 md:px-24 md:py-16">
        <section className="pb-12">
            <p className="text-gray-200 text-lg w-1/2">Learn about our transparent pricing.</p>
            <button className="bg-blue-600 text-white rounded px-6 py-3 mt-4">Get started</button>
        </section>
        <section className="border-y border-gray-600 grid grid-cols-2 sm:grid-cols-4  py-12">
            <ul className="space-y-5">
                <li className="text-gray-400 mb-6  text-sm">Product</li>
                <li className="text-gray-200">Gifting <span className="bg-slate-700 text-xs sm:text-[9px] lg:text-xs rounded-full px-2 py-1">Coming Soon</span></li>
                <li className="text-gray-200">Solutions</li>
                <li className="text-gray-200">Pricing</li>
            </ul>
            <ul className="space-y-5">
                <li className="text-gray-400 mb-6 text-sm">Company</li>
                <li className="text-gray-200">About us</li>
                <li className="text-gray-200">Press</li>
                <li className="text-gray-200">Contact</li>
            </ul>
            <ul className="space-y-5">
                <li className="text-gray-400 mb-6 text-sm">Social</li>
                <li className="text-gray-200">Twitter</li>
                <li className="text-gray-200">LinkedIn</li>
                <li className="text-gray-200">Facebook</li>
            </ul>
            <ul className="space-y-5">
                <li className="text-gray-400 mb-6 text-sm">Legal</li>
                <li className="text-gray-200">Terms</li>
                <li className="text-gray-200">Privacy</li>
                <li className="text-gray-200">Contact</li>
            </ul>
        </section>
        <section className="md:flex md:justify-between md:items-center mt-6 md:mt-8">
            <h1 className="text-white text-4xl font-bold">prackage</h1>
            <p className="text-gray-400 text-sm my-4">&copy; 2023 Digital Prackage Limited. All rights reserved.</p>
        </section>
    </footer>
  )
}

export default Footer