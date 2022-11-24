import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="font-BrOmega">
        <Navbar />
        <main>
            <section>
                <h1 className="">Build power, respect into your name.</h1>
                <p>Prackage's innovative approach to personal branding ensures that your name shines in the right time.</p>
                <button>Get started</button>
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