import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PeopleTouchingHands from "../assets/images/about-img.png";
import Whatsapp from "../assets/icons/whatsapp.svg";
import Email from "../assets/icons/email.svg";
import "../App.css";
import Carousel from "../components/Carousel";

function About() {
  return (
    <motion.div
      className="font-BrOmega"
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.3 }}
      transition={{ duration: 0.3 }}
    >
      <Navbar />
      <main className="pt-12">
        <section className="px-12 py-16 sm:px-16 md:px-24 md:py-16">
          <motion.div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs sm:my-2 w-fit flex">
            About us
          </motion.div>
          <motion.div className="grid md:grid-cols-3 gap-x-2 sm:gap-x-4 md:gap-x-8">
            <motion.div className="col-span-2">
              <h1 className="text-gray-900 text-3xl md:text-4xl lg:text-5xl font-semibold my-4 md:my-0 sm:leading-relaxed personal-branding">
                We exist to create an easier, better and fulfilling life for you
                through personal branding.
              </h1>
            </motion.div>
            <p className="text-gray-500 col-span-1">
              Prackage is a truly personal{" "}
              <span className="italic">personal</span> branding company. This
              means that it’s in our DNA to care about your overall growth as
              much as we care about your visibility. So, if it helps you grow
              and if it makes your life easier, we’ll do it.
            </p>
          </motion.div>
        </section>
        <img src={PeopleTouchingHands} alt="" />

        {/* our story */}
        <section className="px-12 py-16 sm:px-16 md:px-24 md:py-10 my-4 grid md:grid-cols-2 gap-x-12 lg:gap-x-20">
          <h4 className="text-xl md:text-2xl my-3 font-semibold md:col-span-2">
            Our story
          </h4>
          <motion.div>
            <p className="text-gray-500">
              In under a year, Prackage has evolved to mean a lot of things to
              different people. But the one thing we’ve retained throughout our
              existence is our intense desire to see our members grow and live
              fulfilling lives.
            </p>
            <blockquote className="text-gray-500 border-l-2 md:border-l-4 border-gray-400 border-spacing-3 pl-3 text-2xl md:text-4xl mt-6 my-4 leading-normal md:leading-snug">
              Prackage is a personal branding company like no other, and the
              proofs are there to see.
            </blockquote>
          </motion.div>
          <motion.div className="text-gray-500 space-y-3">
            <p>
              We’ve been able to do this through different approaches.
              Sometimes, it’s through the big things, like: Getting our member a
              placement on the TV show they’ve always wanted to appear on;
              sticking with them through their publishing journeys; planning
              their path to job promotion and more. Other times, it’s the small
              things, like: Booking a reservation at a restaurant; making
              enquiries so they don’t have to worry; or generally just assuring
              them that we’re here for them all the time.
            </p>
            <p>
              We take pride in our ability to listen to you. To be your
              accountability partner and partner-in-growth. So, if you tell us
              you want to be, we go all in to make sure you become without
              losing your essence.
            </p>
          </motion.div>
        </section>

        {/* carousel goes here */}
        <Carousel />

        {/* contact */}
        <section className="px-10 py-6 sm:px-14 md:px-16 lg:px-24 md:py-10 my-2">
          <h2 className="text-gray-900 text-xl md-text-2xl font-semibold my-2">
            Contact us
          </h2>
          <p className="text-gray-600 w-2/3 max-w-xs leading-relaxed">
            Address: Plot 2, The Lennox Mall, Block 10, 3 Admiralty Way, Lekki
            Phase I 106104, Lagos
          </p>
          <motion.div className="flex space-x-3 my-4">
            <a href="https://wa.me/2347062570370">
              <img
                className="hover:scale-105 transition-all"
                src={Whatsapp}
                alt=""
              />
            </a>
            <a href="mailto:guru@prackage.com">
              <img
                className="hover:scale-105 transition-all"
                src={Email}
                alt=""
              />
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}

export default About;
