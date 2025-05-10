"use client";
import React, { useState } from "react";
import { Footer } from "../../../defaultpage/footer/page";
import Image from "../../../../node_modules/next/image";
import slide1 from "../../../../public/imgs/firstslider.png";
import slide2 from "../../../../public/imgs/scndslider.png";
import slide3 from "../../../../public/imgs/thirdslider.png";
import slide4 from "../../../../public/imgs/fourthslider.png";
import {
  ArrowRight,
  Headphones,
  Users,
  Building2,
  CircuitBoard,
  MessageSquare,
} from "lucide-react";
import Navbar from "../navbar/page";
import Header from "../Heading/page";
import ServiceGrid from "../ServiceGrid/page";

const images = [
  "/imgs/iso1.png",
  "/imgs/iso2.png",
  "/imgs/iso4.png",
  "/imgs/iso6.png",
];

const slides = [
  {
    image: slide1, // Replace with your image URL
    title: "",
    description: "",
    button: {
      isVisible: false,
    },
  },
  {
    image: slide2, // Replace with your image URL
    title: "Pioneering Excellence Across Every Industry",
    description:
      "Oraltask offers cutting-edge solutions for more industries including E-governance, E-commerce, Fintech, and SaaS. ",
    button: {
      isVisible: true,
    },
  },
  {
    image: slide3, // Replace with your image URL
    title: "Gen-AI Powered Human-Driven Customer Experience",
    description:
      "Seamless integration of human expertise with Gen-AI capabilities to boost efficiency, and productivity for enhanced customer experience. ",
    button: {
      isVisible: true,
    },
  },
  {
    image: slide4, // Replace with your image URL
    title: "Carefully curated for the Digital Start-up Ecosystem ",
    description:
      "Harness a Century's worth of cumulative expertise powered-Customer Lifecycle Management Advisory.",
    button: {
      isVisible: true,
    },
  },
];

