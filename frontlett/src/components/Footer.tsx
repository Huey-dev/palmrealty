import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-[#212121] text-white p-8">
      <div>
        <span className="text-4xl text-white font-semibold">Newsletter</span>
      </div>
      <p className="mb-8 text-xs text-white font-extralight">
        Get the latest about SINC Partners, our startup incubator program, <br />
        Portfolio company offerings - straight into your inbox.
      </p>
      <form className="flex">
        <input
          type="email"
          className="p-2 rounded-l-full w-[300px] bg-[#212121] text-sm text-white border-white border"
          placeholder="Enter your email address"
        />
        <button
          type="submit"
          className="p-2 bg-white ml-[-50px] text-black text-sm rounded-full hover:bg-purple-700"
        >
          Subscribe
        </button>
      </form>
      <div className="max-w-7xl mt-20 mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0">
          <Image src="/SINC LOGO white outline 1.png" alt="" />
          <p className="mb-4 grid">
            SINC Partners is a service <br /> incubation company connecting{" "}
            <br /> experts in product development <br /> and growth marketing
            willing to <br /> offer their services to amazing startups in
            exchange <br /> for minute equity (usually 0.5% to 2%).
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Platforms</h3>
            <ul>
              <li>Kofoundme</li>
              <li>InResidency</li>
              <li>Service Market</li>
              <li>Founders School</li>
              <li>Metty</li>
              <li>Grantty</li>
              <li>Bokitell</li>
              <li>Chekwa</li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Initiatives</h3>
            <ul>
              <li>Jabi Plains</li>
              <li>Local Pricing Initiative</li>
              <li>Scholarship Program</li>
              <li>SSMN Pricing</li>
              <li>University STEM</li>
              <li>University InResidency</li>
              <li>1M Nigeria Products</li>
              <li>Founders Festival</li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-2">More</h3>
            <ul>
              <li>Services</li>
              <li>Equity Jobs</li>
              <li>EIR Program</li>
              <li>Offers</li>
              <li>Innovation News</li>
              <li>FAQ</li>
              <li>Blog & Resources</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <div className="mb-4 ">
              <div>
                <h1 className="mb-6 font-bold text-lg">Locations</h1>
                <h1>Abuja, Nigeria</h1>
                <h1>Lagos, Nigeria</h1>
                <h1>Plikadelphia, USA</h1>
              </div>
              <div className="flex mt-4">
                <Image src="/Outline ABA+ 1.png" alt="" />
                <Image src="whatsapp.png" className="bottom-0" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between text-sm">
        <p>© 2023 SINC Partners Ltd. All rights reserved</p>
        <div className="flex items-center space-x-4">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Security</p>
          <div className="flex space-x-2">
            <span>Web in Nigeria</span>
            <span className="text-green-500">🇳🇬</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
