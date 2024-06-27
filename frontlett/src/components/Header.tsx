import React from "react";
import Image from "next/image";
import Link from "next/link";
import Sinclogo from "../../public/SINC LOGO black outline 1.png";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" passHref>
            <Image
              src={Sinclogo}
              alt="Sinc partners"
              className="cursor-pointer"
            />
          </Link>

          <nav className="ml-4 hidden md:flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              SIP
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Studio
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              SEEQ
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Platforms
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Initiatives
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              More
            </a>
          </nav>
        </div>

        <div className="hidden md:flex space-x-4">
          <a
            href="#"
            className="bg-[#20888F] hover:bg-teal-600 text-white py-2 px-4 rounded-full"
          >
            SINC With Us
          </a>
          <a
            href="#"
            className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-full"
          >
            Apply to SIP I.O.
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
