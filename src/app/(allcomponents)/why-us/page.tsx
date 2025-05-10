"use client";
import React from "react";
import Image from "../../../../node_modules/next/image";
import { Footer } from "../../../defaultpage/footer/page";
import Navbar from "../navbar/page";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Whyus() {
  const [isOpen, setIsOpen] = useState(true);
  const [startIndex, setStartIndex] = useState(0);

  const slideLeft = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const slideRight = () => {
    setStartIndex((prev) => (prev < recentdata.length - 3 ? prev + 1 : prev));
  };
  const recentdata = [
    {
      year: "2022",
      title: "Scaling New Heights",
      points: [
        "Employee count surged to 3200, reflecting rapid expansion.",
        "Expanded to 11 Delivery Centers, including 2 international centers.",
        "Diversified service offerings across 28 LOBs, catering to 25 clients.",
      ],
    },
    {
      year: "2023",
      title: "Global Presence and Expertise",
      points: [
        "Continued growth with 4567 employees.",
        "Expanded to 13 Delivery Centers and 3 international locations.",
        "Enhanced service portfolio to 36 LOBs, serving 32 global clients.",
      ],
    },
    {
      year: "2024",
      title: "Thriving for Excellence",
      points: [
        "Employee count reached 5200, solidifying our position as a leading employer.",
        "Expanded to over 16 Delivery Centers, with a presence in 6 countries.",
        "Serving 48 LOBs with a commitment to excellence, trusted by 40 global clients.",
      ],
    },
    {
      year: "2025",
      title: "Innovation and Growth",
      points: [
        "Employee count touched 6000.",
        "Started 5 new initiatives on tech innovation.",
        "Expanded to 20 countries worldwide.",
      ],
    },
    {
      year: "2026",
      title: "Sustainability Focus",
      points: [
        "Achieved carbon neutral operations.",
        "Employee count reached 7000+.",
        "Launched 10 CSR initiatives globally.",
      ],
    },
    {
      year: "2027",
      title: "Leadership in Industry",
      points: [
        "Recognized among Top 10 Global Outsourcing Firms.",
        "Employee strength crossed 8000.",
        "Serving 60+ global clients with excellence.",
      ],
    },
  ];

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
              alt="Office Team"
              width={259}
              height={1000}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-4 sm:p-6 md:p-10">
              <div className="container mx-auto px-4">
                <span className="text-blue-600 text-sm sm:text-base mb-2">
                  Why Us
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white max-w-2xl mb-4">
                  Transforming CX one interaction at a time
                </h1>
                <span className="block w-20 h-1 bg-blue-600 mb-4"></span>
                <p className="text-white text-sm sm:text-base max-w-xl">
                  We&apos;re a next-gen contact center committed to delivering
                  personalized CX to our global clients with our diverse
                  workforce, and tech innovations at scale.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-blue-600 text-sm font-medium">
                  About Us
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-2 mb-4">
                  Overview
                </h2>
                <p className="text-gray-600 mb-6">
                  Oraltask is an AI-driven Contact Center service provider that
                  offers a comprehensive suite of solutions designed to enhance
                  the customer experience for businesses worldwide.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Know more
                </button>
              </div>
              <div>
                <Image
                  src="/imgs/img66.png"
                  alt="Overview"
                  width={500}
                  height={1000}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Image
                  src="/imgs/img66.png"
                  alt="Mission"
                  className="rounded-lg shadow-xl"
                  width={500}
                  height={1000}
                />
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-indigo-500 text-white p-4">
                    <h3 className="text-xl font-semibold">Mission</h3>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600">
                      To be at the forefront of tech innovation, driving
                      unparalleled customer satisfaction worldwide.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-indigo-500 text-white p-4">
                    <h3 className="text-xl font-semibold">Vision</h3>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600">
                      To revolutionize global customer experiences through
                      innovative AI-powered solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Success Stories
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <h3 className="text-lg font-semibold">
                    Safeguarding Growth Amidst RBI Challenges
                  </h3>
                  {isOpen ? <ChevronUp /> : <ChevronDown />}
                </div>

                {isOpen && (
                  <div className="mt-4 space-y-4">
                    <div className="bg-indigo-50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Problem Statement:</h4>
                      <p className="text-sm text-gray-700">
                        Facing the adverse impact of the new RBI guidelines in
                        2022, our client was at risk of losing a substantial
                        portion of their customer base.
                      </p>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Impact:</h4>
                      <p className="text-sm text-gray-700">
                        35% reduction in fraud cases and significant increase in
                        customer base.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Story of Resilience & Excellence
            </h2>

            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex gap-6 transition-transform duration-300"
                  style={{ transform: `translateX(-${startIndex * 33.33}%)` }}
                >
                  {recentdata.map((item, index) => (
                    <div
                      key={index}
                      className="w-full md:w-1/3 flex-shrink-0 p-4"
                    >
                      <div className="bg-white rounded-xl shadow-lg p-6">
                        <p className="text-blue-600">{item.year}</p>
                        <h3 className="text-xl font-semibold my-4">
                          {item.title}
                        </h3>
                        <ul className="space-y-2">
                          {item.points.map((point, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                              <span className="text-sm text-gray-600">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={slideLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
                disabled={startIndex === 0}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={slideRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
                disabled={startIndex >= recentdata.length - 3}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
