import React from 'react'

function Footer() {
  return (
    <footer className="bg-black px-8 py-12 sm:px-16 md:px-20">
        <section className="border-b border-gray-600 pb-12">
            <p className="text-gray-200 text-lg">Learn about our transparent pricing.</p>
            <button className="bg-blue-600 text-white rounded px-6 py-3 mt-4">Get started</button>
        </section>
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-5 py-12">
            <ul className="space-y-4">
                <li className="text-gray-400 mb-2">Product</li>
                <li className="text-gray-200">Blog</li>
                <li className="text-gray-200">Solutions</li>
                <li className="text-gray-200">Pricing</li>
            </ul>
            <ul className="space-y-4">
                <li className="text-gray-400 mb-2">Company</li>
                <li className="text-gray-200">About us</li>
                <li className="text-gray-200">Press</li>
                <li className="text-gray-200">Contact</li>
            </ul>
            <ul className="space-y-4">
                <li className="text-gray-400 mb-2">Social</li>
                <li className="text-gray-200">Twitter</li>
                <li className="text-gray-200">LinkedIn</li>
                <li className="text-gray-200">Facebook</li>
            </ul>
            <ul className="space-y-4">
                <li className="text-gray-400 mb-2">Legal</li>
                <li className="text-gray-200">Terms</li>
                <li className="text-gray-200">Privacy</li>
                <li className="text-gray-200">Contact</li>
            </ul>
        </section>
        <section className="md:flex md:justify-between md:items-center">
            <h1 className="text-white text-4xl font-bold">prackage</h1>
            <p className="text-gray-400 text-sm my-4">&copy; 2023 Digital Prackage Limited. All rights reserved.</p>
        </section>
    </footer>
  )
}

export default Footer