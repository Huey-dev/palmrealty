"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { VscSettings } from "react-icons/vsc";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { GiPalmTree } from "react-icons/gi";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Home = () => {
  const staticListings = [
    {
      id: 1,
      title: "Janet Poole House, North California",
      image: "/house9lg.png",
      price: "£399",
      cheapest: "Cheapest in the past 5 months",
      walkTime: "4 mins",
      carTime: "2 mins",
    },
    {
      id: 2,
      title: "Stuhomes Student Living Heights",
      image: "/house9lg.png",
      price: "£345",
      cheapest: "Cheapest in the past month",
      walkTime: "34 mins",
      carTime: "16 mins",
    },
    {
      id: 3,
      title: "Flat 39, Forsyth House, Tachbrook",
      image: "/house9lg.png",
      price: "£212",
      cheapest: "Cheapest in the past year",
      walkTime: "60 mins",
      carTime: "23 mins",
    },
    {
      id: 4,
      title: "Flat 39, Forsyth House, Tachbrook",
      image: "/house9lg.png",
      price: "£212",
      cheapest: "Cheapest in the past year",
      walkTime: "60 mins",
      carTime: "23 mins",
    },
    {
      id: 5,
      title: "Flat 39, Forsyth House, Tachbrook",
      image: "/house9lg.png",
      price: "£212",
      cheapest: "Cheapest in the past year",
      walkTime: "60 mins",
      carTime: "23 mins",
    },
    {
      id: 5,
      title: "Flat 39, Forsyth House, Tachbrook",
      image: "/house9lg.png",
      price: "£212",
      cheapest: "Cheapest in the past year",
      walkTime: "60 mins",
      carTime: "23 mins",
    },
    {
      id: 6,
      title: "Flat 39, Forsyth House, Tachbrook",
      image: "/house9lg.png",
      price: "£212",
      cheapest: "Cheapest in the past year",
      walkTime: "60 mins",
      carTime: "23 mins",
    },
  ];

  return (
    <div>
      <div className="relative bg-cover bg-center h-[500px] text-white flex flex-col items-center justify-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/r2.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="relative z-10 text-center flex flex-col mb-4 items-center">
          <div className="flex items-center mb-4">
            <GiPalmTree className="text-5xl text-green-500" />
            <h2 className="text-white font-serif text-5xl font-bold">
              Palmrealty
            </h2>
          </div>
          <p className="text-lg font-poppins text-white sm:text-4xl mb-14">
            Find your dream home today with the people you trust.
          </p>
          <div className="flex items-center w-full h-14 bg-white rounded-full border border-black p-2">
            <VscSettings className="text-black mr-2" />
            <CiLocationArrow1 className="text-black font-bold text-lg mr-2" />
            <input
              type="text"
              placeholder="Click search icon to view search result page"
              className="flex-1 px-2 py-1 focus:outline-none text-black"
            />
            <Link href="/search-result">
              <FaSearch className="text-[#12AF2B] cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>

      <div className="p-2">
        <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
          <div className="relative">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-orange-400">
                Recent listings
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                href="/search?offer=true"
              >
                Show more
              </Link>
            </div>
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
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={30}
              slidesPerView={1} // Show one listing on mobile
              breakpoints={{
                640: {
                  slidesPerView: 2, // Show 2 listings on small screens (e.g., tablets)
                },
                768: {
                  slidesPerView: 3, // Show 3 listings on larger tablets
                },
                1024: {
                  slidesPerView: 4, // Show 4 listings on desktop
                },
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {staticListings.map((listing) => (
                <SwiperSlide className="py-8" key={listing.id}>
                  <div className="w-full gap-2 bg-white border py-2 shadow-lg relative group">
                    <div className="relative">
                      <Image
                        src={listing.image}
                        alt={listing.title}
                        width={100}
                        height={192}
                        loading="lazy"
                        className="w-full h-48 object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-orange-500 text-white text-center p-1 transition-opacity opacity-0 group-hover:opacity-100">
                        £100 Uber voucher
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mt-2">
                      {listing.title}
                    </h3>
                    <p className="text-red-600">From {listing.price}/week</p>
                    <p className="text-white bg-blue-500 text-sm">
                      {listing.cheapest}
                    </p>
                    <div className="flex mt-2 text-gray-600">
                      <span className="mr-4">
                        <CiLocationArrow1 className="inline-block mr-1" />{" "}
                        {listing.walkTime}
                      </span>
                      <span>
                        <CiLocationArrow1 className="inline-block mr-1" />{" "}
                        {listing.carTime}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-button-prev">
                <AiOutlineLeftCircle className="text-white w-10 h-10 text-4xl font-semibold hover:bg-blue-600 rounded-full" />
              </div>
              <div className="swiper-button-next">
                <AiOutlineRightCircle className="text-white w-10 h-10 text-4xl font-semibold hover:bg-blue-600 rounded-full" />
              </div>
            </Swiper>
          </div>
          <div className="relative">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-orange-400">
                Recommended listings
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                href="/search?offer=true"
              >
                Show more
              </Link>
            </div>
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
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={30}
              slidesPerView={1} // Show one listing on mobile
              breakpoints={{
                640: {
                  slidesPerView: 2, // Show 2 listings on small screens (e.g., tablets)
                },
                768: {
                  slidesPerView: 3, // Show 3 listings on larger tablets
                },
                1024: {
                  slidesPerView: 4, // Show 4 listings on desktop
                },
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {staticListings.map((listing) => (
                <SwiperSlide className="py-8" key={listing.id}>
                  <div className="w-full gap-2 bg-white border py-2 shadow-lg relative group">
                    <div className="relative">
                      <Image
                        src={listing.image}
                        alt={listing.title}
                        width={100}
                        height={192}
                        loading="lazy"
                        className="w-full h-48 object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-orange-500 text-white text-center p-1 transition-opacity opacity-0 group-hover:opacity-100">
                        £100 Uber voucher
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mt-2">
                      {listing.title}
                    </h3>
                    <p className="text-red-600">From {listing.price}/week</p>
                    <p className="text-white bg-blue-500 text-sm">
                      {listing.cheapest}
                    </p>
                    <div className="flex mt-2 text-gray-600">
                      <span className="mr-4">
                        <CiLocationArrow1 className="inline-block mr-1" />{" "}
                        {listing.walkTime}
                      </span>
                      <span>
                        <CiLocationArrow1 className="inline-block mr-1" />{" "}
                        {listing.carTime}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-button-prev">
                <AiOutlineLeftCircle className="text-white w-10 h-10 text-4xl font-semibold hover:bg-blue-600 rounded-full" />
              </div>
              <div className="swiper-button-next">
                <AiOutlineRightCircle className="text-white w-10 h-10 text-4xl font-semibold hover:bg-blue-600 rounded-full" />
              </div>
            </Swiper>
          </div>
        </div>
      </div>
      {/* Repeat similar structure for "Recommended" and "Cheapest in the last 5 months" sections */}
    </div>
  );
};


export default Home;
