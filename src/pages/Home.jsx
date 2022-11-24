import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="font-BrOmega">
        <Navbar />
        <main>
            <section className="flex flex-col w-4/5 mx-auto justify-center items-center h-[80vh] space-y-5 sm:space-y-6 md:space-y-7">
                <h1 className="text-5xl sm:text-6xl md:text-7xl md:max-w-2xl mx-auto text-center font-bold">Build power, respect into your <span className="decoration-underline underline underline-offset-4 decoration-blue-600">name.</span> </h1>
                <p className="text-gray-500 text-center sm:text-lg md:text-xl md:max-w-xl">Prackage's innovative approach to personal branding ensures that your name shines in the right time.</p>
                <button className="bg-blue-600 text-white rounded px-6 py-3">Get started</button>
            </section>
            <section>
                <span></span>
                <div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </section>
            <section>
                <img src="" alt="" />
                <div>
                    <h1></h1>
                    <p></p>
                    <p></p>
                </div>
            </section>
            <section>
                <img src="" alt="" />
                <div>
                    <h1></h1>
                    <p></p>
                    <p></p>
                </div>
            </section>
            <section>
                <img src="" alt="" />
                <div>
                    <h1></h1>
                    <p></p>
                    <p></p>
                </div>
            </section>
        </main>
        <Footer />
    </div>
  )
}

export default Home