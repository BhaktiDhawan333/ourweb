"use client";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X, Search } from "lucide-react";
import Link from "../../../../node_modules/next/link";

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

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Close search when opening mobile menu
    if (!mobileMenuOpen) setSearchOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    // Close mobile menu when opening search on mobile
    if (!searchOpen && mobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-white p-2 border-b border-gray-300 shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="font-bold text-5xl md:text-3xl">
            <img
              src="imgs/logo11.png"
              alt="Logo"
              className="ml-2 h-6 w-8 md:h-15 md:w-16 object-cover"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            {searchOpen ? (
              <div className="relative mr-2">
                <input
                  type="text"
                  className="w-full h-8 border rounded-lg px-2 pr-8"
                  placeholder="Search..."
                  autoFocus
                />
                <button
                  onClick={toggleSearch}
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  <X size={18} />
                </button>
              </div>
            ) : (
              <button onClick={toggleSearch} className="mr-4">
                <Search size={20} />
              </button>
            )}
            <button onClick={toggleMobileMenu} className="text-gray-800">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-2 lg:space-x-6">
                <NavigationMenuItem>
                  <NavigationMenuLink href="/Homepage" className="px-2 py-1.5">
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-2 py-1.5">
                    About us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white">
                    <ul className="grid w-[200px] p-2 text-sm bg-white">
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
                  <NavigationMenuTrigger className="px-2 py-1.5">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white">
                    <ul className="grid w-[220px] p-2 text-sm bg-white">
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
                    className="px-2 py-1.5"
                  >
                    Industries
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="/career" className="px-2 py-1.5">
                    Career
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="/blogs" className="px-2 py-1.5">
                    Blog
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTA and Search */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact-us"
              className="bg-blue-600 hover:bg-blue-700 transition-colors rounded text-white py-2 px-4 text-sm lg:text-base"
            >
              Contact Us
            </Link>
            <button
              onClick={toggleSearch}
              className="text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {searchOpen && (
              <div className="relative">
                <input
                  type="text"
                  className="absolute right-0 w-48 lg:w-64 h-8 border rounded-lg px-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search..."
                  autoFocus
                />
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-2 border-t border-gray-200 pt-4">
            <ul className="space-y-4">
              <li>
                <Link href="/Homepage" className="block px-2 py-1">
                  Home
                </Link>
              </li>

              <li className="border-b border-gray-100 pb-2">
                <details className="group">
                  <summary className="flex items-center justify-between px-2 py-1 cursor-pointer list-none">
                    About us
                    <span className="text-gray-500">+</span>
                  </summary>
                  <ul className="pl-4 mt-2 space-y-2">
                    {aboutuspaths.map((item) => (
                      <li key={item.title}>
                        <Link href={item.href} className="block py-1">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>

              <li className="border-b border-gray-100 pb-2">
                <details className="group">
                  <summary className="flex items-center justify-between px-2 py-1 cursor-pointer list-none">
                    Solutions
                    <span className="text-gray-500">+</span>
                  </summary>
                  <ul className="pl-4 mt-2 space-y-2">
                    {solutionspaths.map((item) => (
                      <li key={item.title}>
                        <Link href={item.href} className="block py-1">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>

              <li className="border-b border-gray-100 pb-2">
                <Link href="/industries" className="block px-2 py-1">
                  Industries
                </Link>
              </li>

              <li className="border-b border-gray-100 pb-2">
                <Link href="/career" className="block px-2 py-1">
                  Career
                </Link>
              </li>

              <li className="border-b border-gray-100 pb-2">
                <Link href="/blogs" className="block px-2 py-1">
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/contact-us"
                  className="block bg-blue-600 text-white text-center rounded py-2 px-4 mt-2"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
