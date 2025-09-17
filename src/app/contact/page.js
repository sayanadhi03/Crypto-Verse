"use client";
import React from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { WavyBackground } from "../../components/ui/wavy-background";

export default function Contact() {
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
          {/* Coming Soon Animation */}
          <div className="mb-8">
            <div className="relative">
              <div className="text-6xl sm:text-7xl lg:text-8xl font-black bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent animate-pulse mb-4">
                📧
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Contact Us
              </h1>
              {/* Floating Elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                  className="absolute top-1/4 left-1/4 text-2xl animate-bounce"
                  style={{ animationDelay: "0s" }}
                >
                  💬
                </div>
                <div
                  className="absolute top-1/3 right-1/4 text-xl animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                >
                  📞
                </div>
                <div
                  className="absolute bottom-1/4 left-1/3 text-lg animate-bounce"
                  style={{ animationDelay: "1s" }}
                >
                  ✉️
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon Message */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full border border-emerald-500/30 mb-6">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
              <span
                className="text-emerald-200 font-semibold text-sm tracking-wide"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                🚧 UNDER CONSTRUCTION
              </span>
              <div
                className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>

            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              We&apos;re Building Something Amazing!
            </h2>
            <p
              className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Our contact page is currently under development. In the meantime,
              you can reach out to us through our social media channels.
            </p>
          </div>

          {/* Temporary Contact Info */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 mb-8 shadow-2xl">
            <h3
              className="text-2xl font-bold text-white mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Get In Touch
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📱</span>
                </div>
                <h4 className="text-white font-bold text-lg mb-2">
                  Social Media
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  Follow us for updates
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://github.com/sayanadhi03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.instagram.com/yoursayann/?igsh=MTc4ZDl4NW1udG0ycw%3D%3D#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 hover:text-pink-300 transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>

              <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⏰</span>
                </div>
                <h4 className="text-white font-bold text-lg mb-2">
                  Coming Soon
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  Expected launch date
                </p>
                <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg p-3">
                  <span className="text-emerald-200 font-semibold">
                    Q1 2026
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
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
              Return to Dashboard
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
        </div>
      </WavyBackground>
      <Footer />
    </>
  );
}
