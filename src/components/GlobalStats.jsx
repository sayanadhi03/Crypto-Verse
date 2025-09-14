"use client";
import React from "react";
import Link from "next/link";
import Card from "./Card";

const GlobalStats = ({ stats }) => {
  // Mock data for UI development - will be replaced with real API data
  const mockStats = {
    totalCryptocurrencies: 13847,
    totalMarketCap: 2845672813928,
    totalExchanges: 531,
    total24hVolume: 89472851632,
    btcDominance: 55.2,
    ethDominance: 17.8,
    marketCapChange24h: 2.4,
  };

  const displayStats = stats || mockStats;

  const formatCurrency = (value) => {
    if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
    if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
    if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
    return `$${value.toLocaleString()}`;
  };

  const formatNumber = (value) => {
    return value.toLocaleString();
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl lg:text-4xl font-extrabold text-center mb-8 lg:mb-12 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Global Cryptocurrency Statistics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Total Cryptocurrencies */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300 group">
            <div className="flex items-center gap-4">
              <div className="text-4xl lg:text-5xl group-hover:scale-110 transition-transform duration-300">
                🌍
              </div>
              <div className="flex-1">
                <div
                  className="text-sm text-gray-300 uppercase tracking-wider font-medium mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Total Cryptocurrencies
                </div>
                <div
                  className="text-2xl lg:text-3xl font-bold text-white"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {formatNumber(displayStats.totalCryptocurrencies)}
                </div>
              </div>
            </div>
          </div>

          {/* Total Market Cap */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-emerald-400/50 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2 transition-all duration-300 group">
            <div className="flex items-center gap-4">
              <div className="text-4xl lg:text-5xl group-hover:scale-110 transition-transform duration-300">
                💰
              </div>
              <div className="flex-1">
                <div
                  className="text-sm text-gray-300 uppercase tracking-wider font-medium mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Total Market Cap
                </div>
                <div
                  className="text-2xl lg:text-3xl font-bold text-white"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {formatCurrency(displayStats.totalMarketCap)}
                </div>
                <div
                  className={`flex items-center gap-1 text-sm font-semibold mt-1 ${
                    displayStats.marketCapChange24h >= 0
                      ? "text-emerald-400"
                      : "text-red-400"
                  }`}
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <span>
                    {displayStats.marketCapChange24h >= 0 ? "↗" : "↘"}
                  </span>
                  <span>{Math.abs(displayStats.marketCapChange24h)}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Total Exchanges */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-300 group">
            <div className="flex items-center gap-4">
              <div className="text-4xl lg:text-5xl group-hover:scale-110 transition-transform duration-300">
                🏪
              </div>
              <div className="flex-1">
                <div
                  className="text-sm text-gray-300 uppercase tracking-wider font-medium mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Total Exchanges
                </div>
                <div
                  className="text-2xl lg:text-3xl font-bold text-white"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {formatNumber(displayStats.totalExchanges)}
                </div>
              </div>
            </div>
          </div>

          {/* 24h Trading Volume */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-yellow-400/50 hover:shadow-2xl hover:shadow-yellow-500/20 hover:-translate-y-2 transition-all duration-300 group">
            <div className="flex items-center gap-4">
              <div className="text-4xl lg:text-5xl group-hover:scale-110 transition-transform duration-300">
                📊
              </div>
              <div className="flex-1">
                <div
                  className="text-sm text-gray-300 uppercase tracking-wider font-medium mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  24h Trading Volume
                </div>
                <div
                  className="text-2xl lg:text-3xl font-bold text-white"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {formatCurrency(displayStats.total24hVolume)}
                </div>
              </div>
            </div>
          </div>

          {/* Bitcoin Dominance */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-orange-400/50 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2 transition-all duration-300 group">
            <div className="flex items-center gap-4">
              <div className="text-4xl lg:text-5xl group-hover:scale-110 transition-transform duration-300">
                ₿
              </div>
              <div className="flex-1">
                <div
                  className="text-sm text-gray-300 uppercase tracking-wider font-medium mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Bitcoin Dominance
                </div>
                <div
                  className="text-2xl lg:text-3xl font-bold text-white"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {displayStats.btcDominance}%
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mt-3">
                  <div
                    className="h-full bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full transition-all duration-500"
                    style={{ width: `${displayStats.btcDominance}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Ethereum Dominance */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-indigo-400/50 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2 transition-all duration-300 group">
            <div className="flex items-center gap-4">
              <div className="text-4xl lg:text-5xl group-hover:scale-110 transition-transform duration-300">
                Ξ
              </div>
              <div className="flex-1">
                <div
                  className="text-sm text-gray-300 uppercase tracking-wider font-medium mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Ethereum Dominance
                </div>
                <div
                  className="text-2xl lg:text-3xl font-bold text-white"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {displayStats.ethDominance}%
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mt-3">
                  <div
                    className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full transition-all duration-500"
                    style={{ width: `${displayStats.ethDominance}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center mb-8 sm:mb-12">
        <Card
          title="Cryptocurrencies"
          description="Browse all cryptocurrencies and their current market data"
          href="/cryptocurrencies"
          icon="₿"
        />

        <Card
          title="Exchanges"
          description="Top cryptocurrency exchanges with trading volumes"
          href="/exchanges"
          icon="🏪"
        />

        <Card
          title="Crypto News"
          description="Latest cryptocurrency news and market updates"
          href="/news"
          icon="📰"
        />
      </div>

      {/* Example crypto details link */}
      <div className="text-center">
        <p
          className="text-gray-300 mb-6 text-base sm:text-xl font-medium tracking-wide"
          style={{ fontFamily: "Poppins, Inter, sans-serif" }}
        >
          Explore individual cryptocurrencies:
        </p>
        <Link
          href="/crypto/bitcoin"
          className="inline-block bg-gradient-to-r from-orange-500 via-red-500 to-yellow-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold hover:from-orange-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-2xl text-sm sm:text-lg tracking-wide hover:shadow-orange-500/25"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          🚀 Bitcoin Details →
        </Link>
      </div>
    </>
  );
};

export default GlobalStats;
