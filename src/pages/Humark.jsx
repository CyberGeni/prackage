import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import People from "../assets/images/people-working.png";
import Personality from "../assets/icons/personality.svg";
import SocialScience from "../assets/icons/social-science.svg";
import "../App.css";
function Humark() {
  return (
    <motion.div
      className="font-BrOmega scroll-smooth"
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.3 }}
      transition={{ duration: 0.3 }}
    >
      <Navbar />
      <main className="pt-12 scroll-smooth">
        <section className="px-12 py-16 sm:px-16 md:px-24">
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
              <a href="#diveIn" className="scroll-smooth">
                <button className="bg-blue-600 text-white rounded px-6 py-3">
                  Dive in
                </button>
              </a>
            </motion.div>
            <img
              className="hidden md:block w-full max-w-md mx-auto"
              src={People}
              alt=""
            />
          </motion.div>
        </section>
        <section
          id="diveIn"
          className="grid sm:grid-cols-2 gap-5 sm:gap-8 md:gap-20 py-16 sm:px-16 md:px-24"
        >
          <motion.div className="bg-green-50 px-10 py-10 rounded-lg">
            <img className="my-4" src={SocialScience} alt="" />
            <h2 className="text-black text-2xl font-semibold my-2">
              Technology meets social science
            </h2>
            <p className="text-gray-500">
              Our proprietary personal branding tool Humark® enables us to build
              and manage your brand in the most empirical and goal-based ways
              possible
            </p>
          </motion.div>
          <motion.div className="bg-violet-50 px-10 py-10 rounded-lg">
            <img className="my-4" src={Personality} alt="" />
            <h2 className="text-black text-2xl font-semibold my-2">
              Perfect for all personality types
            </h2>
            <p className="text-gray-500">
              With Humark we can deliver presence, relevance and growth for you
              without compromising your desire to be behind the scene or to be
              the talk-of-town.
            </p>
          </motion.div>
        </section>
        <section className="bg-blue-600 mt-8 py-16">
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
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}

export default Humark;
