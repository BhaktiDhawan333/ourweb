import React from "react";
import Image from "../../../../node_modules/next/image";
import { Footer } from "../../../defaultpage/footer/page";
import Navbar from "../navbar/page";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check } from "lucide-react";

export default function Centerservices() {
  return (
    <div>
      <Navbar />
      {/* Hero Banner Section */}
      <div className="relative w-full">
        <div className="flex transition-transform duration-700 ease-in-out">
          <div className="w-full flex-shrink-0 relative">
            <Image
              src="/imgs/ofc.png"
              className="w-full object-cover h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[60vh]"
              alt="Contact Center Services"
              width={2000}
              height={1000}
            />
            <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center sm:items-start p-4 sm:p-10 text-white">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center sm:text-left lg:absolute lg:top-[34%] lg:left-[27%] sm:absolute sm:top-[37%] sm:left-1/4 sm:transform sm:-translate-x-1/4">
                Contact Center Services
              </h1>
              <span className="block w-16 sm:w-20 h-1 bg-blue-600 mt-2 sm:mt-0 sm:absolute sm:top-1/2 sm:left-[19%]"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Tailored Solutions Section */}
      <div className="flex items-center justify-center my-8 sm:my-12 md:my-20 px-4 sm:px-10 md:px-20">
        <div className="flex flex-col md:flex-row items-center w-full gap-6 sm:gap-8 md:gap-10 max-w-screen-lg">
          {/* Left Side Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 md:mb-4">
              Tailored Solutions, Global Reach
            </h2>
            <p className="text-sm sm:text-base md:text-base lg:text-base text-gray-600">
              At Technotask, our custom CX solutions are founded on extensive
              team expertise, agility, and cutting-edge tech. This combination
              enables us to anticipate customer needs and consistently exceed
              their expectations.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="flex-1 mt-4 md:mt-0">
            <Image
              src="/imgs/img6.png"
              alt="Tailored Solutions"
              width={240}
              height={240}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Global Support Section */}
      <div className="flex items-center justify-center my-8 sm:my-12 md:my-20 px-4 sm:px-10 md:px-20">
        <div className="flex flex-col md:flex-row-reverse items-center w-full gap-6 sm:gap-8 md:gap-10 max-w-screen-lg">
          {/* Left Side Image (on mobile, appears first) */}
          <div className="flex-1 order-1 md:order-2">
            <Image
              src="/imgs/img2.png"
              alt="Global Support"
              width={240}
              height={240}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side Content (on mobile, appears second) */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1 mt-4 md:mt-0">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 md:mb-4">
              Global Support
            </h2>
            <p className="text-sm sm:text-base md:text-base lg:text-base text-gray-600">
              With strategically positioned offices across the globe, Technotask
              offers round-the-clock support, multilingual services, and an
              in-depth understanding of diverse cultural nuances, all aimed at
              boosting customer satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* 360° Customer Experience Section */}
      <div className="flex items-center justify-center my-8 sm:my-12 md:my-20 px-4 sm:px-10 md:px-20">
        <div className="flex flex-col md:flex-row items-center w-full gap-6 sm:gap-8 md:gap-10 max-w-screen-lg">
          {/* Left Side Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 md:mb-4">
              360° Customer Experience
            </h2>
            <p className="text-sm sm:text-base md:text-base lg:text-base text-gray-600">
              We ensure a 360° Customer Experience with our omni-channel
              solutions. We leverage Business Intelligence for strategic
              decisions and offer tailored Inbound, Outbound, Staff
              augmentation, and Backend Solutions to meet diverse business needs
              efficiently.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="flex-1 mt-4 md:mt-0">
            <Image
              src="/imgs/img3.png"
              alt="360° Customer Experience"
              width={240}
              height={240}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Key Offerings Section */}
      <div className="flex flex-col items-center justify-center px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 mt-4">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-gray-800">
            Our Key Offerings
          </h2>
        </div>

        {/* Buttons Grid */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 max-w-full px-2">
          <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-xs sm:text-sm rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors mb-2">
            Voice Support
          </button>
          <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-xs sm:text-sm rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors mb-2">
            Email Support
          </button>
          <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-xs sm:text-sm rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors mb-2">
            Chat Support
          </button>
          <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-xs sm:text-sm rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors mb-2">
            Robotic Process Automation
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 max-w-full px-2 my-2 sm:my-3 md:my-4">
          <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-xs sm:text-sm rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors mb-2">
            Quality Audits
          </button>
          <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-xs sm:text-sm rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors mb-2">
            Catalog Management
          </button>
          <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-xs sm:text-sm rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors mb-2">
            Logistic Support
          </button>
          <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-xs sm:text-sm rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors mb-2">
            L2 Support
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 max-w-full px-2">
          <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-xs sm:text-sm rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors mb-2">
            Outbound Sales
          </button>
          <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-xs sm:text-sm rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors mb-2">
            Backend support
          </button>
          <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-xs sm:text-sm rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors mb-2">
            Lead Generation
          </button>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="flex items-center justify-center my-8 sm:my-12 md:my-20 px-4 sm:px-10 md:px-20">
        <div className="flex flex-col md:flex-row items-center w-full gap-6 sm:gap-8 md:gap-10 max-w-screen-lg">
          {/* Left Side Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-3 md:mb-4">
              Benefits of <br className="hidden md:block" /> Partnering with Us
            </h2>
          </div>

          {/* Right Side Accordion */}
          <div className="flex-1 w-full mt-4 md:mt-0">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="bg-blue-100 px-2 text-sm sm:text-base">
                  Elevated Customer Satisfaction
                </AccordionTrigger>
                <AccordionContent className="bg-gray-50 px-2 text-sm">
                  Enhance customer satisfaction with our superior service.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="bg-blue-100 px-2 text-sm sm:text-base">
                  Exceptional Customer Experience
                </AccordionTrigger>
                <AccordionContent className="bg-gray-50 px-2 text-sm">
                  Deliver outstanding experiences at every touchpoint.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="bg-blue-100 px-2 text-sm sm:text-base">
                  Smooth and Timely Ramp-up
                </AccordionTrigger>
                <AccordionContent className="bg-gray-50 px-2 text-sm">
                  Scale operations seamlessly and efficiently.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="bg-blue-100 px-2 text-sm sm:text-base">
                  Cost Efficiency
                </AccordionTrigger>
                <AccordionContent className="bg-gray-50 px-2 text-sm">
                  Optimise your budget with our cost-effective solutions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* What Sets Us Apart Section */}
      <div className="flex items-center justify-center my-8 sm:my-12 md:my-20 px-4 sm:px-10 md:px-20">
        <div className="flex flex-col md:flex-row items-center w-full gap-6 sm:gap-8 md:gap-10 max-w-screen-lg">
          {/* Left Side Image */}
          <div className="flex-1">
            <Image
              src="/imgs/img66.png"
              alt="What Sets Us Apart"
              width={240}
              height={240}
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Right Side Content */}
          <div className="flex-1 md:pl-4 lg:pl-8">
            <div className="w-full text-center md:text-left space-y-4 sm:space-y-6 md:space-y-8">
              {/* Heading */}
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                What Sets Us Apart?
              </h2>

              {/* List */}
              <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-left">
                {[
                  "Successfully delivered 40+ international projects",
                  "Proficient in all Indian regional languages and 16 international languages",
                  "Strategically located in tier-2 and tier-3 towns for optimal cost efficiency",
                  "Access to a global talent pool from rural to urban areas",
                  "24/7 multilingual support tailored to diverse cultural contexts",
                  "Advanced AI and analytics-driven solutions",
                  "High client retention rate with 98% satisfaction",
                  "Robust data security and compliance measures",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 sm:gap-3">
                    {/* Colored Circle with Check Icon */}
                    <div
                      className={`flex items-center justify-center w-3 h-3 rounded-full 
                ${index % 2 === 0 ? "bg-blue-500" : "bg-pink-400"}`}
                    >
                      <Check className="text-white w-2 h-2" />
                    </div>

                    {/* Text */}
                    <span className="text-xs sm:text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 mt-8 sm:mt-10 md:mt-12">
        <div className="text-center md:text-left md:max-w-screen-lg md:mx-auto">
          <span className="text-blue-400 text-sm sm:text-base">
            Testimonial
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6 md:mb-8">
            Helping world-class teams grow <br className="hidden sm:block" />{" "}
            faster together.
          </h2>
        </div>

        <div className="flex justify-center pb-8">
          <div className="w-full max-w-screen-lg">
            {/* Cards Container */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-2">
              {/* First Card */}
              <div className="w-full sm:w-1/3 p-3 bg-gray-50 rounded-lg">
                <p className="text-xs sm:text-sm text-gray-600 mb-4">
                  &quot;First of all, congratulations and thanks to you for all
                  your hard work. You are turning the team 360 now. Keep it,
                  this is the beginning only. Onwards and Upwards. I would like
                  to meet the team on MS teams Dear Adil and Rajib, Let us
                  continue to focus on deepening the relationship. Your support
                  to Neha and the team is really appreciated.&quot;
                </p>
                <div className="text-green-600 font-semibold text-sm">
                  Subsidiary of a Global MNC bank, UAE (Fintech)
                </div>
                <div className="text-xs text-gray-500">Co-Founder & CEO</div>
              </div>

              {/* Second Card */}
              <div className="w-full sm:w-1/3 p-3 bg-gray-50 rounded-lg">
                <p className="text-xs sm:text-sm text-gray-600 mb-4">
                  &quot;Your support and efforts have certainly contributed to
                  our success so far. We still have a long way to go but with
                  your constant endeavors 85% of TNPS & BPO scores do not look
                  like a distant dream&quot;
                </p>
                <div className="text-green-600 font-semibold text-sm">JOE</div>
                <div className="text-xs text-gray-500">E-Commerce Giant</div>
              </div>

              {/* Third Card */}
              <div className="w-full sm:w-1/3 p-3 bg-gray-50 rounded-lg">
                <p className="text-xs sm:text-sm text-gray-600 mb-4">
                  &quot;The significant rise in productivity from the operations
                  team has been massive which has helped us achieve our targeted
                  answering numbers during the BIG BOLD sale period and ensure
                  the quality of calls are not compromised, we have been able to
                  move from 30% to 78% now and marching towards 85%&quot;
                </p>
                <div className="text-green-600 font-semibold text-sm">
                  Varsha
                </div>
                <div className="text-xs text-gray-500">E-commerce Giant</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
