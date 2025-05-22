import React from "react";
import Image from "../../../../node_modules/next/image";
import { Footer } from "../../../defaultpage/footer/page";
import Navbar from "../navbar/page";
import {
  ArrowRight,
  Headphones,
  Users,
  Building2,
  CircuitBoard,
  MessageSquare,
} from "lucide-react";

export default function Ourservices() {
  return (
    <div>
      <Navbar />
      <div className="relative w-full">
        <div className="flex transition-transform duration-700 ease-in-out">
          <div className="w-full flex-shrink-0 relative">
            <Image
              src="/imgs/img22.png"
              className="w-full object-cover h-[70vh] sm:h-[40vh] md:h-[50vh] lg:h-[90vh]"
              alt=""
              width={2000}
              height={1000}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 sm:p-6 md:p-8 text-white">
              <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-4xl font-bold mb-4 md:max-w-lg max-w-screen-md text-left lg:absolute lg:top-[42%] lg:left-[36%] sm:my-2">
                Shaping CX through AI and Human Synergy
              </h1>
              <span className="block w-20 sm:w-20 h-1 bg-blue-600 mb-10 absolute top-[52%] left-[5%] sm:absolute sm:top-[47%] sm:left-[17%] lg:absolute lg:top-[52%] lg:left-[36%] sm:my-8"></span>
              <p className="text-sm sm:text-base md:text-lg lg:text-sm text-justify mt-2 lg:absolute lg:top-[54%] lg:left-[36%] sm:my-8 max-w-md md:max-w-lg">
                Let us take your business to the next level with more than 100
                years of cumulative industry experience, cutting-edge tech, and
                personalized CX.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 absolute top-[69%] left-[5%] sm:top-[69%] sm:left-[17%]  rounded-xl text-sm sm:text-base lg:absolute lg:top-[67%] lg:left-[36%]">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center my-2 px-10 md:px-20">
        <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-10 max-w-screen-md">
          {/* Left Side Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Elevating Customer Connections
            </h1>
            <p className="text-base md:text-xs text-gray-400">
              At Oraltask, we design agile, innovation-focused solutions
              customized to your requirements. Our skilled, technology-enhanced
              team members seamlessly integrate as authentic extensions of your
              in-house teams.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="flex-1">
            <Image
              src="/imgs/img3.png" // public folder me image place karna
              alt="Sample Image"
              width={240}
              height={240}
              className="w-full h-auto md:h-96 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <span className="text-md text-blue-600 font-medium flex items-center justify-center">
            Delivering excellence with
          </span>
          <h1 className="text-5xl font-semibold text-center text-gray-900 mb-12">
            Our Services
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Headphones className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Contact Center Services
                </h3>
                <p className="text-gray-600 mb-6">
                  Enhance your customer satisfaction and streamline operations
                  with Oraltask&apos;s expert contact center services.
                </p>
                <button className="flex items-center text-orange-500 hover:text-orange-600 font-medium">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Customer Lifecycle Management Advisory
                </h3>
                <p className="text-gray-600 mb-6">
                  Incorporate more than a century&apos;s worth of experience in
                  your business with our CLM Advisory.
                </p>
                <button className="flex items-center text-blue-500 hover:text-blue-600 font-medium">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Building2 className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  E-Governance
                </h3>
                <p className="text-gray-600 mb-6">
                  At Oraltask, we proudly manage e-governance for multiple
                  states in India, streamlining administrative processes.
                </p>
                <button className="flex items-center text-green-500 hover:text-green-600 font-medium">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <CircuitBoard className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Gen AI-Products
                </h3>
                <p className="text-gray-600 mb-6">
                  Reduce your Cost-to-serve by up to 25% by deploying
                  Oraltask&apos;s Gen-AI-powered solutions.
                </p>
                <button className="flex items-center text-purple-500 hover:text-purple-600 font-medium">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <MessageSquare className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Justtawk
                </h3>
                <p className="text-gray-600 mb-6">
                  To empower micro and small businesses we created a
                  subscription-based customized and affordable 24/7 multilingual
                  contact center support.
                </p>
                <button className="flex items-center text-red-500 hover:text-red-600 font-medium">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