export default function Homepage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY === 0) {
  //       setShowNavbar(true);
  //     } else {
  //       setShowNavbar(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      <Navbar />
      {/* Hero Slider Section with responsive controls */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[40vh] lg:h-screen overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 relative h-full">
              <Image
                src={slide.image}
                className="w-full h-full object-cover"
                alt={slide.title}
                width={259}
                height={1000}
              />
              <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-start p-2 sm:p-6 md:p-10 text-white">
                <div className="max-w-xl">
                  <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                    {slide.title}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg my-1 sm:my-4">
                    {slide.description}
                  </p>
                  {slide?.button?.isVisible && (
                    <a
                      href="/our-services"
                      className="bg-blue-500 px-3 py-1 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-bold hover:bg-yellow-600 inline-block mt-1 sm:mt-2"
                    >
                      Explore
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons - Reduced size on mobile */}
        <button
          className="absolute top-1/2 left-1 sm:left-4 transform -translate-y-1/2 bg-gray-900 text-white p-1 sm:p-3 rounded-full z-10 opacity-70 hover:opacity-100"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ❮
        </button>
        <button
          className="absolute top-1/2 right-1 sm:right-4 transform -translate-y-1/2 bg-gray-900 text-white p-1 sm:p-3 rounded-full z-10 opacity-70 hover:opacity-100"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          ❯
        </button>
      </div>

      <div className="py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 max-w-screen-lg mx-auto text-center">
          {[
            { value: "3+", text: "Present in 3+ continents around the globe" },
            { value: "5,462+", text: "Our incredible Workforce" },
            { value: "16+", text: "Languages" },
            { value: "40+", text: "Client Served" },
            { value: "13+", text: "Industries Served" },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center px-4 py-6 border-gray-300 ${
                index !== 4 ? "border-r" : ""
              }`}
              style={{ minHeight: "200px" }} // Ensures equal height boxes
            >
              <div className="text-5xl font-bold leading-tight">
                {item.value}
              </div>
              <p className="text-gray-400 text-xl sm:text-base mt-2 leading-snug">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Our People Section - Fixed responsive layout */}
      <div className="py-6 sm:py-8 px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 max-w-6xl mx-auto">
          <div className="w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Our People Drive Success
            </h2>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-sm text-gray-600 text-justify mx-auto max-w-lg">
              At Oraltask, our people-centric culture inspires continuous
              learning, growth, and authenticity. We offer exceptional growth
              opportunities, resulting in engaged teams, outstanding client
              service, and a relentless focus on innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Office Image - Responsive image */}
      <div className="flex justify-center py-4 sm:py-8 px-4">
        <div className="w-full max-w-6xl">
          <Image
            src="/imgs/ofc1.webp"
            alt="Our Office"
            className="hover:opacity-90 border border-gray-200 rounded p-1 w-full h-auto"
            width={920}
            height={150}
          />
        </div>
      </div>

      {/* Services Section - Responsive card grid */}
      <main className="bg-gray-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Our Services
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 transition-transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 sm:h-16 sm:w-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <Headphones className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-4">
                  Contact Center Services
                </h3>
                <p className="text-sm text-gray-600 mb-4 sm:mb-6">
                  Enhance your customer satisfaction and streamline operations
                  with Oraltask&apos;s expert contact center services.
                </p>
                <button className="flex items-center text-orange-500 hover:text-orange-600 font-medium">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 transition-transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 sm:h-16 sm:w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-4">
                  Customer Lifecycle Management Advisory
                </h3>
                <p className="text-sm text-gray-600 mb-4 sm:mb-6">
                  Incorporate more than a century&apos;s worth of experience in
                  your business with our CLM Advisory.
                </p>
                <button className="flex items-center text-blue-500 hover:text-blue-600 font-medium">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 transition-transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 sm:h-16 sm:w-16 bg-green-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-green-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-4">
                  E-Governance
                </h3>
                <p className="text-sm text-gray-600 mb-4 sm:mb-6">
                  At Oraltask, we proudly manage e-governance for multiple
                  states in India, streamlining administrative processes.
                </p>
                <button className="flex items-center text-green-500 hover:text-green-600 font-medium">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 transition-transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 sm:h-16 sm:w-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <CircuitBoard className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-4">
                  Gen AI-Products
                </h3>
                <p className="text-sm text-gray-600 mb-4 sm:mb-6">
                  Reduce your Cost-to-serve by up to 25% by deploying
                  Oraltask&apos;s Gen-AI-powered solutions.
                </p>
                <button className="flex items-center text-purple-500 hover:text-purple-600 font-medium">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 transition-transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 sm:h-16 sm:w-16 bg-red-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <MessageSquare className="h-6 w-6 sm:h-8 sm:w-8 text-red-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-4">
                  Justtawk
                </h3>
                <p className="text-sm text-gray-600 mb-4 sm:mb-6">
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

      <Header />
      <ServiceGrid />

      {/* Arrow Image - Responsive */}
      <div className="px-4 py-4 sm:py-6">
        <div className="max-w-6xl mx-auto">
          <Image
            src="/imgs/ractangleofc.png"
            alt="Process flow"
            className="hover:opacity-90 border border-gray-200 rounded p-1 w-full h-auto"
            width={920}
            height={20}
          />
        </div>
      </div>

      {/* Business Solutions Section */}
      <div className="flex flex-col items-center justify-center px-4 py-6 sm:py-10">
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-12 mt-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
            Tailored Solutions for your unique{" "}
            <br className="hidden sm:block" />
            Business needs
          </h2>
        </div>

        {/* Buttons Grid - Responsive wrap */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 max-w-full mb-4">
          <button className="px-4 py-1 sm:px-6 sm:py-2 bg-white rounded-full border border-gray-400 text-xs sm:text-sm text-gray-700 hover:bg-gray-100 transition-colors">
            E-commerce
          </button>
          <button className="px-4 py-1 sm:px-6 sm:py-2 bg-white rounded-full border border-gray-400 text-xs sm:text-sm text-gray-700 hover:bg-gray-100 transition-colors">
            Fin-tech
          </button>
          <button className="px-4 py-1 sm:px-6 sm:py-2 bg-white rounded-full border border-gray-400 text-xs sm:text-sm text-gray-700 hover:bg-gray-100 transition-colors">
            SaaS
          </button>
          <button className="px-4 py-1 sm:px-6 sm:py-2 bg-white rounded-full border border-gray-400 text-xs sm:text-sm text-gray-700 hover:bg-gray-100 transition-colors">
            FMCG
          </button>
          <button className="px-4 py-1 sm:px-6 sm:py-2 bg-white rounded-full border border-gray-400 text-xs sm:text-sm text-gray-700 hover:bg-gray-100 transition-colors">
            Retail
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 max-w-full mb-6">
          <button className="px-4 py-1 sm:px-6 sm:py-2 bg-white rounded-full border border-gray-400 text-xs sm:text-sm text-gray-700 hover:bg-gray-100 transition-colors">
            Healthcare
          </button>
          <button className="px-4 py-1 sm:px-6 sm:py-2 bg-white rounded-full border border-gray-400 text-xs sm:text-sm text-gray-700 hover:bg-gray-100 transition-colors">
            Food-tech
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-full my-4">
          <button className="px-4 py-1 sm:px-6 sm:py-2 text-white rounded-sm border border-gray-400 text-xs sm:text-sm hover:bg-blue-800 bg-blue-700">
            Find Out More
          </button>
        </div>
      </div>

      {/* Excellence Section */}
      <div className="flex flex-col items-center justify-center px-4 py-6 sm:py-10">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
            We&apos;re committed to <br className="hidden sm:block" />
            Excellence
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2 max-w-2xl mx-auto">
            With industry-leading certifications and top-tier tech partners on
            board, we are
            <br className="hidden sm:block" /> dedicated to delivering
            excellence to drive growth and enhance CX for your business.
          </p>
        </div>
      </div>

      {/* Partner Logos Carousel */}
      <div className="px-4 py-4 sm:py-6 ">
        <div className="max-w-screen-sm mx-auto overflow-hidden">
          <div className="whitespace-nowrap my-4 sm:my-10">
            <div className="inline-flex animate-scroll">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="w-20 h-20 sm:w-32 sm:h-32 relative mx-2 flex-shrink-0 flex flex-col items-center"
                >
                  <div className="relative w-80 h-80 sm:w-24 sm:h-24">
                    <Image
                      src={src}
                      alt={`Partner ${index + 1}`}
                      fill
                      className="object-contain rounded-xl"
                    />
                  </div>
                  <p className="mt-2 text-center text-xs font-semibold">
                    Partner {index + 1}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="px-4 py-6 sm:py-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
              Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                &quot;First of all, congratulations and thanks to you for all
                your hard work. You are turning the team 360 now. Keep it, this
                is the beginning only. Onwards and Upwards. I would like to meet
                the team on MS teams Dear Adil and Rajib, Let us continue to
                focus on deepening the relationship. Your support to Neha and
                the team is really appreciated.&quot;
              </p>
              <div className="text-green-600 font-semibold text-sm">
                Subsidiary of a Global MNC bank, UAE (Fintech)
              </div>
              <div className="text-xs text-gray-500">Co-Founder & CEO</div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                &quot;Your support and efforts have certainly contributed to our
                success so far. We still have a long way to go but with your
                constant endeavors 85% of TNPS & BPO scores do not look like a
                distant dream&quot;
              </p>
              <div className="text-green-600 font-semibold text-sm">JOE</div>
              <div className="text-xs text-gray-500">E-Commerce Giant</div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md sm:col-span-2 lg:col-span-1">
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                &quot;The significant rise in productivity from the operations
                team has been massive which has helped us achieve our targeted
                answering numbers during the BIG BOLD sale period and ensure the
                quality of calls are not compromised, we have been able to move
                from 30% to 78% now and marching towards 85%&quot;
              </p>
              <div className="text-green-600 font-semibold text-sm">Varsha</div>
              <div className="text-xs text-gray-500">E-commerce Giant</div>
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}
