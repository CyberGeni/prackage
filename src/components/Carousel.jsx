import React from "react";
import { motion } from "framer-motion";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Foza from "../assets/images/foza.png";
import FozaMini from "../assets/images/foza-mini.png";
import Mojirayo from "../assets/images/mojirayo.png";
import MojirayoMini from "../assets/images/mojirayo-mini.png";
import Toheeb from "../assets/images/toheeb.png";
import ArrowRight from "../assets/icons/arrow-right.svg";
import ArrowLeft from "../assets/icons/arrow-left.svg";

function Carousel() {
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
      name: "Toheeb Dele-Balogun",
      position: "Co-founder & Director of Impact, The Hook Creative Agency",
      image: Toheeb,
      imageMini: FozaMini,
      quote:
        "On the successful presentation of “Access to Blow” to His Excellency, The Lagos State Governor Babajide Sanwo-Olu.",
    },
  ];
  return (
    <motion.div className="bg-black pb-2 sm:pb-0">
      <Splide options={options} hasTrack={false} aria-label="...">
        <SplideTrack>
          {slides.map((slide) => (
            <SplideSlide className="bg-black text-white h-fit">
              {/* desktop carousel */}
              <motion.section className="hidden md:flex ">
                <motion.div className="sm:px-16 lg:px-24 sm:py-10 md:py-16 sm:flex sm:flex-col sm:justify-between sm:place-content-between">
                  <motion.div>
                    <h1 className="md:text-4xl lg:text-5xl my-4 font-semibold">
                      Recognizing:
                    </h1>
                    <h3 className="text-white sm:text-lg md:text-xl font-semibold mt-4 my-2">
                      {slide.name}
                    </h3>
                    <p className="text-gray-300">{slide.position}</p>
                  </motion.div>
                  <motion.div className="mb-16">
                    <p className="text-gray-300 my-2 text-lg lg:text-xl">
                      {slide.quote}
                    </p>
                  </motion.div>
                </motion.div>
                <motion.div className="w-full">
                  <img
                    className="w-full md:max-w-xl md:ml-auto"
                    src={slide.image}
                    alt=""
                  />
                </motion.div>
              </motion.section>
              {/* mobile carousel */}
              <motion.section className="md:hidden px-12 sm:px-16">
                <h1 className="text-3xl mt-10 my-6 font-semibold">
                  Recognizing:
                </h1>
                <img className="w-fit" src={slide.imageMini} alt="" />
                <h3 className="text-white text-xl font-semibold mt-4 my-3">
                  {slide.name}
                </h3>
                <p className="text-gray-300 text-xl">{slide.position}</p>
                <p className="text-gray-300 my-2 text-lg">{slide.quote}</p>
              </motion.section>
            </SplideSlide>
          ))}
        </SplideTrack>

        {/* progress bar */}
        <motion.div className="splide__progress mt-2 mb-20 md:mb-0">
          <motion.div className="splide__progress__bar bg-blue-600" />
        </motion.div>

        {/* controls */}
        <motion.div class="splide__arrows relative -top-12 md:-top-28 flex w-44 px-12 sm:ml-6 lg:ml-12 space-x-4 my-2">
          <button class="splide__arrow splide__arrow--prev bg-transparent mx-6 my-5 p-4 w-auto h-auto">
            <img src={ArrowLeft} alt="" />
          </button>
          <button class="splide__arrow splide__arrow--next bg-transparent mx-6 my-5 p-4 w-auto h-auto">
            <img src={ArrowRight} alt="" />
          </button>
        </motion.div>
      </Splide>
    </motion.div>
  );
}

export default Carousel;
