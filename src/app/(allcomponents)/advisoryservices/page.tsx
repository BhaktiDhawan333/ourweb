import React from "react";
import Image from "../../../../node_modules/next/image";
import { Footer } from "../../../defaultpage/footer/page";
import Navbar from "../navbar/page";
import { Check } from "lucide-react";

export default function Advisoryservices() {
  return (
    <div>
      <Navbar />
      <div className="relative w-full">
        <div className="flex transition-transform duration-700 ease-in-out">
          <div className="w-full flex-shrink-0 relative">
            <Image
              src="/imgs/img66.png"
              className="w-full object-cover h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh]"
              alt="Hero image"
              width={2000}
              height={1000}
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-4 sm:p-8 md:p-10 text-white">
              <div className="w-full md:w-2/3 lg:w-1/2 pl-2 sm:pl-4 md:pl-16">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold mb-2 sm:mb-4">
                  Harnessing decades of expertise to elevate your Customer
                  Experience.
                </h1>
                <span className="block w-16 sm:w-20 h-1 bg-blue-600 mb-2 sm:mb-4"></span>
                <p className="text-xs sm:text-sm md:text-base">
                  Transform your contact center with our integrated Customer
                  Lifecycle Management Advisory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services sections with consistent spacing and responsive behavior */}
      <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto w-full gap-6 md:gap-10">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4">
              Streamline, Empower, Excel
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Transform your customer interactions into enduring relationships
              with Oraltask&apos;s comprehensive Customer Lifecycle Management
              services.
            </p>
          </div>
          <div className="flex-1 mt-4 md:mt-0 w-full">
            <Image
              src="/imgs/img6.png"
              alt="Streamline services illustration"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Alternating sections with consistent styling */}
      <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-gray-50">
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto w-full gap-6 md:gap-10">
          <div className="flex-1 md:order-1 order-2 mt-4 md:mt-0 w-full">
            <Image
              src="/imgs/img2.png"
              alt="Administrative solutions illustration"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="flex-1 text-center md:text-left order-1 md:order-2">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4">
              Integrated Administrative Solutions
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              At Oraltask, we seamlessly integrate administrative solutions into
              your contact center operations. Our approach streamlines tasks
              such as IT system administration and partner management, ensuring
              smooth operations and enhanced data security. Focus on delivering
              exceptional customer support while we handle the details.
            </p>
          </div>
        </div>
      </div>

      <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto w-full gap-6 md:gap-10">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4">
              Human Capital Development Suite
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Empower your contact center teams with our comprehensive Human
              Capital Development Suite. We provide tailored human resources
              management and robust learning and development programs. Elevate
              your workforce capabilities to exceed customer service
              expectations and drive business growth.
            </p>
          </div>

          <div className="flex-1 mt-4 md:mt-0 w-full">
            <Image
              src="/imgs/img3.png"
              alt="Human capital development illustration"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-gray-50">
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto w-full gap-6 md:gap-10">
          <div className="flex-1 md:order-1 order-2 mt-4 md:mt-0 w-full">
            <Image
              src="/imgs/img2.png"
              alt="Quality assurance illustration"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="flex-1 text-center md:text-left order-1 md:order-2">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4">
              Quality Assurance & Compliance Mastery
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Quality assurance and compliance are paramount in our advisory
              services. We implement meticulous quality control measures and
              comprehensive compliance frameworks to ensure your operations meet
              industry standards and legal requirements. Build customer trust
              with our rigorous monitoring and assurance protocols.
            </p>
          </div>
        </div>
      </div>

      <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto w-full gap-6 md:gap-10">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4">
              Operational Excellence Hub
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Optimize your contact center operations with our Operational
              Excellence Hub. We offer data-driven insights, process
              improvements, and continuous performance monitoring. Achieve
              operational efficiency and enhance customer satisfaction with our
              strategic operational support.
            </p>
          </div>
          <div className="flex-1 mt-4 md:mt-0 w-full">
            <Image
              src="/imgs/img6.png"
              alt="Operational excellence illustration"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-gray-50">
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto w-full gap-6 md:gap-10">
          <div className="flex-1 md:order-1 order-2 mt-4 md:mt-0 w-full">
            <Image
              src="/imgs/img2.png"
              alt="Workforce management illustration"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="flex-1 text-center md:text-left order-1 md:order-2">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4">
              Optimized Workforce Management
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Maximize the efficiency of your workforce with our Workforce
              Management as a Service (WaaS). From optimal scheduling and
              resource allocation to cost management and performance tracking,
              we ensure your contact center operates at peak performance. Drive
              productivity and minimize costs with our tailored workforce
              solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us section */}
      <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row items-start max-w-6xl mx-auto w-full gap-6 md:gap-10">
          <div className="flex-1 w-full">
            <div className="w-full text-left space-y-4 sm:space-y-6">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
                Why Choose Us?
              </h2>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  "Employee Engagement: Initiatives to boost morale and productivity.",
                  "Performance Management: Structured feedback and evaluation systems.",
                  "Payroll Services: Accurate and timely employee compensation handling.",
                  "Compliance Assurance: Ensuring adherence to legal and regulatory standards.",
                  "Strategic Planning: Helping businesses define and achieve long-term goals.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="flex items-center justify-center w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-pink-400 flex-shrink-0 mt-0.5">
                      <Check className="text-white w-2 sm:w-3 h-2 sm:h-3" />
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700 leading-snug">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="pt-2 sm:pt-4">
                <button className="bg-blue-500 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg text-xs sm:text-sm hover:bg-blue-600 transition-colors">
                  Meet Our Core Team {" →"}
                </button>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 mt-4 lg:mt-0 w-full">
            <Image
              src="/imgs/img66.png"
              alt="Team members"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Testimonials section */}
      <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-4 sm:mb-8 text-center md:text-left">
            Testimonials
          </h2>

          {/* Responsive testimonial grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* First Testimonial */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4">
                &quot;First of all, congratulations and thanks to you for all
                your hard work. You are turning the team 360 now. Keep it, this
                is the beginning only. Onwards and Upwards. I would like to meet
                the team on MS teams Dear Adil and Rajib, Let us continue to
                focus on deepening the relationship. Your support to Neha and
                the team is really appreciated. &quot;
              </p>
              <div className="text-green-600 font-semibold text-sm">
                Subsidiary of a Global MNC bank, UAE (Fintech)
              </div>
              <div className="text-xs text-gray-500">Co-Founder & CEO</div>
            </div>

            {/* Second Testimonial */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4">
                &quot;Your support and efforts have certainly contributed to our
                success so far. We still have a long way to go but with your
                constant endeavors 85% of TNPS & BPO scores do not look like a
                distant dream&quot;
              </p>
              <div className="text-green-600 font-semibold text-sm">JOE</div>
              <div className="text-xs text-gray-500">E-Commerce Giant</div>
            </div>

            {/* Third Testimonial */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md sm:col-span-2 lg:col-span-1">
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4">
                &quot;The significant rise in productivity from the operations
                team has been massive which has helped us achieve our targeted
                answering numbers during the BIG BOLD sale period and ensure the
                quality of calls are not compromised, we have been able to move
                from 30% to 78% now and marching towards 85% &quot;
              </p>
              <div className="text-green-600 font-semibold text-sm">Varsha</div>
              <div className="text-xs text-gray-500">E-commerce Giant</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
