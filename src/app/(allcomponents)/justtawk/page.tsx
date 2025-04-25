import React from "react";
import Image from "../../../../node_modules/next/image";
import { Footer } from "../../../defaultpage/footer/page";
import Navbar from "../navbar/page";
import { Check } from "lucide-react";

export default function Justtawk() {
  return (
    <div>
      <Navbar />
      <div className="w-full">
        {/* Hero Section */}
        <div className="relative w-full">
          <div className="flex">
            <div className="w-full flex-shrink-0 relative">
              <Image
                src="/imgs/img66.png"
                className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover"
                alt="Call Center"
                width={259}
                height={1000}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-4 sm:p-6 md:p-10">
                <div className="max-w-4xl mx-auto text-center">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
                    Your 24/7 Call Center Solutions
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6">
                    Empowering Micro and Small-Scale Industries with
                    Subscription-Based Contact Center Solutions.
                  </p>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">
                    Get Started Today
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Setup Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
                Set up in 5 min - Never Miss a call again!
              </h2>
              <p className="text-gray-600">
                Empower your business with seamless customer communication
                through Justtawk&apos;s comprehensive contact center solutions.
                Whether you&apos;re a small startup or a thriving enterprise,
                Justtawk ensures your customers are always heard, offering
                cost-effective plans starting at just ₹8999 per month.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src="/imgs/img66.png"
                alt="Setup Process"
                className="rounded-lg shadow-xl w-full max-w-md"
                width={259}
                height={1000}
              />
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="flex justify-center md:justify-start">
                <Image
                  src="/imgs/img66.png"
                  alt="Services"
                  className="rounded-lg shadow-xl w-full max-w-md"
                  width={259}
                  height={1000}
                />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">
                  Services Overview
                </h2>
                <ul className="space-y-4">
                  {[
                    "Portable Contact Center: Set up in 5 minutes, recharge monthly.",
                    "Free Dialer: No connectivity charges, includes free CRM and report generation",
                    "Call Monitoring: Supervised calls ensuring quality service.",
                    "24*7 Real Agent: Personalized customer support round the clock.",
                  ].map((service, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div
                        className={`flex items-center justify-center w-4 h-4 rounded-full ${
                          index % 2 === 0 ? "bg-blue-500" : "bg-pink-400"
                        }`}
                      >
                        <Check className="text-white w-3 h-3" />
                      </div>
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">
                Why Choose Justtawk?
              </h2>
              <ul className="space-y-4">
                {[
                  "Seamless communication channels.",
                  "Premium subscription plans for personalized service.",
                  "Global connectivity options for expanded reach.",
                  "Empowering your business with reliable 24/7 support.",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div
                      className={`flex items-center justify-center w-4 h-4 rounded-full ${
                        index % 2 === 0 ? "bg-blue-500" : "bg-pink-400"
                      }`}
                    >
                      <Check className="text-white w-3 h-3" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src="/imgs/img66.png"
                alt="Why Choose Us"
                className="rounded-lg shadow-xl w-full max-w-md"
                width={259}
                height={1000}
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="/imgs/img66.png"
              alt="CTA Background"
              className="absolute inset-0 w-full h-full object-cover"
              width={259}
              height={1000}
            />
            <div className="relative bg-black bg-opacity-50 p-8 sm:p-12 md:p-16">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
                  Get Started Today
                </h2>
                <p className="text-white/90 mb-8">
                  Transform your customer interactions with Justtawk&apos;s
                  agile contact center solutions. Enhance customer satisfaction
                  and streamline operations effortlessly.
                </p>
                <button className="bg-white text-blue-600 px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors">
                  Set Up Your Contact Center
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
