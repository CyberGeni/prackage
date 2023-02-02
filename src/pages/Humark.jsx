import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import People from "../assets/images/people-working.png";
import Step1 from "../assets/images/humark-step-1.png";
import Step2 from "../assets/images/humark-step-2.png";
import Step3 from "../assets/images/humark-step-3.png";
import "../App.css";
function Humark() {
  return (
    <motion.div
      className="font-BrOmega scroll-smooth"
      initial={{ opacity: 0.3 }}
      whileInView={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.3 }}
      transition={{ duration: 0.3 }}
    >
      <Navbar />
      <motion.main className="pt-12 scroll-smooth">
        <motion.section className="px-12 py-16 sm:px-16 md:px-24">
          <motion.div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs sm:my-3 w-fit">
            Humark
          </motion.div>
          <motion.div className="grid md:grid-cols-2 gap-x-2 sm:gap-x-4 md:gap-x-8">
            <motion.div className="">
              <h1 className="personal-branding text-gray-900 text-3xl md:text-5xl lg:text-6xl font-semibold my-8 md:my-0 leading-relaxed">
                Personal branding made easy.
              </h1>
              <p className="text-gray-500 my-6 w-11/12">
                Humark® is our personal brand management tool designed to
                simplify the process of planning and managing your personal
                brand. It enables our team to manage you with outstanding
                dedication and commitment.
              </p>
            </motion.div>
            <img
              className="hidden md:block w-full max-w-md mx-auto"
              src={People}
              alt=""
            />
          </motion.div>
        </motion.section>
        <motion.section className="grid sm:grid-cols-2 px-12 py-16 sm:px-16 md:px-24">
          <motion.div>
            <motion.h1 className=" text-gray-900 mb-6 sm:mb-0 text-3xl md:text-5xl font-semibold">
              How Humark works <br /> -in a nutshell
            </motion.h1>
          </motion.div>
          <motion.div className="sm:border-l-2 border-gray-100 sm:pl-12 space-y-10 snap snap-y snap-mandatory overflow-y-scroll sm:h-96 w-full">
            <motion.div className="snap-start scroll-my-3 h-fit">
              <span className="text-[#2F80ED] font-medium text-sm">STEP 1</span>
              <img className="my-2" src={Step1} alt="" />
              <h3 className="text-xl font-medium my-3 text-gray-700">Easy start</h3>
              <p className="my-2 text-gray-600">
                Find the perfect starting point for your personal branding
                journey. Sign up with just your name and Instagram handle to
                start building your brand from scratch or take it to the next
                level, if you’ve already built one for yourself.
              </p>
            </motion.div>
            <motion.div className="snap-start scroll-my-3 h-fit">
              <span className="text-[#2F80ED] font-medium text-sm">STEP 2</span>
              <img className="my-2" src={Step2} alt="" />
              <h3 className="text-xl font-medium my-3 text-gray-700">Get a direction</h3>
              <p  className="my-2 text-gray-600">For starters, Humark by Prackage shows you what to do to achieve the personal brand level you desire. For rising and established names, it helps you remain the one everyone loves talking about. It’s all based on simple and measurable actions we’re taking on your behalf.</p>
            </motion.div>
            <motion.div className="snap-start pb-6 h-fit">
              <span className="text-[#2F80ED] font-medium text-sm">STEP 3</span>
              <img className="my-2" src={Step3} alt="" />
              <h3 className="text-xl font-medium my-3 text-gray-700">Choose your membership plan</h3>
              <p className="my-2 text-gray-600">Start winning the hearts of your stakeholders by creating a private and public image they love to see with our standard membership plan or our flexible jumpstart plan.</p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* benefits of humark */}
        <motion.section className="px-12 py-16 sm:px-16 md:px-24 bg-black">
        <h1 className="text-white text-3xl sm:text-4xl font-semibold my-8">Benefits of Humark</h1>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 lg:gap-20">
          <motion.div>
            <h3 className="text-white text-xl my-2">Get access to our member directory</h3>
            <p className="text-gray-500">By signing up on prackage and using Humark, you get exclusive access to our directory of members. This allows you to expand your network.</p>
          </motion.div>
          <motion.div>
            <h3 className="text-white text-xl my-2">Get access to our member directory</h3>
            <p className="text-gray-500">By signing up on prackage and using Humark, you get exclusive access to our directory of members. This allows you to expand your network.</p>
          </motion.div>
          <motion.div>
            <h3 className="text-white text-xl my-2">Get access to our member directory</h3>
            <p className="text-gray-500">By signing up on prackage and using Humark, you get exclusive access to our directory of members. This allows you to expand your network.</p>
          </motion.div>
          <motion.div>
            <h3 className="text-white text-xl my-2">Get access to our member directory</h3>
            <p className="text-gray-500">By signing up on prackage and using Humark, you get exclusive access to our directory of members. This allows you to expand your network.</p>
          </motion.div>
          <motion.div>
            <h3 className="text-white text-xl my-2">Get access to our member directory</h3>
            <p className="text-gray-500">By signing up on prackage and using Humark, you get exclusive access to our directory of members. This allows you to expand your network.</p>
          </motion.div>
          <motion.div>
            <h3 className="text-white text-xl my-2">Get access to our member directory</h3>
            <p className="text-gray-500">By signing up on prackage and using Humark, you get exclusive access to our directory of members. This allows you to expand your network.</p>
          </motion.div>
        </motion.div>
        </motion.section>
        <motion.section className="bg-black py-16">
          <h1 className="text-white text-center text-3xl sm:text-4xl font-semibold max-w-3xl mx-auto px-12">
            We are building and managing well-rounded humans with the past,
            present and the future in mind.
          </h1>
          <motion.div className="flex flex-col sm:flex-row justify-center items-center mx-auto my-8 text-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white w-fit text-gray-900 rounded px-5 py-3 hover:outline hover:outline-offset-2 hover:outline-blue-200 transition-all">
              Build at your pace
            </button>
            <button className="border border-white w-fit bg-transparent text-white rounded px-5 py-3 hover:outline hover:outline-offset-2 hover:outline-blue-200 transition-all">
              Jumpstart your brand
            </button>
          </motion.div>
        </motion.section>
      </motion.main>
      <Footer />
    </motion.div>
  );
}

export default Humark;
