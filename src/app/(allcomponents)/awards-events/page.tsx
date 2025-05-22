import React from "react";
import Image from "../../../../node_modules/next/image";
import { Footer } from "../../../defaultpage/footer/page";
import Navbar from "../navbar/page";

const images = [
  "/imgs/place1.png",
  "/imgs/place2.png",
  "/imgs/place3.png",
  "/imgs/place4.png",
];
const testimonials = [
  {
    text: "First of all, congratulations and thanks to you for all your hard work. You are turning the team 360 now.",
    author: "Subsidiary of a Global MNC bank, UAE (Fintech)",
    role: "Co-Founder & CEO",
  },
  {
    text: "Your support and efforts have certainly contributed to our success so far.",
    author: "JOE",
    role: "E-Commerce Giant",
  },
  {
    text: "The significant rise in productivity from the operations team has been massive.",
    author: "Varsha",
    role: "E-commerce Giant",
  },
];
export default function Aiproducts() {
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
              alt="Events"
              width={259}
              height={1000}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
                Explore our recent events
              </h1>
              <span className="block w-20 h-1 bg-blue-600 lg:absolute lg:top-[58%] left-[28%]"></span>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Testimonials
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <p className="text-gray-600 mb-4">{testimonial.text}</p>
                  <div className="text-blue-600 font-semibold">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Event Gallery */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {images.map((src, index) => (
                <div key={index} className="relative aspect-square">
                  <Image
                    src={src}
                    alt={`Event ${index + 1}`}
                    className="w-full h-full object-cover rounded-xl"
                    width={259}
                    height={1000}
                  />
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
