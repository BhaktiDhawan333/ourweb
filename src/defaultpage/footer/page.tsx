"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "../../../node_modules/next/image";
import Link from "../../../node_modules/next/link";
import { ArrowUp } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full">
      {/* Contact Form Section */}
      <section className="bg-[#7C3AED] py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">
                Partner with us.
              </h2>
              <p className="text-white/90 text-sm sm:text-base mb-6 md:mb-8">
                A forefront provider of outsourced digital services and 360°
                Customer Experiences that are Real, Virtual & Scalable for the
                world&apos;s most innovative companies
              </p>
              <p className="text-white/90 text-sm sm:text-base">
                Success Stories in a Go!
              </p>
            </div>

            <form className="space-y-3 sm:space-y-4 bg-white/5 p-4 sm:p-6 rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <Input
                  type="text"
                  placeholder="Your name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <Input
                  type="tel"
                  placeholder="Phone"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Input
                  type="text"
                  placeholder="Industry"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              <Input
                type="text"
                placeholder="Country"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="w-full sm:w-auto bg-white text-[#7C3AED] hover:bg-white/90">
                Contact Us
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Top Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 mb-10 md:mb-12">
            {/* Logo and Newsletter Section */}
            <div className="lg:col-span-2 order-1">
              <div className="mb-4 md:mb-6">
                <Image
                  src="/imgs/iso6.png"
                  alt="TechInTask"
                  width={150}
                  height={40}
                  className="mx-auto sm:mx-0"
                />
              </div>
              <p className="text-sm text-gray-600 mb-4 text-center sm:text-left">
                TechInTask Business Solutions, Gomati Galaxy City, Ayodhya
                bypass Road, Near Ayodhya Square, Bhopal, Madhya Pradesh 462041
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-xs mx-auto sm:mx-0">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-sm"
                />
                <Button className="w-full sm:w-auto text-sm">Sign Up</Button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center sm:text-left">
                Join our CX360 Newsletter for industry insights!
              </p>
            </div>

            {/* Links Section - Reorganized for mobile */}
            <div className="space-y-3 sm:space-y-4 order-2 sm:order-2">
              <h3 className="font-semibold text-gray-900 text-center sm:text-left">
                Useful Links
              </h3>
              <ul className="space-y-2 text-center sm:text-left">
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    Our Leadership
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    Global Presence
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-3 sm:space-y-4 order-3 sm:order-3">
              <h3 className="font-semibold text-gray-900 text-center sm:text-left">
                Services
              </h3>
              <ul className="space-y-2 text-center sm:text-left">
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    Contact Center Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    Advisory Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    E-Commerce
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    Gen AI Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    JustTask
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social - Different order on mobile */}
            <div className="space-y-3 sm:space-y-4 order-5 sm:order-4">
              <h3 className="font-semibold text-gray-900 text-center sm:text-left">
                Social
              </h3>
              <ul className="space-y-2 text-center sm:text-left">
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    YouTube
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-3 sm:space-y-4 order-4 sm:order-5">
              <h3 className="font-semibold text-gray-900 text-center sm:text-left">
                Contact
              </h3>
              <ul className="space-y-2 text-center sm:text-left">
                <li>
                  <Link
                    href="mailto:info@techintask.co.in"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    Support: info@techintask.co.in
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+917358773115"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    Phone: +91 73587 73115
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:sales@techintaskglobal.com"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    Sales: sales@techintaskglobal.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom - Improved mobile layout */}
          <div className="pt-6 sm:pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-gray-600 order-2 sm:order-1">
              © 2024, TECHINTASK LLC.
            </p>

            <div className="flex gap-3 sm:gap-4 order-1 sm:order-2 flex-wrap justify-center">
              <Link
                href="#"
                className="text-xs sm:text-sm text-gray-600 hover:text-gray-900"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-xs sm:text-sm text-gray-600 hover:text-gray-900"
              >
                Employee Redressal Policy
              </Link>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600 order-3"
              onClick={handleScrollToTop}
            >
              <span className="mr-1">Back to top</span>
              <ArrowUp size={16} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
