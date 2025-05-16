"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, UserPlus } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

// Navigation data
const aboutuspaths: { title: string; href: string }[] = [
  {
    title: "Why us",
    href: "/why-us",
  },
  {
    title: "Global Presence",
    href: "/our-presence",
  },
  {
    title: "Awards and Events",
    href: "/awards-events",
  },
  {
    title: "Certifications",
    href: "/certifications",
  },
  {
    title: "Our Clients",
    href: "/our-clients",
  },
];

const solutionspaths: { title: string; href: string }[] = [
  {
    title: "Contact Center Service",
    href: "/centerservices",
  },
  {
    title: "Advisory Services",
    href: "/advisoryservices",
  },
  {
    title: "E-governance",
    href: "/egovernance",
  },
  {
    title: "AI Products",
    href: "/ai-products",
  },
  {
    title: "Justtawk",
    href: "/justtawk",
  },
];

export default function ResponsiveNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (searchOpen) setSearchOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (mobileMenuOpen && searchOpen) setMobileMenuOpen(false);
  };

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="bg-white border-b border-gray-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo Container - Responsive sizing */}
            <div className="relative flex items-center">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
                <Image
                  src="/imgs/logo11.png"
                  alt="Oral Task Business Solutions"
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </div>
              <div className="ml-2 flex flex-col">
                <span className="text-xs sm:text-sm md:text-base font-bold text-yellow-800">
                  Oral Task
                </span>
                <span className="text-xs sm:text-sm md:text-sm text-yellow-800">
                  Business Solution
                </span>
              </div>
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden md:block flex-1 mx-8">
              <NavigationMenu className="mx-auto">
                <NavigationMenuList className="flex justify-center space-x-1 lg:space-x-4">
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/Homepage"
                      className="px-2 py-1.5 text-sm lg:text-base hover:text-blue-600 transition-colors"
                    >
                      Home
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="px-2 py-1.5 text-sm lg:text-base">
                      About us
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white shadow-lg rounded-md">
                      <ul className="grid w-48 p-2 text-sm bg-white">
                        {aboutuspaths.map((component) => (
                          <NavigationMenuLink
                            key={component.title}
                            href={component.href}
                            className="block px-3 py-2 hover:bg-gray-100 rounded"
                          >
                            {component.title}
                          </NavigationMenuLink>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="px-2 py-1.5 text-sm lg:text-base">
                      Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white shadow-lg rounded-md">
                      <ul className="grid w-48 p-2 text-sm bg-white">
                        {solutionspaths.map((component) => (
                          <NavigationMenuLink
                            key={component.title}
                            href={component.href}
                            className="block px-3 py-2 hover:bg-gray-100 rounded"
                          >
                            {component.title}
                          </NavigationMenuLink>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/industries"
                      className="px-2 py-1.5 text-sm lg:text-base hover:text-blue-600 transition-colors"
                    >
                      Industries
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/career"
                      className="px-2 py-1.5 text-sm lg:text-base hover:text-blue-600 transition-colors"
                    >
                      Career
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/blogs"
                      className="px-2 py-1.5 text-sm lg:text-base hover:text-blue-600 transition-colors"
                    >
                      Blog
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Desktop CTA and Search */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              <button
                onClick={toggleSearch}
                className="text-gray-700 hover:text-blue-600 transition-colors p-1"
                aria-label="Search"
              >
                <Search size={18} />
              </button>

              {/* Search overlay for desktop */}

              {searchOpen && (
                <div className="absolute right-4 top-16 md:top-20 z-50">
                  <div className="relative">
                    <input
                      type="text"
                      className="w-48 lg:w-64 h-10 border rounded-lg px-3 pr-8 shadow-md focus:outline-none focus:ring-2 bg-white focus:ring-blue-500"
                      placeholder="Search..."
                      autoFocus
                    />
                    <button
                      onClick={toggleSearch}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
              )}
              <Link
                href="/myform"
                className="bg-blue-600 hover:bg-blue-700 transition-colors rounded text-white p-2 inline-flex items-center justify-center"
                aria-label="Sign Up"
              >
                <UserPlus className="w-4 h-4" />
              </Link>
              <Link
                href="/contact-us"
                className="bg-blue-600 hover:bg-blue-700 transition-colors rounded text-white py-2 px-3 lg:px-4 text-xs lg:text-sm whitespace-nowrap"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Controls - Only visible on mobile */}
            <div className="flex items-center md:hidden">
              {/* Mobile Search Button/Input */}
              {searchOpen ? (
                <div className="relative mr-2 flex-1 min-w-[150px]">
                  <input
                    type="text"
                    className="w-full h-9 border rounded-lg px-3 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Search..."
                    autoFocus
                  />
                  <button
                    onClick={toggleSearch}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <button onClick={toggleSearch} className="p-2">
                  <Search size={20} />
                </button>
              )}

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-gray-800 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Slides down when open */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="px-4 py-2 space-y-1 border-t border-gray-200">
            <Link
              href="/Homepage"
              className="block px-3 py-2 text-sm hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* About Us Dropdown */}
            <details className="group">
              <summary className="flex items-center justify-between px-3 py-2 text-sm cursor-pointer list-none rounded-md hover:bg-gray-100">
                About us
                <span className="text-gray-500 text-xs">+</span>
              </summary>
              <ul className="pl-6 mt-1 space-y-1">
                {aboutuspaths.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="block py-1.5 px-3 text-sm hover:bg-gray-100 rounded-md"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>

            {/* Solutions Dropdown */}
            <details className="group">
              <summary className="flex items-center justify-between px-3 py-2 text-sm cursor-pointer list-none rounded-md hover:bg-gray-100">
                Solutions
                <span className="text-gray-500 text-xs">+</span>
              </summary>
              <ul className="pl-6 mt-1 space-y-1">
                {solutionspaths.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="block py-1.5 px-3 text-sm hover:bg-gray-100 rounded-md"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>

            <Link
              href="/industries"
              className="block px-3 py-2 text-sm hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Industries
            </Link>

            <Link
              href="/career"
              className="block px-3 py-2 text-sm hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Career
            </Link>

            <Link
              href="/blogs"
              className="block px-3 py-2 text-sm hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>

            {/* Mobile CTA buttons */}
            <div className="pt-2 pb-3 grid grid-cols-2 gap-2">
              <Link
                href="/myform"
                className="flex items-center justify-center bg-blue-600 text-white text-center rounded-md py-2 text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                <UserPlus className="w-4 h-4 mr-1" /> Sign Up
              </Link>
              <Link
                href="/contact-us"
                className="bg-blue-600 text-white text-center rounded-md py-2 text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
