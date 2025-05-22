import React from "react";
import Image from "../../../../node_modules/next/image";
import { Footer } from "../../../defaultpage/footer/page";
import Navbar from "../navbar/page";

export default function Ourclients() {
  return (
    <div>
      <Navbar />
      <div className="w-full">
        {/* Hero Section */}
        <div className="relative w-full">
          <div className="w-full relative">
            <Image
              src="/imgs/img22.png"
              className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] object-cover"
              alt="Our Clients"
              width={259}
              height={1000}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
                Our Clients
              </h1>
              <span className="block w-20 h-1 bg-blue-600"></span>
            </div>
          </div>
        </div>

        {/* Client Grid */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold">
                Trusted by Industry Leaders
              </h2>
              <p className="mt-4 text-gray-600">
                We&apos;re proud to work with some of the most innovative
                companies across the globe
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <div
                  key={index}
                  className="w-32 h-32 bg-white rounded-xl shadow-md flex items-center justify-center p-4 hover:shadow-lg transition-shadow"
                >
                  <div className="text-center text-gray-500">
                    Client Logo {index}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold">Success Stories</h2>
              <p className="mt-4 text-gray-600">
                Real results from real partnerships
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  stat: "95%",
                  label: "Client Satisfaction",
                  description: "Consistently exceeding expectations",
                },
                {
                  stat: "500+",
                  label: "Active Clients",
                  description: "Across various industries",
                },
                {
                  stat: "24/7",
                  label: "Support",
                  description: "Round-the-clock assistance",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg text-center"
                >
                  <div className="text-4xl font-bold text-blue-600">
                    {item.stat}
                  </div>
                  <div className="text-xl font-semibold mt-2">{item.label}</div>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
