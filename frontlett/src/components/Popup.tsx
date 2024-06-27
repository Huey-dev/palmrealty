"use client";
import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show the popup when the page loads
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 z-10 right-4 bg-[#212121] p-4 rounded-lg shadow-lg w-96">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-4xl text-white font-semibold">Newsletter</h2>
        <button onClick={handleClose} className="text-white">
          <MdClose className="h-6 w-6" />
        </button>
      </div>
      <p className="mb-8  text-xs text-white font-extralight">
        Get the latest about SINC Partners, our startup incubator program,
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
    </div>
  );
};

export default Popup;
