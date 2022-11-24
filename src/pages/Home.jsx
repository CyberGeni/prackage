import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TheGuardian from '../assets/images/theguardian.svg'
import Techpoint from '../assets/images/techpoint.svg'
import TVC from '../assets/images/tvc-logo.svg'
import Techcabal from '../assets/images/techcabal-logo.svg'
import mtvbase from '../assets/images/mtvbase-logo.svg'
import Pulse from '../assets/images/pulse-logo.svg'

function Home() {
  return (
    <div className="font-BrOmega">
        <Navbar />
        <main>
            <section className="flex flex-col w-4/5 mx-auto justify-center items-center h-[90vh] space-y-5 sm:space-y-6 md:space-y-7">
                <h1 className="text-5xl sm:text-6xl md:text-7xl md:max-w-2xl mx-auto text-center font-bold">Build power, respect into your <span className="decoration-underline underline underline-offset-4 decoration-blue-600">name.</span> </h1>
                <p className="text-gray-500 text-center sm:text-lg md:text-xl md:max-w-xl">Prackage's innovative approach to personal branding ensures that your name shines in the right time.</p>
                <button className="bg-blue-600 text-white rounded px-6 py-3">Get started</button>
            </section>
            <section className="bg-gray-50 text-center px-12 py-6">
                <p className="text-gray-500 py-6">Places our subscribers have appeared</p>
                <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 place-items-center">
                    <img className="max-w-full" src={TheGuardian} alt="" />
                    <img className="max-w-full" src={Techpoint} alt="" />
                    <img className="max-w-full" src={TVC} alt="" />
                    <img className="max-w-full" src={Techcabal} alt="" />
                    <img className="max-w-full" src={mtvbase} alt="" />
                    <img className="max-w-full" src={Pulse} alt="" />
                </div>
            </section>
            <section className="bg-blue-50">
                <img src="" alt="" />
                <div>
                    <h1>Heavy on the “personal”</h1>
                    <p>Simply put, we treat you like a person, a very important one.</p>
                    <p>Prackage combines the scientific with a personal touch to drive all-round growth in you as a person because we care about how you appear outside as much as how you feel on the inside. Learn about our process</p>
                    <button>Learn about our process</button>
                </div>
            </section>
            <section>
                <img src="" alt="" />
                <div>
                    <h1>Made with different personalities in mind</h1>
                    <p>With our proprietary tool Humark®, we are able to build and manage your personal brand to your taste, whether you love the spotlight or you prefer to stay BTS.</p>
                    <button>Learn about Humark</button>
                </div>
            </section>
            <section className="bg-orange-50">
                <img src="" alt="" />
                <div>
                    <h1>Meaningful connections where and when it matters.</h1>
                    <p>Prackage increases your presence and visibility in refreshing ways to make sure you remain top-of-mind in the minds of key people in your life.</p>
                    <button>Get started</button>
                </div>
            </section>
        </main>
        <Footer />
    </div>
  )
}

export default Home