import React from "react";
import Image from "../../../../node_modules/next/image";
import { Footer } from "../../../defaultpage/footer/page";
import Navbar from "../navbar/page";

const certifications = [
  {
    title: "ISO 9001:2015",
    image: "/imgs/img66.png",
  },
  {
    title: "ISO 27001",
    image: "/imgs/img66.png",
  },
  {
    title: "GDPR Compliant",
    image: "/imgs/img66.png",
  },
  {
    title: "PCI DSS",
    image: "/imgs/img66.png",
  },
];

export default function Certifications() {
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
              alt="Certifications"
              width={259}
              height={1000}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
                Certifications
              </h1>
              <span className="block w-20 h-1 bg-blue-600 lg:absolute lg:top-[58%] left-[39%]"></span>
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative w-full aspect-square mb-4">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover rounded-xl shadow-lg"
                      width={259}
                      height={1000}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center">
                    {cert.title}
                  </h3>
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
