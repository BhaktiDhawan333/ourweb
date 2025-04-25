"use client";
import React from "react";
import Image from "../../../../node_modules/next/image";
import { Footer } from "../../../defaultpage/footer/page";
import Navbar from "../navbar/page";

const places = [
  { src: "/imgs/place1.png", name: "Bhopal, India" },
  { src: "/imgs/place2.png", name: "Kochi, India" },
  { src: "/imgs/place3.png", name: "Mysuru, India" },
  { src: "/imgs/place4.png", name: "Raipur, India" },
  { src: "/imgs/place5.png", name: "Rajnandgaon, India" },
  { src: "/imgs/place6.png", name: "Vijayawada, India" },
  { src: "/imgs/place7.png", name: "Elhuli, India" },
  { src: "/imgs/place8.png", name: "Thane, India" },
  { src: "/imgs/place9.png", name: "Cairo, Egypt" },
  { src: "/imgs/place10.png", name: "UAE" },
];

export default function Ourpresence() {
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
              alt="Global Presence"
              width={259}
              height={1000}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center mb-4">
                Seamless Solutions across Continents
              </h1>
              <p className="text-lg text-white text-center max-w-2xl">
                Delivering excellence globally through our strategic presence
              </p>
            </div>
          </div>
        </div>

        {/* World Map Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold">
                Our Global Footprint
              </h2>
              <p className="mt-4 text-gray-600">
                Strategic locations serving clients worldwide
              </p>
            </div>

            <div className="relative">
              <Image
                src="/imgs/img66.png"
                alt="World Map"
                className="w-full rounded-xl shadow-lg"
                width={259}
                height={1000}
              />
            </div>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {places.map((place, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48 sm:h-64">
                    <Image
                      src={place.src}
                      alt={place.name}
                      className="w-full h-full object-cover"
                      width={259}
                      height={1000}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-center">
                      {place.name}
                    </h3>
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
