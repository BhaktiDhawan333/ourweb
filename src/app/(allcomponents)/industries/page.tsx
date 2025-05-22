import React from "react";
import Image from "../../../../node_modules/next/image";
import { Footer } from "../../../defaultpage/footer/page";
import Navbar from "../navbar/page";
import {
  Truck,
  Landmark,
  Monitor,
  Heart,
  BookOpen,
  ShoppingBag,
} from "lucide-react";

const industries = [
  {
    icon: <Truck className="w-8 h-8 text-blue-600" />,
    title: "Logistics",
    description:
      "We offer robust solutions to optimize your supply chain, manage customer inquiries, and improve operational efficiency.",
    features: [
      "Supply Chain",
      "Delivery Management",
      "IT Support",
      "Real-Time Tracking",
    ],
  },
  {
    icon: <Landmark className="w-8 h-8 text-blue-600" />,
    title: "Fintech",
    description:
      "Seamless financial operations, enhanced security, and outstanding customer service for the competitive industry.",
    features: [
      "KYC",
      "Customer Acquisition",
      "Premium to Premium",
      "Relationship Management",
    ],
  },
  {
    icon: <Monitor className="w-8 h-8 text-blue-600" />,
    title: "SaaS",
    description:
      "Comprehensive support to enhance customer experience and drive growth for your SaaS offerings.",
    features: [
      "User Onboarding",
      "Customer Experience",
      "Subscription Management",
    ],
  },
  {
    icon: <Heart className="w-8 h-8 text-blue-600" />,
    title: "Health Care",
    description:
      "Enhance patient engagement, streamline administrative processes, and ensure compliance with healthcare regulations.",
    features: ["Customized system", "Intelligent RPA", "Patient Solutions"],
  },
  {
    icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    title: "Edtech",
    description:
      "Support educational institutions with technology solutions that enhance learning and improve student feedback.",
    features: ["Lead Generation", "Student Support", "Data Management"],
  },
  {
    icon: <ShoppingBag className="w-8 h-8 text-blue-600" />,
    title: "Retail",
    description:
      "Manage customer interactions, optimize inventory, and deliver a great shopping experience with our solutions.",
    features: [
      "Inventory Optimization",
      "Customer Insights",
      "Retail Solutions",
    ],
  },
];

export default function Industries() {
  return (
    <div>
      <Navbar />
      <div className="w-full">
        {/* Hero Section */}
        <div className="relative w-full">
          <div className="flex">
            <div className="w-full flex-shrink-0 relative">
              <Image
                src="/imgs/img22.png"
                className="w-full object-cover h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]"
                alt="Business sectors"
                width={259}
                height={1000}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 sm:p-6 md:p-10">
                <div className="max-w-4xl mx-auto text-center">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
                    Driving Excellence Across Diverse Sectors
                  </h1>
                  <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Our Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="bg-gray-100 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-4">
              Engage, Enhance, Thrive with Oraltask
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{industry.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {industry.description}
                  </p>
                  <ul className="space-y-2">
                    {industry.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
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
