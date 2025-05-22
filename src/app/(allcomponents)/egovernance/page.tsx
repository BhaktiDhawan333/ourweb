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

export default function Egovernance() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative w-full">
          <div className="flex">
            <div className="w-full flex-shrink-0 relative">
              <Image
                src="/imgs/img22.png"
                className="w-full object-cover h-[50vh] md:h-[60vh] lg:h-[80vh]"
                alt="Office building"
                width={259}
                height={1000}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-6 md:p-10 lg:p-16">
                <div className="max-w-4xl mx-auto">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
                    Transform E-Governance with Oraltask
                    <span className="block w-20 h-1 bg-blue-600 mt-4"></span>
                  </h1>
                  <p className="text-sm md:text-base lg:text-lg text-white/90 max-w-2xl">
                    Assisting Government to establish a better citizen
                    satisfaction ratio by bridging the gap of communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Discovery Section */}
        <div className="py-16 px-6 md:px-10 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                  Discover efficiency, transparency, and citizen-centricity.
                </h2>
                <p className="text-gray-600">
                  We ensure a 360° Customer Experience with our omni-channel
                  solutions. We leverage Business Intelligence for strategic
                  decisions and offer tailored Inbound, Outbound, Staff
                  augmentation, and Backend Solutions to meet diverse business
                  needs efficiently.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <Image
                  src="/imgs/img22.png"
                  alt="Business analytics"
                  className="rounded-lg shadow-xl w-full max-w-md"
                  width={259}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="bg-gray-50 py-16 px-6 md:px-10 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
              Our Flagship E-Governance Projects
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Discover how Oraltask is reshaping public administration with our
              impactful projects
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "State Electricity Board",
                  description:
                    "Modernizing power distribution management systems to ensure reliable and efficient electricity services for all.",
                },
                {
                  title: "Ministry of Urban Development",
                  description:
                    "Facilitating smart city initiatives by integrating digital technologies for better urban planning and management.",
                },
                {
                  title: "District Helplines",
                  description:
                    "Providing accessible and responsive helpline services for immediate assistance to local residents.",
                },
                {
                  title: "Citizen Grievance Redressal",
                  description:
                    "Streamlining grievance handling processes through digital platforms, ensuring timely resolution and citizen satisfaction.",
                },
                {
                  title: "COVID Helpline",
                  description:
                    "Supporting public health efforts during the pandemic with dedicated helplines for information dissemination and emergency response.",
                },
              ].map((project, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="py-16 px-6 md:px-10 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold mb-8">
                  Why Choose Oraltask for E-Governance?
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem
                    value="item-1"
                    className="border rounded-lg overflow-hidden"
                  >
                    <AccordionTrigger className="px-4 py-3 bg-blue-50 hover:bg-blue-100 transition-colors">
                      Elevated Customer Satisfaction
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 bg-white">
                      Enhance customer satisfaction with our superior service.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-2"
                    className="border rounded-lg overflow-hidden"
                  >
                    <AccordionTrigger className="px-4 py-3 bg-blue-50 hover:bg-blue-100 transition-colors">
                      Exceptional Customer Experience
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 bg-white">
                      Deliver outstanding experiences at every touchpoint.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-3"
                    className="border rounded-lg overflow-hidden"
                  >
                    <AccordionTrigger className="px-4 py-3 bg-blue-50 hover:bg-blue-100 transition-colors">
                      Smooth and Timely Ramp-up
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 bg-white">
                      Scale operations seamlessly and efficiently.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-4"
                    className="border rounded-lg overflow-hidden"
                  >
                    <AccordionTrigger className="px-4 py-3 bg-blue-50 hover:bg-blue-100 transition-colors">
                      Cost Efficiency
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 bg-white">
                      Optimise your budget with our cost-effective solutions.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="flex justify-center md:justify-end">
                <Image
                  src="/imgs/img22.png"
                  alt="Business team"
                  className="rounded-lg shadow-xl w-full max-w-md"
                  width={259}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-50 py-16 px-6 md:px-10 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="flex justify-center md:justify-start">
                <Image
                  src="/imgs/img22.png"
                  alt="Contact us"
                  className="rounded-lg shadow-xl w-full max-w-md"
                  width={259}
                  height={1000}
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                  Partner with Oraltask for Your Next E-Governance Project
                </h2>
                <p className="text-gray-600 mb-4">
                  Join hands with Oraltask to embark on a transformative journey
                  in E-Governance. Whether you&apos;re looking to enhance
                  service delivery, streamline operations, or improve citizen
                  engagement, we have the expertise and dedication to make it
                  happen.
                </p>
                <p className="text-gray-600 mb-8">
                  Contact us today to explore how our tailored E-Governance
                  solutions can empower your administration and benefit your
                  community.
                </p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
