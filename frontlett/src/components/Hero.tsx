"use client";
import React from "react";
import Image from "next/image";
import studying from "../../public/studying.png";
import clapping from "../../public/clapping.png";
import partners from "../../public/partners.png";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Hero = () => {
  // init Swiper:
  // const swiper = new Swiper('.swiper', {
  //   // Optional parameters
  //   direction: 'vertical',
  //   loop: true,

  //   // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },

  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },

  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
  // })
  return (
    <Swiper
      pagination={{
        clickable: true,
        bulletActiveClass: "swiper-pagination-bullet-active",
      }}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      loop
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="bg-white  h-screen  items-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
          {/* Left side content */}
          <div className="lg:w-1/3 ml-8 lg:mb-0 text-center lg:text-left">
            <h1 className="text-4xl font-bold mb-4">
              We are big on these 3 things;
            </h1>
            <ul className="list-inside text-lg mb-8">
              <li>
                <span className="font-bold"> ✓ </span> Service Incubation &
                Ecosystem Advocacy
              </li>
              <li>
                <span className="font-bold"> ✓ </span> Building SAAS & Marketing
                Tech Platforms
              </li>
              <li>
                <span className="font-bold"> ✓ </span>
                Institutional Innovations
              </li>
            </ul>
            <a href="#" className="bg-black text-white py-2 px-4 rounded-full">
              SINC With Us
            </a>
          </div>
          {/* Right side content */}
          <div className="lg:w-1/2 relative flex justify-center items-center">
            <Image
              alt="students studying"
              objectFit="cover"
              src={studying}
              className="w-full"
            />
          </div>
          {/* Center content */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 ml-[300px] absolute flex-col space-y-4 flex justify-center items-center">
            <div className="grid grid-cols-1 gap-4">
              <img
                className="h-auto object-cover rounded-lg"
                src="/sipbtn.png"
                alt="Team working"
              />
              <img
                className="h-auto object-cover rounded-lg"
                src="/sipbtn2.png"
                alt="Team working"
              />
              <img
                className="h-auto object-cover rounded-lg"
                src="/sipbtn3.png"
                alt="Team working"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-white  h-screen  items-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
          {/* Left side content */}
          <div className="lg:w-1/3 ml-8 lg:mb-0 text-center lg:text-left">
            <h1 className="font-bold text-4xl">
              SINC Partners is a service incubation company{" "}
            </h1>
            <h2 className="text-2xl">
              Connecting experts in product development and growth marketing
              willing to offer their services to amazing startups in exchange
              for minute equity (usually 0.5% to 2%).
            </h2>
          </div>
          {/* Right side content */}
          <div className="lg:w-1/2 relative flex justify-center items-center">
            <Image
              alt="students studying"
              objectFit="cover"
              src={clapping}
              className="w-full"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-white  h-screen  items-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
          {/* Left side content */}
          <div className="lg:w-1/2 ml-8 lg:mb-0 text-center lg:text-left">
            <h1 className="font-bold text-4xl">
              Come with an idea, leave with a company.
            </h1>
            <h2 className="text-2xl">
              You, alongside seasoned service partners and investors, expedite
              the growth and market entry of your startup.
            </h2>
          </div>
          {/* Right side content */}
          <div className="lg:w-1/2 relative flex justify-center items-center">
            <Image
              alt="students studying"
              objectFit="cover"
              src={partners}
              className="w-full"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
