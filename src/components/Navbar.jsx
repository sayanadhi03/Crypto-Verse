"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className="bg-gray-900 text-white sticky top-0 z-50 shadow-md border-b"
      style={{
        scrollBehavior: "smooth",
        willChange: "transform",
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-3 group">
            {/* Professional Logo Icon */}
            <div className="relative">
              {/* Main logo container with gradient background */}
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                {/* Glass overlay effect */}
                <div className="absolute inset-0 bg-white/20 rounded-xl"></div>
                {/* Currency symbol */}
                <span className="relative text-white font-bold text-xl group-hover:scale-125 transition-transform duration-300">
                  ₵
                </span>
              </div>
              {/* Floating particles around logo */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full opacity-70 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300"></div>
              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-50 group-hover:opacity-80 group-hover:animate-pulse transition-all duration-300"></div>
            </div>

            {/* Enhanced Typography */}
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-wide leading-none">
                <span className="text-white drop-shadow-sm group-hover:text-gray-100 transition-colors duration-300">
                  Crypto
                </span>
                <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text drop-shadow-sm group-hover:from-cyan-300 group-hover:via-blue-400 group-hover:to-purple-500 transition-all duration-300">
                  {" "}
                  Verse
                </span>
              </span>
              {/* Professional tagline */}
              <span className="text-xs text-gray-400 font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                Digital Assets Hub
              </span>
            </div>
          </Link>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-white hover:bg-gray-800 hover:text-cyan-400"
                  )}
                >
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/cryptocurrencies"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-white hover:bg-gray-800 hover:text-cyan-400"
                  )}
                >
                  Cryptocurrencies
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/exchanges"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-white hover:bg-gray-800 hover:text-cyan-400"
                  )}
                >
                  Exchanges
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/news"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-white hover:bg-gray-800 hover:text-cyan-400"
                  )}
                >
                  News
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="relative inline-flex items-center justify-center p-3 rounded-xl text-white hover:text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 transform hover:scale-105"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <div className="relative">
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-7 w-7 transition-transform duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-7 w-7 transition-transform duration-300 rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </div>
            {/* Animated ring effect */}
            <div
              className={`absolute inset-0 rounded-xl border-2 border-cyan-400/0 transition-all duration-300 ${
                isMobileMenuOpen ? "border-cyan-400/50 scale-110" : ""
              }`}
            ></div>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown - Enhanced with glassmorphism effects */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 z-50 overflow-hidden">
          {/* Enhanced backdrop blur */}
          <div className="absolute inset-0 bg-black/10 backdrop-blur-xl"></div>

          {/* Main menu container with glassmorphism */}
          <div className="relative bg-white/5 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-cyan-500/10">
            {/* Glass reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>

            {/* Animated gradient border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-pulse"></div>

            <div className="relative px-3 pt-4 pb-4 space-y-1">
              {[
                { href: "/", label: "Home", icon: "🏠" },
                {
                  href: "/cryptocurrencies",
                  label: "Cryptocurrencies",
                  icon: "₿",
                },
                { href: "/exchanges", label: "Exchanges", icon: "🏦" },
                { href: "/news", label: "News", icon: "📰" },
              ].map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="group flex items-center space-x-3 text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm px-3 py-3 rounded-xl text-base font-medium transition-all duration-300 transform hover:scale-105 hover:translate-x-1 border border-white/10 hover:border-white/30 hover:shadow-lg hover:shadow-cyan-500/20"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Glass icon container - smaller */}
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/30">
                    {/* Inner glass reflection */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
                    <span className="relative text-lg group-hover:scale-125 transition-transform duration-300">
                      {item.icon}
                    </span>
                  </div>

                  {/* Glass text container */}
                  <div className="relative flex-1">
                    <span className="relative z-10 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-blue-300 group-hover:bg-clip-text transition-all duration-300">
                      {item.label}
                    </span>
                    {/* Text glass reflection */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"></div>
                  </div>

                  {/* Glass arrow indicator - smaller */}
                  <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <div className="w-6 h-6 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-cyan-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Glass bottom accent with frosted effect - smaller */}
            <div className="relative h-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-blue-400/30 to-purple-400/30 backdrop-blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
