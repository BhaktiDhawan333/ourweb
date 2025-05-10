import React from "react";
import Image from "../../../../node_modules/next/image";
import { Footer } from "../../../defaultpage/footer/page";
import Navbar from "../navbar/page";

const blogs = [
  {
    img: "/imgs/iso1.png",
    title: "Empowering Growth: The Inspiring Journey of mPokket and Oraltask",
  },
  {
    img: "/imgs/iso2.png",
    title: "Why Outsource Your Customer Experience?",
  },
  {
    img: "/imgs/iso5.png",
    title:
      "Why E-Commerce Players Should Outsource Customer Acquisition and Customer Experience Support to an Omni-Channel BPO",
  },
  {
    img: "/imgs/iso6.png",
    title:
      "How AI/ML powered Automation Tools Elevate the Omni-Channel Experience",
  },
  {
    img: "/imgs/iso5.png",
    title:
      "Enhancing Customer Experience in the Digital Era: Key Strategies for Seamless Interactions",
  },
];

export default function Blogs() {
  return (
    <div>
      <Navbar />
      {/* ....first div */}
      <div className="w-full">
        {/* Hero Section */}
        <div className="relative w-full">
          <div className="w-full relative">
            <Image
              src="/imgs/img66.png"
              className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] object-cover"
              alt="Blog Header"
              width={259}
              height={1000}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl  lg:absolute lg:top-[40%] lg:left-[30%] font-semibold text-white mb-4">
                Blogs
              </h1>
              <span className="block w-20 h-1 bg-blue-600 lg:absolute lg:top-[56%] lg:left-[31%]"></span>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm text-purple-600 font-semibold">
                Read what&apos;s New
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2">Our Blogs</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-30">
              {blogs.map((blog, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48 sm:h-56">
                    <Image
                      src={blog.img}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                      width={259}
                      height={1000}
                    />
                  </div>
                  <div className="p-6">
                    <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">
                      {blog.title}
                    </span>
                    <h3 className="text-xl font-semibold mt-4">{blog.title}</h3>
                    <button className="mt-4 text-purple-600 font-semibold text-sm hover:text-purple-700">
                      Read More →
                    </button>
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
