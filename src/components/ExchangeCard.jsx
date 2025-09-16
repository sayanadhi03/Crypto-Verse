"use client";
import React from "react";
import Link from "next/link";

const ExchangeCard = ({ exchange, index }) => {
  const formatCurrency = (value) => {
    if (!value) return "N/A";
    if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
    if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
    if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
    if (value >= 1e3) return `$${(value / 1e3).toFixed(2)}K`;
    return `$${parseFloat(value).toFixed(2)}`;
  };

  const formatNumber = (num) => {
    if (!num) return "N/A";
    return parseInt(num).toLocaleString();
  };

  return (
    <div
      className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-emerald-400/50 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 ease-out animate-slideInUp cursor-pointer relative overflow-hidden"
      style={{
        animationDelay: `${index * 100}ms`,
        animationFillMode: "forwards",
      }}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-teal-500/0 to-cyan-500/0 group-hover:from-emerald-500/5 group-hover:via-teal-500/5 group-hover:to-cyan-500/5 transition-all duration-700 ease-out rounded-2xl"></div>
      
      <div className="flex flex-col h-full relative z-10">
        {/* Header with Logo and Rank */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <img
              src={exchange.iconUrl}
              alt={`${exchange.name} logo`}
              className="w-12 h-12 rounded-full group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out"
              onError={(e) => {
                // Create a simple SVG placeholder
                const letter = exchange.name[0].toUpperCase();
                const svgData = `data:image/svg+xml,${encodeURIComponent(`
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                    <rect width="48" height="48" rx="24" fill="#64748b"/>
                    <text x="24" y="32" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="20" font-weight="bold">
                      ${letter}
                    </text>
                  </svg>
                `)}`;
                e.target.src = svgData;
              }}
            />
            <div className="absolute -top-1 -right-1 bg-gradient-to-r from-emerald-400 to-cyan-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ease-out">
              {exchange.rank}
            </div>
            {/* Animated Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-emerald-400/0 group-hover:border-emerald-400/50 group-hover:scale-125 transition-all duration-500 ease-out"></div>
          </div>
          <div className="flex-1 min-w-0">
            <h3
              className="text-white font-bold text-lg truncate group-hover:text-emerald-300 transition-colors duration-300"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              {exchange.name}
            </h3>
            {exchange.description && (
              <p className="text-gray-400 text-sm truncate group-hover:text-gray-300 transition-colors duration-300">
                {exchange.description}
              </p>
            )}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* 24h Volume */}
          <div className="bg-white/5 rounded-xl p-4 group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300 ease-out">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-blue-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">📊</span>
              <h4 className="text-gray-300 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300">24h Volume</h4>
            </div>
            <p className="text-white font-bold text-lg group-hover:text-blue-200 transition-colors duration-300">
              {formatCurrency(exchange.volume)}
            </p>
          </div>

          {/* Markets */}
          <div className="bg-white/5 rounded-xl p-4 group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300 ease-out">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-purple-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">🏪</span>
              <h4 className="text-gray-300 text-sm font-medium group-hover:text-purple-300 transition-colors duration-300">Markets</h4>
            </div>
            <p className="text-white font-bold text-lg group-hover:text-purple-200 transition-colors duration-300">
              {formatNumber(exchange.numberOfMarkets)}
            </p>
          </div>

          {/* Market Share */}
          {exchange.marketShare && (
            <div className="bg-white/5 rounded-xl p-4 sm:col-span-2 group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300 ease-out">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">📈</span>
                <h4 className="text-gray-300 text-sm font-medium group-hover:text-green-300 transition-colors duration-300">
                  Market Share
                </h4>
              </div>
              <p className="text-white font-bold text-lg group-hover:text-green-200 transition-colors duration-300">
                {parseFloat(exchange.marketShare).toFixed(2)}%
              </p>
              {/* Animated Progress Bar */}
              <div className="mt-3 bg-white/10 rounded-full h-2 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-1000 ease-out group-hover:scale-x-110 origin-left"
                  style={{ width: `${Math.min(parseFloat(exchange.marketShare), 100)}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>

        {/* Verified Badge and Website Link */}
        <div className="flex items-center justify-between mt-auto">
          {exchange.verified && (
            <div className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
              <span className="text-green-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">✅</span>
              <span className="text-green-400 text-sm font-medium group-hover:text-green-300 transition-colors duration-300">
                Verified
              </span>
            </div>
          )}

          {exchange.websiteUrl && (
            <Link
              href={exchange.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium text-sm transition-all duration-300 group/link hover:scale-105 px-3 py-2 rounded-lg hover:bg-emerald-500/10"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Visit Exchange
              <svg
                className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:scale-110 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          )}
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-2xl">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-emerald-400/0 group-hover:bg-emerald-400/60 rounded-full group-hover:animate-ping transition-all duration-500" style={{ animationDelay: "0s" }}></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-teal-400/0 group-hover:bg-teal-400/60 rounded-full group-hover:animate-ping transition-all duration-500" style={{ animationDelay: "0.2s" }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-cyan-400/0 group-hover:bg-cyan-400/60 rounded-full group-hover:animate-ping transition-all duration-500" style={{ animationDelay: "0.4s" }}></div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeCard;
