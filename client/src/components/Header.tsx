'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import palmlogo from "../../public/palm_logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" passHref>
            <Image
              width={50}
              height={50}
              src={palmlogo}
              loading="lazy"
              alt="Sinc partners"
              className="cursor-pointer"
            />
          </Link>

          <nav className="hidden md:flex ml-4 space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-400">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-400">Contact us</a>
            <a href="#" className="text-gray-700 hover:text-blue-400">Manager</a>
            <a href="#" className="text-gray-700 hover:text-blue-400">For rent</a>
            <a href="#" className="text-gray-700 hover:text-blue-400">For sale</a>
            <a href="#" className="text-gray-700 hover:text-blue-400">Account</a>
            <a href="#" className="text-gray-700 hover:text-blue-400">Favorite</a>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="hidden md:block bg-[#20888F] hover:bg-teal-600 text-white py-2 px-4 rounded-full"
          >
            Sync with us
          </a>

          <button
            className="md:hidden flex items-center justify-center p-2 text-gray-500 hover:text-gray-700"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-md mt-4`}
      >
        <nav className="flex flex-col space-y-2 px-4 py-2">
          <a href="#" className="text-gray-700 hover:text-blue-400">About</a>
          <a href="#" className="text-gray-700 hover:text-blue-400">Contact us</a>
          <a href="#" className="text-gray-700 hover:text-blue-400">Manager</a>
          <a href="#" className="text-gray-700 hover:text-blue-400">For rent</a>
          <a href="#" className="text-gray-700 hover:text-blue-400">For sale</a>
          <a href="#" className="text-gray-700 hover:text-blue-400">Account</a>
          <a href="#" className="text-gray-700 hover:text-blue-400">Favorite</a>
          <a
            href="#"
            className="bg-[#20888F] hover:bg-teal-600 text-white py-2 px-4 rounded-full"
          >
            Sync with us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
