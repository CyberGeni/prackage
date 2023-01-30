import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Arrow from "../assets/icons/right-arrow.svg";
import TheGuardian from "../assets/images/theguardian.svg";
import Techpoint from "../assets/images/techpoint.svg";
import TVC from "../assets/images/tvc-logo.svg";
import Techcabal from "../assets/images/techcabal-logo.svg";
import mtvbase from "../assets/images/mtvbase-logo.svg";
import Pulse from "../assets/images/pulse-logo.svg";
import SectionOneImg from "../assets/images/show-off-only-when-you-want.png";
import SectionTwoImg from "../assets/images/heavy-on-the-personal.png";
import SectionTwoImgV2 from "../assets/images/heavy-on-the-personal-2.png";
import SectionThreeImg from "../assets/images/your-dream-its-valid.png";
import SectionFourImg from "../assets/images/your-brand-your-rules.png";
import "../App.css";

function Home() {
  AOS.init();
  return (
    <motion.div className="font-BrOmega scroll-smooth">
      <motion.main
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.3 }}
        transition={{ duration: 0.3 }}
      >
        {/* hero */}
        <motion.section className="h-screen flex flex-col px-[10%] mx-auto justify-center items-center space-y-5 sm:space-y-6 md:space-y-7">
          <h1 className="text-5xl mt-16 sm:text-6xl md:text-7xl md:max-w-2xl mx-auto text-center font-bold">
            Get the recognition you{" "}
            <span className="decoration-underline underline underline-offset-4 decoration-blue-500">
              deserve
            </span>
          </h1>
          <p className="text-gray-500 text-center sm:text-lg md:text-xl md:max-w-xl">
            It takes an entire career to build a great personal brand, Prackage
            makes it easier for you to connect, grow, evolve and enjoy the
            process of becoming a better you.
          </p>
          <button className="bg-blue-500 text-white rounded px-6 py-3 hover:bg-blue-600 transition-all ">
            Get started
          </button>
        </motion.section>
        {/* media worked with */}
        <motion.section className="bg-gray-50 text-center px-12 py-10">
          <p className="text-gray-500 pb-6">Our members have appeared on</p>
          <motion.div
            data-aos="fade-up"
            className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 place-items-center"
          >
            <img className="max-w-full" src={TheGuardian} alt="" />
            <img className="max-w-full" src={Techpoint} alt="" />
            <img className="max-w-full" src={TVC} alt="" />
            <img className="max-w-full" src={Techcabal} alt="" />
            <img className="max-w-full" src={mtvbase} alt="" />
            <img className="max-w-full" src={Pulse} alt="" />
          </motion.div>
        </motion.section>
        {/* Show off, only when you want */}
        <motion.section className="bg-blue-50 px-12 py-16 sm:px-16 md:px-24 md:grid md:grid-cols-2 md:gap-12 lg:gap-24 md:items-center">
          <img
            data-aos="fade-up"
            className="mx-auto md:w-full"
            src={SectionOneImg}
            alt=""
          />
          <motion.div data-aos="fade-up" className="order-first md:space-y-6">
            <h1 className="font-bold text-3xl lg:text-4xl my-4 md:my-0">
            Know what to do to get where you want
            </h1>
            <p className="text-gray-500 text-lg my-3 mb-2">
            Don’t fall into the trap of “putting yourself out there” just for the sake of it. Our proprietary tool Humark® helps you stand out and stay relevant without losing your essence — what makes you, you. It’s data-driven, no BS.
            </p>
            <Link
              to="/humark"
              className="w-fit bg-blue-500 text-white rounded px-6 py-3 mt-6 flex items-center hover:bg-blue-600 transition-all">
              Learn about Humark <img className="ml-2 w-3" src={Arrow} alt="" />
            </Link>
          </motion.div>
        </motion.section>
        {/* heavy on the personal */}
        <motion.section className="px-12 py-16 sm:px-16 md:px-24 md:grid md:grid-cols-2 md:gap-12 lg:gap-24 md:items-center">
          <img
            data-aos="fade-up"
            className="rounded-md mx-auto md:w-full sm:hidden"
            src={SectionTwoImg}
            alt=""
          />
          <img
            data-aos="fade-up"
            className="hidden sm:block rounded-md mx-auto md:w-full"
            src={SectionTwoImgV2}
            alt=""
          />
          <motion.div data-aos="fade-up" className="md:space-y-6">
            <h1 className="font-bold text-3xl lg:text-4xl my-4">
              Heavy on the “personal”
            </h1>
            <p className="text-gray-500 text-lg">
            Personal branding is more than mere self-promotion. Prackage helps you grow, establish your worth in the right settings and make introductions that open up new opportunities for you.
            </p>
            <button className="bg-blue-500 text-white rounded px-6 py-3 mt-6 flex items-center hover:bg-blue-600 transition-all">
              Get started <img className="ml-2 w-3" src={Arrow} alt="" />
            </button>
          </motion.div>
        </motion.section>

        {/* your dream, it's valid */}
        <motion.section className="bg-orange-50 px-12 py-16 sm:px-16 md:px-24 md:grid md:grid-cols-2 md:gap-12 lg:gap-24 md:items-center">
          <img
            data-aos="fade-up"
            className="rounded-md mx-auto md:w-full"
            src={SectionThreeImg}
            alt=""
          />
          <motion.div data-aos="fade-up" className="order-first md:space-y-6">
            <h1 className="font-bold text-3xl lg:text-4xl my-4">
            Made for everyone. Almost everyone.
            </h1>
            <p className="text-gray-500 text-lg">
            With our proprietary tool Humark®, we are able to build and manage your personal brand to your taste, whether you love the spotlight or you prefer to remain behind the scene.
            </p>
            <button className="bg-blue-500 text-white rounded px-6 py-3 mt-4 flex items-center hover:bg-blue-600 transition-all">
              Get started <img className="ml-2 w-3" src={Arrow} alt="" />
            </button>
          </motion.div>
        </motion.section>

        {/* your brand, your rules */}
        <motion.section className="px-12 py-16 sm:px-16 md:px-24 md:grid md:grid-cols-2 md:gap-12 lg:gap-24 md:items-center">
          <img
            data-aos="fade-up"
            className="rounded-md mx-auto md:w-full"
            src={SectionFourImg}
            alt=""
          />
          <motion.div data-aos="fade-up" className="md:space-y-6">
            <h1 className="font-bold text-3xl lg:text-4xl my-4">
            Improve your social presence in interesting ways.
            </h1>
            <p className="text-gray-500 text-lg">
            From special events like birthdays to work promotion, Prackage finds refreshing and enjoyable ways to keep you present and visible so that you remain top-of-mind to those who matter.
            </p>
            <button className="bg-blue-500 text-white rounded px-6 py-3 mt-6 flex items-center hover:bg-blue-600 transition-all">
              Get started <img className="ml-2 w-3" src={Arrow} alt="" />
            </button>
          </motion.div>
        </motion.section>

        {/* inclusive and flexible pricing */}
        <motion.section className="bg-[#FFFAEB] h-[70vh] flex items-center justify-center flex-col">
          <h1 className="font-bold text-3xl lg:text-4xl my-4">Inclusive and flexible pricing.</h1>
          <p className="text-gray-500 text-lg w-5/6 max-w-3xl mx-auto text-center">Grow your personal brand bit by bit or jumpstart it: Lay the foundation with our affordable <span>Subscription Plan</span>; go all out with our <span>Membership Plan</span>; and enjoy the juicy perks of being a member of our <span>Exclusive Club.</span></p>
          <Link
              to="/pricing"
              className="w-fit bg-blue-500 text-white rounded px-6 py-3 mt-6 flex items-center hover:bg-blue-600 transition-all">
              View pricing plans <img className="ml-2 w-3" src={Arrow} alt="" />
            </Link>
        </motion.section>
      </motion.main>
      
      <Footer />
    </motion.div>
  );
}

export default Home;
