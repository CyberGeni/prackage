import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Arrow from '../assets/icons/right-arrow.svg'
import TheGuardian from '../assets/images/theguardian.svg'
import Techpoint from '../assets/images/techpoint.svg'
import TVC from '../assets/images/tvc-logo.svg'
import Techcabal from '../assets/images/techcabal-logo.svg'
import mtvbase from '../assets/images/mtvbase-logo.svg'
import Pulse from '../assets/images/pulse-logo.svg'
import SectionOneImg from '../assets/images/show-off-only-when-you-want.svg'
import SectionTwoImg from '../assets/images/heavy-on-the-personal.svg'
import SectionTwoImgV2 from '../assets/images/heavy-on-the-personal-2.svg'
import SectionThreeImg from '../assets/images/your-dream-its-valid.svg'

import "../App.css"
function Home() {
  return (
    <div className="font-BrOmega">
        <Navbar />
        <main>
            {/* hero */}
            <section className="bg-gradient-to-b from-white via-blue-50 to-blue-100 h-screen flex flex-col px-[10%] mx-auto justify-center items-center space-y-5 sm:space-y-6 md:space-y-7">
                
                    <h1 className="text-5xl mt-16 sm:text-6xl md:text-7xl md:max-w-2xl mx-auto text-center font-bold">Create the life you want <span className="decoration-underline underline underline-offset-4 decoration-blue-600">now.</span></h1>
                    <p className="text-gray-500 text-center sm:text-lg md:text-xl md:max-w-xl">It takes an entire career to build a great personal brand, Prackage makes it easier for you to connect, grow, evolve and enjoy the process of becoming a better you.</p>
                    <button className="bg-blue-600 text-white rounded px-6 py-3">Get started</button>
                
            </section>
            {/* media worked with */}
            <section className="bg-gray-50 text-center px-12 py-10">
                <p className="text-gray-500 pb-6">Our members have appeared on</p>
                <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 place-items-center">
                    <img className="max-w-full" src={TheGuardian} alt="" />
                    <img className="max-w-full" src={Techpoint} alt="" />
                    <img className="max-w-full" src={TVC} alt="" />
                    <img className="max-w-full" src={Techcabal} alt="" />
                    <img className="max-w-full" src={mtvbase} alt="" />
                    <img className="max-w-full" src={Pulse} alt="" />
                </div>
            </section>
            {/* Show off, only when you want */}
            <section className="bg-blue-50 px-12 py-16 sm:px-16 md:px-24 md:grid md:grid-cols-2 md:gap-12 lg:gap-24 md:items-center">
                <img className="mx-auto md:w-full" src={SectionOneImg} alt="" />
                <div className="order-first md:space-y-6">
                    <h1 className="font-bold text-3xl lg:text-4xl my-4 md:my-0">Show off, only when you want</h1>
                    <p className="text-gray-500 text-lg my-3">Don't fall into the trap of "putting yourself out there just for the sake of it. Out proprietary tool Humark helps you stand out and stay relevant without losing your essence - what makes you, you."</p>
                    <button className="bg-blue-600 text-white rounded px-6 py-3">Learn about Humark</button>
                </div>
            </section>
            {/* heavy on the personal */}
            <section className="px-12 py-16 sm:px-16 md:px-24 md:grid md:grid-cols-2 md:gap-12 lg:gap-24 md:items-center">
                
                <img className="rounded-md mx-auto md:w-full sm:hidden" src={SectionTwoImg} alt="" />
                <img className="hidden sm:block rounded-md mx-auto md:w-full" src={SectionTwoImgV2} alt="" />
                <div className="md:space-y-6">
                    <h1 className="font-bold text-3xl lg:text-4xl my-4">Heavy on the “personal”</h1>
                    <p className="text-gray-500 text-lg">Personal branding is more than mere self-promotion. Prackage helps you grow, establish your worth in the right settings and make introductions that open up new opportunities for you</p>
                    <button className="bg-blue-600 text-white rounded px-6 py-3 mt-6 flex items-center">Get started <img className="ml-2 w-3" src={Arrow} alt="" /></button>
                </div>
            </section>
            
            {/* your dream, it's valid */}
            <section className="bg-orange-50 px-12 py-16 sm:px-16 md:px-24 md:grid md:grid-cols-2 md:gap-12 lg:gap-24 md:items-center">
                <img className="mx-auto md:w-full" src={SectionThreeImg} alt="" />
                <div className="order-first md:space-y-6">
                    <h1 className="font-bold text-3xl lg:text-4xl my-4">Your dream, it's valid</h1>
                    <p className="text-gray-500 text-lg">Get the headstart to build the fulfilling life you deserve. Monetise your skills, identify new income streams, launch your business, multiply your network, get things done and more. If you can dream it, we can help you achieve it.</p>
                    <button className="bg-blue-600 text-white rounded px-6 py-3 mt-4 flex items-center">Get started <img className="ml-2 w-3" src={Arrow} alt="" /></button>
                </div>
            </section>

            {/* your brand, your rules */}
            <section className="px-12 py-16 sm:px-16 md:px-24 md:grid md:grid-cols-2 md:gap-12 lg:gap-24 md:items-center">
                
                <img className="rounded-md mx-auto md:w-full sm:hidden" src={SectionTwoImg} alt="" />
                <img className="hidden sm:block rounded-md mx-auto md:w-full" src={SectionTwoImgV2} alt="" />
                <div className="md:space-y-6">
                    <h1 className="font-bold text-3xl lg:text-4xl my-4">Your brand, your rules.</h1>
                    <p className="text-gray-500 text-lg">Our plans are tailored to your specific personality and needs; simply show us what you want and we'll take it from there.</p>
                    <button className="bg-blue-600 text-white rounded px-6 py-3 mt-6 flex items-center">Get started <img className="ml-2 w-3" src={Arrow} alt="" /></button>
                </div>
            </section>
        </main>
        <Footer />
    </div>
  )
}

export default Home
