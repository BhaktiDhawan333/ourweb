import React from "react";
import Image from "../../../../node_modules/next/image";
import { Footer } from "../../../defaultpage/footer/page";
import Navbar from "../navbar/page";

const certifications = [
  {
    title: "ISO 9001:2015",
    image:
      "https://images.unsplash.com/photo-1589330694653-ded6df03f754?ixlib=rb-1.2.1",
  },
  {
    title: "ISO 27001",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1",
  },
  {
    title: "GDPR Compliant",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1",
  },
  {
    title: "PCI DSS",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1",
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
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1"
              className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] object-cover"
              alt="Certifications"
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
