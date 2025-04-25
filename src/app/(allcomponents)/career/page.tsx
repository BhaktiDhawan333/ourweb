import React from "react";
import Image from "../../../../node_modules/next/image";
import { Footer } from "../../../defaultpage/footer/page";
import Navbar from "../navbar/page";

const cities = [
  { name: "Andhra Pradesh", contact: "+91 9303850961" },
  { name: "Chhattisgarh", contact: "+91 9329931443" },
  { name: "Karnataka", contact: "+91 9329143880" },
  { name: "Madhya Pradesh", contact: "+91 7987999465" },
  { name: "Maharashtra", contact: "+91 8655297071" },
  { name: "Dubai", contact: "+971 50 254 2260" },
  { name: "Egypt", contact: "+971 50 254 2260" },
  { name: "Others", contact: "+91 7723018482" },
];

export default function Blogs() {
  return (
    <div>
      <Navbar />
      <div className="w-full">
        {/* Hero Section */}
        <div className="relative w-full">
          <div className="w-full relative">
            <Image
              src="/imgs/img66.png"
              className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] object-cover"
              alt="Office"
              width={259}
              height={1000}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 sm:p-6 md:p-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
                Career
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white text-center max-w-2xl">
                &quot;We are always searching for new talent, Bringing the best
                opportunities to grow in life&quot;
              </p>
              <span className="block w-20 h-1 bg-blue-600 mt-4"></span>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="max-w-md mx-auto bg-white rounded-3xl shadow-lg p-6 sm:p-8 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
            <div className="absolute top-10 right-10 w-24 h-24 bg-yellow-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
                Get in touch.
              </h2>
              <p className="text-center text-gray-500 mb-6">
                Enter your details below
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />

                <div>
                  <label className="block text-gray-600 mb-1 text-sm">
                    Upload Resume here
                  </label>
                  <input
                    type="file"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <textarea
                  placeholder="Cover Letter"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-300"
                >
                  Send Now
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cities.map((city, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg"
                >
                  <div className="bg-indigo-500 text-white text-center py-4">
                    <h3 className="text-lg font-semibold">{city.name}</h3>
                  </div>
                  <div className="bg-white text-center py-4">
                    <p className="text-gray-800 text-sm">
                      Contact: {city.contact}
                    </p>
                  </div>
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
