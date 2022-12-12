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
import SectionOneImg from '../assets/images/heavy-on-the-personal.svg'
import SectionTwoImg from '../assets/images/made-with-diff-personalities-in-mind.svg'
import SectionThreeImg from '../assets/images/meaningful-connections.svg'

function Home() {
  return (
    <div className="font-BrOmega">
        <Navbar />
        <main>
            {/* hero */}
            <section className="flex flex-col w-4/5 mx-auto justify-center items-center h-[85vh] space-y-5 sm:space-y-6 md:space-y-7">
                <h1 className="text-5xl sm:text-6xl md:text-7xl md:max-w-2xl mx-auto text-center font-bold">Get the recognition you <span className="decoration-underline underline underline-offset-4 decoration-blue-600">deserve</span></h1>
                <p className="text-gray-500 text-center sm:text-lg md:text-xl md:max-w-xl">Our innovative approach to personal branding helps you build relevance & social capital within and outside your industry on your own terms.</p>
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
            {/* heavy on the personal */}
            <section className="bg-blue-50 px-12 py-16 sm:px-16 md:px-24 md:grid md:grid-cols-2 md:gap-12 lg:gap-24 md:items-center">
                <img className="mx-auto md:w-full" src={SectionOneImg} alt="" />
                <div className="order-first md:space-y-6">
                    <h1 className="font-bold text-3xl lg:text-4xl my-4">Heavy on the “personal”</h1>
                    <p className="text-gray-500 text-lg">Our membership gives you access to our pool of high-flying professionals through special introductions and members-only networking events.</p>
                    <button className="bg-blue-600 text-white rounded px-6 py-3 mt-6 flex items-center">Get started <img className="ml-2 w-3" src={Arrow} alt="" /></button>
                </div>
            </section>
            {/* made with diff personalities in mind */}
            <section className="px-12 py-16 sm:px-16 md:px-24 md:grid md:grid-cols-2 md:gap-12 lg:gap-24 md:items-center">
                <img className="rounded-md mx-auto md:w-full" src={SectionTwoImg} alt="" />
                <div className="md:space-y-6">
                    <h1 className="font-bold text-3xl lg:text-4xl my-4 md:my-0">Made with different personalities in mind</h1>
                    <p className="text-gray-500 text-lg my-3">With our proprietary tool Humark®, we are able to build and manage your personal brand to your taste, whether you love the spotlight or you prefer to stay BTS.</p>
                    <button className="bg-blue-600 text-white rounded px-6 py-3">Learn about Humark</button>
                </div>
            </section>
            {/* meanngful connections */}
            <section className="bg-orange-50 px-12 py-16 sm:px-16 md:px-24 md:grid md:grid-cols-2 md:gap-12 lg:gap-24 md:items-center">
                <img className="mx-auto md:w-full" src={SectionThreeImg} alt="" />
                <div className="order-first md:space-y-6">
                    <h1 className="font-bold text-3xl lg:text-4xl my-4">Meaningful connections where and when it matters.</h1>
                    <p className="text-gray-500 text-lg">From work promotions to birthdays, Prackage increases your presence and visibility in refreshing ways to make sure you remain top-of-mind.</p>
                    <button className="bg-blue-600 text-white rounded px-6 py-3 mt-4">Get started</button>
                </div>
            </section>
        </main>
        <Footer />
    </div>
  )
}

export default Home
