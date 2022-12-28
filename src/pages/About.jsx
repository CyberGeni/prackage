import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PeopleTouchingHands from "../assets/images/about-img.png";
import Foza from "../assets/images/foza.png";
import FozaMini from "../assets/images/foza-mini.png";
import Mojirayo from "../assets/images/mojirayo.png";
import MojirayoMini from "../assets/images/mojirayo-mini.png";
import Toheeb from "../assets/images/toheeb.png";
import ArrowRight from "../assets/icons/arrow-right.svg";
import ArrowLeft from "../assets/icons/arrow-left.svg";
import Whatsapp from "../assets/icons/whatsapp.svg";
import Email from "../assets/icons/email.svg";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import "@splidejs/react-splide/css";
import "../App.css";

function About() {
  const options = {
    type: "loop",
    perPage: 1,
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
  };

  const slides = [
    {
      id: 1,
      name: "Foza Fawehinmi",
      position: "CEO, Digital Music Commerce and Exchange",
      image: Foza,
      imageMini: FozaMini,
      quote:
        "Who is set to release her debut book, the memoir titled “So Far So Foza”, on the 17th of February, 2023.",
    },
    {
      id: 2,
      name: "Mojirayo “Amoke OnTop” Olaniyan",
      position: "Ex-branch manager, United Bank for Africa (UBA)",
      image: Mojirayo,
      imageMini: MojirayoMini,
      quote:
        "Who retired recently after 16 meritorious years in the Nigerian banking industry.",
    },
    {
      id: 3,
      name: "Toheeb Balogun",
      position: "Co-founder & Director of Impact, The Hook Creative Agency",
      image: Toheeb,
      imageMini: FozaMini,
      quote:
        "On the successful presentation of “Access to Blow” to His Excellency, The Lagos State Governor Babajide Sanwo-Olu.",
    },
  ];
  return (
    <div className="font-BrOmega">
      <Navbar />
      <main className="pt-12">
        <section className="px-12 py-16 sm:px-16 md:px-24 md:py-16">
          <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs sm:my-2 w-fit flex">
            About us
          </div>
          <div className="grid md:grid-cols-3 gap-x-2 sm:gap-x-4 md:gap-x-8">
            <div className="col-span-2">
              <h1 className="text-gray-900 text-3xl md:text-4xl lg:text-5xl font-semibold my-4 md:my-0 sm:leading-relaxed personal-branding">
                We exist to create an easier, better and fulfilling life for you
                through personal branding.
              </h1>
            </div>
            <p className="text-gray-500 col-span-1">
              Prackage is a truly personal{" "}
              <span className="italic">personal</span> branding company. This
              means that it’s in our DNA to care about your overall growth as
              much as we care about your visibility. So, if it helps you grow
              and if it makes your life easier, we’ll do it.
            </p>
          </div>
        </section>
        <img src={PeopleTouchingHands} alt="" />
        {/* our story */}
        <section className="px-12 py-16 sm:px-16 md:px-24 md:py-10 my-4 grid md:grid-cols-2 gap-x-12">
          <h4 className="text-xl md:text-2xl my-3 font-semibold md:col-span-2">
            Our story
          </h4>
          <div>
            <p className="text-gray-500">
              In under a year, Prackage has evolved to mean a lot of things to
              different people. But the one thing we’ve retained throughout our
              existence is our intense desire to see our members grow and live
              fulfilling lives.
            </p>
            <blockquote className="text-gray-500 border-l-2 md:border-l-4 border-gray-400 border-spacing-3 pl-3 text-2xl md:text-4xl my-4">
              Prackage is a personal branding company like no other, and the
              proofs are there to see.
            </blockquote>
          </div>
          <div className="text-gray-500 space-y-3">
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
          </div>
        </section>
        {/* carousel goes here */}
        <div className="bg-black pb-2 sm:pb-0">
          <Splide options={options} hasTrack={false} aria-label="...">
            <SplideTrack >
              {slides.map((slide) => (
                <SplideSlide className="bg-black text-white h-fit">
                  {/* <div className="sm:px-16 lg:px-24 sm:py-10 md:py-16 sm:flex sm:flex-col sm:justify-between sm:place-content-between">
                    <h1 className="sm:text-3xl md:text-4xl lg:text-5xl my-4 font-semibold">
                      Recognizing:
                    </h1>
                    <div>
                      <p className="text-gray-300 my-2">{slide.quote}</p>
                    </div>
                    <div className="md:mb-28">
                      <h3 className="text-white sm:text-lg md:text-xl font-semibold mt-4 my-2">
                        {slide.name}
                      </h3>
                      <p className="text-gray-300">{slide.position}</p>
                    </div>
                  </div>
                  <div className="order-first md:order-last w-full my-4 sm:my-0">
                    <img
                      className="hidden md:block order-first w-full md:max-w-xl md:ml-auto"
                      src={slide.image}
                      alt=""
                    />
                    <img
                      className="md:hidden block order-first w-full"
                      src={slide.imageMini}
                      alt=""
                    />
                  </div> */}
                  {/* mobile carousel */}
                  <section className="px-12 sm:px-16">
                    <h1 className="text-3xl mt-10 my-6 font-semibold">
                      Recognizing:
                    </h1>
                    <img className="w-fit" src={slide.imageMini} alt="" />
                    <h3 className="text-white text-xl font-semibold mt-4 my-3">
                      {slide.name}
                    </h3>
                    <p className="text-gray-300 text-xl">{slide.position}</p>
                    <p className="text-gray-300 my-2 text-lg">{slide.quote}</p>
                  </section>
                </SplideSlide>
              ))}
            </SplideTrack>

            <div className="splide__progress mt-2 mb-20">
              <div className="splide__progress__bar bg-blue-600" />
            </div>

            <div class="splide__arrows relative sm:absolute -top-12 flex w-44 px-12 space-x-4 my-2">
              <button class="splide__arrow splide__arrow--prev bg-transparent mx-6 my-5 p-4 w-auto h-auto">
                <img src={ArrowLeft} alt="" />
              </button>
              <button class="splide__arrow splide__arrow--next bg-transparent mx-6 my-5 p-4 w-auto h-auto">
                <img src={ArrowRight} alt="" />
              </button>
            </div>
            {/* <button class="splide__toggle" type="button">
              <span class="splide__toggle__play">Play</span>
              <span class="splide__toggle__pause">Pause</span>
            </button> */}
          </Splide>
        </div>

        {/* contact */}
        <section className="px-10 py-6 sm:px-14 md:px-16 md:py-10 my-2">
          <h2 className="text-gray-900 text-xl md-text-2xl font-semibold my-2">
            Contact us
          </h2>
          <p className="text-gray-600 w-2/3 max-w-xs leading-relaxed">
            Address: Plot 2, The Lennox Mall, Block 10, 3 Admiralty Way, Lekki
            Phase I 106104, Lagos
          </p>
          <div className="flex space-x-3 my-4">
            <a href="https://wa.me/2347062570370">
              <img src={Whatsapp} alt="" />
            </a>
            <a href="mailto:guru@prackage.com">
              <img src={Email} alt="" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;
