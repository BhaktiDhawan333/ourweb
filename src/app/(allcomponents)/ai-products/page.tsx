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

export default function Aiproducts() {
  return (
    <div>
      <Navbar />
      {/* ....first div */}
      <div className="w-full">
        {/* Hero Section */}
        <div className="relative w-full">
          <div className="flex">
            <div className="w-full flex-shrink-0 relative">
              <Image
                src="/imgs/img66.png"
                className="w-full h-[50vh] sm:h-[40vh] md:h-[45vh] lg:h-[80vh] object-cover"
                alt="AI Technology"
                width={259}
                height={1000}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 sm:p-6 md:p-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white text-center">
                  Gen-AI Products
                </h1>
                <span className="block w-20 h-1 bg-blue-600 mt-4 lg:absolute lg:top-[55%] left-[36%]"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
                Harnessing Gen-AI to Revolutionize Your Customer Experience
              </h2>
              <p className="text-gray-600">
                Reimagine Customer Experience with Gen-AI! Efficiency,
                cost-effectiveness, and innovation at your service with
                Oraltask.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src="/imgs/img66.png"
                alt="AI Innovation"
                className="rounded-lg shadow-xl w-full max-w-md"
                width={259}
                height={1000}
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="flex justify-center md:justify-start">
                <Image
                  src="/imgs/img66.png"
                  alt="AI Technology"
                  className="rounded-lg shadow-xl w-full max-w-md"
                  width={259}
                  height={1000}
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
                  Gen-AI Era, featuring Human expertise
                </h2>
                <p className="text-gray-600 mb-4">
                  Oraltask transforms customer experiences in contact centers by
                  efficiently handling 90% of Level 1 queries, reducing
                  Cost-to-Serve by 23%.
                </p>
                <p className="text-gray-600">
                  With over 100+ years of cumulative leadership experience, we
                  lead in harnessing AI through products.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-4">
            Our AI Solutions
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Discover how Oraltask is reshaping customer experience with our
            innovative AI products
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Speech Analytics Tool",
                description:
                  "TURNING CONVERSATIONS INTO ACTIONABLE INSIGHTS Unlocking Clarity and Intelligence with Every Spoken Word.",
              },
              {
                title: "AI Avatars",
                description:
                  "Experience the next level of customer interaction with our Gen-AI avatars.",
              },
              {
                title: "AI Voicebots & Chatbots",
                description:
                  "Our humanlike voice & chat assistants seamlessly handle customer inquiries.",
              },
              {
                title: "Advanced Omnichannel Analytics",
                description:
                  "Unlock the full potential of your customer interactions with our AI-enabled analytics.",
              },
            ].map((product, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
                  Benefits of Conversational AI
                </h2>
                <p className="text-gray-600 mb-4">
                  Enhance customer interactions with personalized and responsive
                  AI-driven support, available 24/7 to improve engagement and
                  satisfaction.
                </p>
              </div>
              <div>
                <Accordion type="single" collapsible className="space-y-4">
                  {[
                    {
                      title: "Time, Cost, and Resource Efficiency",
                      content: "Streamline operations and reduce expenses.",
                    },
                    {
                      title: "Tailored Interactions",
                      content: "Deliver personalised customer experiences.",
                    },
                    {
                      title: "Multilingual Capabilities",
                      content: "Communicate seamlessly in multiple languages.",
                    },
                    {
                      title: "Around-the-Clock Support",
                      content: "Provide 24/7 assistance to your customers",
                    },
                  ].map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border rounded-lg overflow-hidden"
                    >
                      <AccordionTrigger className="px-4 py-3 bg-blue-50 hover:bg-blue-100 transition-colors">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 py-3 bg-white">
                        {item.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-12">
            Testimonials
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
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
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <p className="text-gray-600 mb-4 text-sm">{testimonial.text}</p>
                <div className="text-blue-600 font-semibold">
                  {testimonial.author}
                </div>
                <div className="text-gray-500 text-sm">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
