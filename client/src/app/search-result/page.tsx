"use client"; // Uncomment if you need client-side rendering
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaCopy } from "react-icons/fa";
import { AiOutlineCar } from "react-icons/ai";
import { FaWalking,  FaCity } from "react-icons/fa";
import { FaTrainSubway} from "react-icons/fa6";

const Page = () => {
  // Dummy search results data
  const searchResults = [
    {
      id: 1,
      image: "/house9lg.png",
      name: "Janet Poole House, North California",
      price: "£399",
      distanceToCampus: "34 min by car, 20 min by train",
      walkingdistanceToCampus: "34 min by car, 20 min by train",
      facilities: ["Laundry", "Bathroom", "Gym"],
      description:
        "A beautiful and serene environment in the heart of California, with a walkable distance to campus. Friendly neighborhood, safe, and secure.",
    },
    {
      id: 2,
      image: "/house8lg.png",
      name: "Matthew Realty, North California",
      price: "£409",
      distanceToCampus: "47 min by car, 20 min by train",
      walkingdistanceToCampus: "47 min by car, 20 min by train",
      facilities: ["Laundry", "Bathroom", "Gym"],
      description:
        "A beautiful and serene environment in the heart of California, with a walkable distance to campus. Friendly neighborhood, safe, and secure.",
    },
    // Add more search results as needed
  ];

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Search Results:</h1>
      <div className="grid grid-cols-1 gap-4">
        {searchResults.map((property) => (
          <div
            key={property.id}
            className="flex flex-col sm:flex-row bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative w-full sm:w-1/3 h-64">
              <Image
                src={property.image}
                alt={property.name}
                layout="fill"
                objectFit="cover"
                loading="lazy"
                className="w-full h-full"
              />
              <div className="absolute top-2 right-2 flex flex-col items-center">
                <button className="bg-white text-red-500 p-2 rounded-full">
                  <FaHeart size={22} />
                </button>
                <button className="bg-white text-gray-500 p-2 rounded-full mt-2">
                  <FaCopy size={22} />
                </button>
              </div>
            </div>
            <div className="flex-1 p-4">
              <h2 className="text-xl font-semibold mb-2">{property.name}</h2>
              <p className="text-gray-700 mb-4">{property.description}</p>
              <div className="hidden sm:flex items-center text-xs mb-4 space-x-4">
                <div className="flex items-center">
                  <AiOutlineCar className="text-gray-600 mr-2" />
                  <span>{property.distanceToCampus.split(",")[0]}</span>
                </div>
                <div className="flex items-center">
                  <FaWalking className="text-gray-600 mr-2" />
                  <span>{property.walkingdistanceToCampus.split(",")[0]}</span>
                </div>
                <div className="flex items-center">
                  <FaTrainSubway className="text-gray-600 mr-2" />
                  <span>{property.distanceToCampus.split(",")[1]}</span>
                </div>
              </div>
              <div className="hidden sm:flex items-center text-xs mb-4">
                <FaCity className="text-gray-600 mr-2" />
                <span className="font-bold">Facilities:</span>
                <h1 className="text-xs ml-2">{property.facilities.join(", ")}</h1>
              </div>
              <div className="flex flex-col text-xs gap-1 sm:hidden mb-4">
                <div className="flex items-center mb-1">
                  <AiOutlineCar className="text-gray-600 mr-2" />
                  <span>{property.distanceToCampus.split(",")[0]}</span>
                </div>
                <div className="flex items-center mb-1">
                  <FaWalking className="text-gray-600 mr-2" />
                  <span>{property.walkingdistanceToCampus.split(",")[0]}</span>
                </div>
                <div className="flex items-center">
                  <FaTrainSubway className="text-gray-600 mr-2" />
                  <span>{property.distanceToCampus.split(",")[1]}</span>
                </div>
                <div className="flex items-center">
                  <FaCity className="text-gray-600 mr-2" />
                  <span className="font-bold">Facilities:</span>
                  <h1 className="text-xs ml-2">{property.facilities.join(", ")}</h1>
                </div>
              </div>
              <div className="flex gap-3 text-white ">
                <div className="bg-blue-500 p-2 ">
                  Cheapest in the past 5 months
                </div>
                <div className="bg-blue-500 p-2">Price Drop</div>
              </div>
            </div>
            <div className="flex flex-col justify-between p-4 w-full sm:w-1/4">
              <div className="text-xl font-bold mb-4">{property.price}/week</div>
              <Link
                href={`/property/${property.id}`}
                className="bg-yellow-300 text-black px-4 py-2 rounded text-center"
              >
                View rooms
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
