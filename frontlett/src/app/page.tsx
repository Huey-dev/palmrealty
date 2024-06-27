import React from "react";
import Hero from "@/components/Hero";
import Popup from "../components/Popup"

const Home = () => {
  return (
    <>
      <Hero />

      <div className="bg-white rounded-lg p-8 mt-20 mx-auto max-w-2xl text-center">
        <p className="text-lg mb-4">
          "Nigeria and Africa has a massive network effect that have not be
          fully utilized. With Nigerians/Africans in every country and territory
          of the world, we can scale an African business to 100+ countries in
          few weeks"
        </p>
        <p className="text-sm font-bold">
          Daniel Izeghs Oratokha <br />
          <span className="font-normal">
            Managing Partner at SINC Partners Ltd
          </span>
        </p>
      </div>

      <div className="rounded-lg p-8 mt-8 mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-semibold mb-8">
          Network of builders helping startup scale
        </h1>
        <div className="flex justify-between max-w-2xl mx-auto">
          <div className="flex-1 bg-white rounded-lg p-8 mr-4">
            <span className="block font-semibold mb-4">
              Work with Service Incubators to expedite your time-to-market
            </span>
            <span className="block text-xs mb-4">
              Collaborate with our meticulously chosen service partners, each
              with a vested interest, ensuring a shared commitment to success in
              the game of venture building. For 7.5% equity, you get a product
              manager, product designer, frontend engineer, software engineer
              and growth marketer to build the MVP of your app or web
              application and validate it.
            </span>
            <a href="#" className="text-blue-600 hover:underline">
              Learn more
            </a>
          </div>
          <div className="flex-1 bg-white rounded-lg p-8 ml-4">
            <span className="block font-semibold mb-4">
              Access funding after your MVP is validated
            </span>
            <span className="block text-sm mb-4">
              Startups that have built and validated their product can take
              advantage of the financial resources of the SINC Investors
              Network, elevating their potential for success in the venture
              capital landscape. Raise $5k, $25k, $50k and $125k in 4 bootstrap
              deals within 12 months
            </span>
            <a href="#" className="text-blue-600 hover:underline">
              Learn more
            </a>
          </div>
        </div>
      </div>

      <div className="p-8 mt-8 mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Area of Focus</h2>
        <p className="text mb-8">
          In our quest to help make success available to everyone, we have
          initial strategic direction to focus on these five (5) key areas at
          the lab
        </p>
        <div className="flex justify-center h-[180px] w-[240px] max-w-2xl mx-auto">
          {/* Box 01 */}
          <div
            className="bg-[#303030] text-white p-6 flex-1"
            style={{ width: "240px", height: "180px" }}
          >
            <p className="mb-12 p-0 mr-[90px] ">01</p>
            <p>Business Support & Incubation</p>
          </div>
          {/* Box 02 */}
          <div
            className="bg-[#F47733] text-white p-8 flex-1"
            style={{ width: "280px", height: "180px" }}
          >
            <p className="mb-12 p-0 mr-[90px] ">02</p>
            <p>On-Demand & As-A-Service</p>
          </div>
          {/* Box 03 */}
          <div
            className="bg-[#FF78BF] text-white p-6 flex-1"
            style={{ width: "240px", height: "180px" }}
          >
            <p className="mb-12 p-0 mr-[90px] ">03</p>
            <p>Marketplace & Crowdsourcing</p>
          </div>
          {/* Box 04 */}
          <div
            className="bg-[#20888F] text-white p-6 flex-1"
            style={{ width: "240px", height: "180px" }}
          >
            <p className="mb-12 p-0 mr-[90px] ">04</p>
            <p>Aggregation & Shared Economy</p>
          </div>
          {/* Box 05 */}
          <div className="bg-[#FF88C6] text-white p-4 h-[180px] w-[240px]">
            <p className="mb-12 p-0 mr-[90px] ">05</p>
            <p className="text-sm">Decentralized Economy & Digital Assets</p>
          </div>
        </div>
      </div>

      <div className="p-8 mt-8 mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Concept Innovations</h2>
        <p className="text-xs mb-4">
          We have proprietary concept innovations that will support the startup
          ecosystem, support solution-providers/entrepreneurs and ultimately
          help democratize success;
        </p>
        <div className="flex justify-between max-w-2xl mx-auto">
          {/* Concept Box 01 */}
          <div className="bg-white rounded-lg p-6 flex-1 mr-4">
            <p className="font-semibold mb-2">Service Incubator</p>
            <p className="text-xs">
              A service-for-shares model of incubating pre-product startups and
              early-stage companies by building their early stage product and
              MVP.
            </p>
          </div>
          {/* Concept Box 02 */}
          <div className="bg-white rounded-lg p-6 flex-1 mx-4">
            <p className="font-semibold mb-2">Virtualing</p>
            <p className="text-xs">
              A resource share model that allows companies share the time of
              resources (employees, consultants, technical advisers or
              influencers) while also splitting the service cost of the resource
            </p>
          </div>
          {/* Concept Box 03 */}
          <div className="bg-white rounded-lg p-6 flex-1 ml-4">
            <p className="font-semibold mb-2">Dimming</p>
            <p className="text-xs">
              A progressive investment model that allows you to put aside income
              (disposable or non-disposable) as investment over a period towards
              an investment or spend of your choice 
            </p>
          </div>
        </div>
      </div>
      <Popup/>
    </>
  );
};

export default Home;
