"use client";
import React from "react";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { WavyBackground } from "../components/ui/wavy-background";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <WavyBackground
        className="min-h-screen flex items-center justify-center"
        colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]}
        waveWidth={50}
        backgroundFill="#0f172a"
        blur={10}
        speed="slow"
        waveOpacity={0.5}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* 404 Animation */}
          <div className="mb-8">
            <div className="relative">
              <h1
                className="text-8xl sm:text-9xl lg:text-[12rem] font-black bg-gradient-to-r from-red-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-pulse"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                404
              </h1>
              {/* Floating Crypto Icons */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                  className="absolute top-1/4 left-1/4 text-4xl animate-bounce"
                  style={{ animationDelay: "0s" }}
                >
                  ₿
                </div>
                <div
                  className="absolute top-1/3 right-1/4 text-3xl animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                >
                  Ξ
                </div>
                <div
                  className="absolute bottom-1/4 left-1/3 text-2xl animate-bounce"
                  style={{ animationDelay: "1s" }}
                >
                  ₳
                </div>
                <div
                  className="absolute bottom-1/3 right-1/3 text-3xl animate-bounce"
                  style={{ animationDelay: "1.5s" }}
                >
                  ⟠
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                Oops! Page Not Found
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              It seems like this crypto treasure is buried too deep! The page
              you&apos;re looking for doesn&apos;t exist in our blockchain.
            </p>
          </div>

          {/* Error Details Card */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 mb-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🚫</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  Page Missing
                </h3>
                <p className="text-gray-400 text-sm">
                  This route doesn&apos;t exist in our crypto universe
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔍</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  Still Searching?
                </h3>
                <p className="text-gray-400 text-sm">
                  Try navigating back to our main sections
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏠</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Go Home</h3>
                <p className="text-gray-400 text-sm">
                  Return to the main dashboard safely
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Options */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Back to Home
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>

              <Link
                href="/cryptocurrencies"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <span>₿</span>
                Explore Cryptos
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>

            {/* Quick Links */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-gray-400 mb-4 font-medium">
                Quick Navigation:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/exchanges"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300 font-medium"
                >
                  🏪 Exchanges
                </Link>
                <Link
                  href="/news"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                >
                  📰 Crypto News
                </Link>
                <Link
                  href="/cryptocurrencies"
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-300 font-medium"
                >
                  💰 Cryptocurrencies
                </Link>
              </div>
            </div>
          </div>

          {/* Fun Easter Egg */}
          <div className="mt-12 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
            <p className="text-gray-300 text-sm">
              <span className="text-purple-400 font-semibold">Fun Fact:</span>{" "}
              Did you know that there are over 20,000 cryptocurrencies in
              existence? Maybe the page you&apos;re looking for is still being
              mined! ⛏️✨
            </p>
          </div>
        </div>
      </WavyBackground>
      <Footer />
    </>
  );
}
