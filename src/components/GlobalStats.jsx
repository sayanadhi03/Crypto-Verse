"use client";
import React from "react";
import Link from "next/link";
import Card from "./Card";
import {
  useGetGlobalStatsQuery,
  useGetCryptoDetailsQuery,
} from "../services/cryptoApi";

const GlobalStats = () => {
  const { data: globalStats, isFetching, error } = useGetGlobalStatsQuery();

  // Ethereum UUID from CoinRanking API (this is Ethereum's standard ID)
  const { data: ethData, isFetching: ethFetching } =
    useGetCryptoDetailsQuery("razxDUgYGNAdQ");

  console.log("Global Stats:", globalStats);
  console.log("ETH Data:", ethData);

  // Display loading state
  if (isFetching || ethFetching) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl lg:text-4xl font-extrabold text-center mb-8 lg:mb-12 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent animate-pulse"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Loading Global Stats...
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 relative overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "slideInUp 0.6s ease-out forwards",
              }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_2s_infinite]"></div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/10 rounded-full animate-pulse"></div>
                <div className="flex-1 space-y-3">
                  <div className="h-4 bg-white/10 rounded animate-pulse"></div>
                  <div className="h-8 bg-white/10 rounded animate-pulse"></div>
                  <div className="h-3 bg-white/10 rounded w-2/3 animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `}</style>
      </div>
    );
  }

  // Display error state
  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-3xl lg:text-4xl font-extrabold mb-8 lg:mb-12 text-red-400"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Error Loading Stats
        </h2>
        <p className="text-gray-300">
          Unable to fetch global cryptocurrency statistics.
        </p>
      </div>
    );
  }

  const stats = globalStats?.data;
  const ethCoin = ethData?.data?.coin;

  // Calculate ETH dominance
  const calculateEthDominance = () => {
    if (stats?.totalMarketCap && ethCoin?.marketCap) {
      return (ethCoin.marketCap / stats.totalMarketCap) * 100;
    }
    return 0;
  };

  const ethDominance = calculateEthDominance();

  const formatCurrency = (value) => {
    if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
    if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
    if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
    return `$${value.toLocaleString()}`;
  };

  const formatNumber = (value) => {
    return value?.toLocaleString() || "0";
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fadeIn">
        <h2
          className="text-3xl lg:text-4xl font-extrabold text-center mb-8 lg:mb-12 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Global Cryptocurrency Statistics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Total Cryptocurrencies */}
          <div
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-500 ease-out group animate-slideInUp"
            style={{ animationDelay: "100ms" }}
          >
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
                  {formatNumber(stats?.totalCoins || 0)}
                </div>
              </div>
            </div>
          </div>

          {/* Total Market Cap */}
          <div
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-emerald-400/50 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2 transition-all duration-500 ease-out group animate-slideInUp"
            style={{ animationDelay: "200ms" }}
          >
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
                  {formatCurrency(stats?.totalMarketCap || 0)}
                </div>
                <div
                  className={`flex items-center gap-1 text-sm font-semibold mt-1 ${
                    (stats?.totalMarketCapChange || 0) >= 0
                      ? "text-emerald-400"
                      : "text-red-400"
                  }`}
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <span>
                    {(stats?.totalMarketCapChange || 0) >= 0 ? "↗" : "↘"}
                  </span>
                  <span>{Math.abs(stats?.totalMarketCapChange || 0)}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Total Exchanges */}
          <div
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-500 ease-out group animate-slideInUp"
            style={{ animationDelay: "300ms" }}
          >
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
                  {formatNumber(stats?.totalExchanges || 0)}
                </div>
              </div>
            </div>
          </div>

          {/* 24h Trading Volume */}
          <div
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-yellow-400/50 hover:shadow-2xl hover:shadow-yellow-500/20 hover:-translate-y-2 transition-all duration-500 ease-out group animate-slideInUp"
            style={{ animationDelay: "400ms" }}
          >
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
                  {formatCurrency(stats?.total24hVolume || 0)}
                </div>
              </div>
            </div>
          </div>

          {/* Bitcoin Dominance */}
          <div
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-orange-400/50 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2 transition-all duration-500 ease-out group animate-slideInUp"
            style={{ animationDelay: "500ms" }}
          >
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
                  {stats?.btcDominance
                    ? Number(stats.btcDominance).toFixed(2)
                    : "0.0"}
                  %
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mt-3">
                  <div
                    className="h-full bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${stats?.btcDominance || 0}%`,
                      transform: "scaleX(0)",
                      transformOrigin: "left",
                      animation: "progressBar 1.5s ease-out 1s forwards",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Ethereum Dominance */}
          <div
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-indigo-400/50 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2 transition-all duration-500 ease-out group animate-slideInUp"
            style={{ animationDelay: "600ms" }}
          >
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
                  {ethDominance ? ethDominance.toFixed(2) : "0.0"}%
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mt-3">
                  <div
                    className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${ethDominance || 0}%`,
                      transform: "scaleX(0)",
                      transformOrigin: "left",
                      animation: "progressBar 1.5s ease-out 1.2s forwards",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section with additional spacing */}
      <div className="mt-16 lg:mt-20">
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
      </div>

      {/* Global CSS Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes progressBar {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slideInUp {
          opacity: 0;
          animation: slideInUp 0.6s ease-out forwards;
        } /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Enhanced hover effects */
        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Prevent layout shift */
        .prevent-layout-shift {
          contain: layout style paint;
        }
      `}</style>
    </>
  );
};

export default GlobalStats;
