import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Tab from '../components/Tab'

function Pricing() {
  return (
    <div className="font-BrOmega">
        <Navbar />
        <main className='pt-20'>
            <section className="bg-blue-50 sm:h-[50vh] flex flex-col items-center pt-16 px-12">
                <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs sm:my-3 w-fit">
                    Pricing
                </div>
                <h1 className="text-3xl  md:text-4xl lg:text-5xl font-semibold text-gray-900 my-4 sm:my-2 text-center">How’d you like to build with us?</h1>
                <p className="my-2 mb-4 sm:mb-0 text-center text-gray-500 md:w-2/3 max-w-xl">Select a monthly plan, get a discount with our quarterly plan or try our special plan to jumpstart your brand.</p>
            </section>
            <section className="bg-blue-50 w-full mx-auto">
              <Tab className="w-full mx-auto" />
            </section>
            
        </main>
        <Footer />
    </div>
  )
}

export default Pricing