"use client";
import React from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { WavyBackground } from "../../components/ui/wavy-background";

export default function Terms() {
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
          {/* Legal Document Animation */}
          <div className="mb-8">
            <div className="relative">
              <div className="text-6xl sm:text-7xl lg:text-8xl font-black bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 bg-clip-text text-transparent animate-pulse mb-4">
                📜
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-amber-400 to-red-600 bg-clip-text text-transparent"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Terms of Service
              </h1>
              {/* Floating Legal Icons */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                  className="absolute top-1/4 left-1/4 text-2xl animate-bounce"
                  style={{ animationDelay: "0s" }}
                >
                  ⚖️
                </div>
                <div
                  className="absolute top-1/3 right-1/4 text-xl animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                >
                  📋
                </div>
                <div
                  className="absolute bottom-1/4 left-1/3 text-lg animate-bounce"
                  style={{ animationDelay: "1s" }}
                >
                  ✍️
                </div>
              </div>
            </div>
          </div>

          {/* Legal Framework Message */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-500/20 to-red-500/20 rounded-full border border-amber-500/30 mb-6">
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
              <span
                className="text-amber-200 font-semibold text-sm tracking-wide"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                ⚖️ LEGAL FRAMEWORK IN DEVELOPMENT
              </span>
              <div
                className="w-3 h-3 bg-red-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>

            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Comprehensive Terms Coming Soon
            </h2>
            <p
              className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Our legal team is crafting detailed terms of service to protect
              both users and the platform while ensuring fair usage.
            </p>
          </div>

          {/* Terms Preview */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 mb-8 shadow-2xl">
            <h3
              className="text-2xl font-bold text-white mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              What to Expect
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-left p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">✅</span>
                </div>
                <h4 className="text-white font-bold text-lg mb-3">
                  Fair Usage Policy
                </h4>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Reasonable API rate limits</li>
                  <li>• Data usage guidelines</li>
                  <li>• Community standards</li>
                  <li>• Account security requirements</li>
                </ul>
              </div>

              <div className="text-left p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">🔒</span>
                </div>
                <h4 className="text-white font-bold text-lg mb-3">
                  User Protection
                </h4>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Data ownership rights</li>
                  <li>• Privacy safeguards</li>
                  <li>• Dispute resolution process</li>
                  <li>• Service availability guarantees</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Legal Status */}
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-lg border border-slate-600/50 rounded-2xl p-6 mb-8">
            <h4 className="text-white font-bold text-lg mb-4">
              📊 Current Status
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl mb-2">📝</div>
                <div className="text-amber-400 font-semibold text-sm">
                  DRAFTING
                </div>
                <div className="text-gray-400 text-xs">Legal documentation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🔍</div>
                <div className="text-blue-400 font-semibold text-sm">
                  REVIEW
                </div>
                <div className="text-gray-400 text-xs">Compliance check</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">✅</div>
                <div className="text-green-400 font-semibold text-sm">
                  PUBLISH
                </div>
                <div className="text-gray-400 text-xs">Q1 2026</div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-amber-400 text-xl">⚠️</span>
              <h4 className="text-amber-200 font-semibold">Interim Notice</h4>
            </div>
            <p className="text-amber-100/80 text-sm leading-relaxed">
              Until our comprehensive terms are published, usage of this
              platform constitutes agreement to reasonable use policies and
              applicable laws. For any questions, please contact us through our
              social media channels.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25"
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
              Return to Platform
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
