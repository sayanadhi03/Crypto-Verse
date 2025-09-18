"use client";
import React from "react";
import Link from "next/link";
import { useGetExchangesQuery } from "../../services/cryptoApi";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ExchangeCard from "../../components/ExchangeCard";

const Exchanges = () => {
  // Using demo mode with mock data to avoid API rate limits
  const demoMode = true;
  const {
    data: exchangesData,
    isFetching,
    error,
  } = useGetExchangesQuery(undefined, {
    skip: demoMode, // Skip API call when in demo mode
  });

  // Mock data for demonstration when API is not available
  const mockExchanges = [
    {
      uuid: "1",
      name: "Binance",
      iconUrl: `data:image/svg+xml,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
          <rect width="48" height="48" rx="24" fill="#f3ba2f"/>
          <text x="24" y="32" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="20" font-weight="bold">
            B
          </text>
        </svg>
      `)}`,
      rank: 1,
      volume: "15400000000",
      numberOfMarkets: 1500,
      marketShare: "35.2",
      verified: true,
      websiteUrl: "https://binance.com",
      description: "World's largest crypto exchange by volume",
    },
    {
      uuid: "2",
      name: "CoinDCX",
      iconUrl: `data:image/svg+xml,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
          <rect width="48" height="48" rx="24" fill="#0052ff"/>
          <text x="24" y="32" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="20" font-weight="bold">
            C
          </text>
        </svg>
      `)}`,
      rank: 2,
      volume: "1200000000",
      numberOfMarkets: 200,
      marketShare: "15.7",
      verified: true,
      websiteUrl: "https://coindcx.com",
      description: "India's largest cryptocurrency exchange",
    },
    {
      uuid: "3",
      name: "Upstox",
      iconUrl: `data:image/svg+xml,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
          <rect width="48" height="48" rx="24" fill="#6c5ce7"/>
          <text x="24" y="32" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="20" font-weight="bold">
            U
          </text>
        </svg>
      `)}`,
      rank: 3,
      volume: "850000000",
      numberOfMarkets: 150,
      marketShare: "12.1",
      verified: true,
      websiteUrl: "https://upstox.com",
      description: "Leading trading and investment platform",
    },
    {
      uuid: "4",
      name: "Angel One",
      iconUrl: `data:image/svg+xml,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
          <rect width="48" height="48" rx="24" fill="#e17055"/>
          <text x="24" y="32" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="20" font-weight="bold">
            A
          </text>
        </svg>
      `)}`,
      rank: 4,
      volume: "750000000",
      numberOfMarkets: 120,
      marketShare: "8.9",
      verified: true,
      websiteUrl: "https://angelone.in",
      description: "Full-service retail broking house",
    },
  ];

  // Use mock data in demo mode, otherwise use API data
  const topExchanges = demoMode
    ? mockExchanges
    : (exchangesData?.data?.exchanges || []).slice(0, 10);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black pt-8 pb-20 relative overflow-hidden">
        {/* Professional Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/5 via-transparent to-teal-900/5 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-8 lg:mb-12">
            <h1
              className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Top Crypto Exchanges
            </h1>

            {/* Demo Mode Badge */}
            {demoMode && (
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-white text-sm font-medium">
                    Demo Mode
                  </span>
                </div>
              </div>
            )}

            {/* Premium Plan Notice */}
            {demoMode && (
              <div className="max-w-4xl mx-auto mb-8">
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                  {/* Premium Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full p-3 shadow-xl">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="text-center">
                    <h3
                      className="text-2xl font-bold mb-3 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      Premium Plan Required
                    </h3>
                    <p
                      className="text-gray-300 mb-6 leading-relaxed"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Access real-time market data, live trading volumes, and
                      comprehensive exchange analytics with our
                      <span className="text-emerald-400 font-semibold">
                        {" "}
                        Premium Plan
                      </span>
                      . Currently displaying curated demo content for
                      demonstration purposes.
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <div className="text-emerald-400 text-xl mb-2">📊</div>
                        <h4 className="text-white font-semibold text-sm mb-1">
                          Real-Time Data
                        </h4>
                        <p className="text-gray-400 text-xs">
                          Live market updates
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <div className="text-cyan-400 text-xl mb-2">🔄</div>
                        <h4 className="text-white font-semibold text-sm mb-1">
                          API Integration
                        </h4>
                        <p className="text-gray-400 text-xs">
                          Direct exchange feeds
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <div className="text-emerald-400 text-xl mb-2">📈</div>
                        <h4 className="text-white font-semibold text-sm mb-1">
                          Advanced Analytics
                        </h4>
                        <p className="text-gray-400 text-xs">
                          Professional insights
                        </p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-center">
                      <Link
                        href="/premium"
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25"
                        style={{ fontFamily: "Space Grotesk, sans-serif" }}
                      >
                        <span className="relative z-10">
                          ⚡ Upgrade to Premium
                        </span>
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
                </div>
              </div>
            )}

            <p
              className="text-lg text-gray-300 max-w-2xl mx-auto"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Discover the world&apos;s leading cryptocurrency exchanges ranked
              by trading volume, market share, and reliability.
            </p>
          </div>

          {/* Loading State (only show when not in demo mode) */}
          {isFetching && !demoMode && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-white/10 rounded-full"></div>
                      <div className="flex-1">
                        <div className="h-4 bg-white/10 rounded mb-2"></div>
                        <div className="h-3 bg-white/10 rounded w-2/3"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/5 rounded-xl p-4">
                        <div className="h-3 bg-white/10 rounded mb-2"></div>
                        <div className="h-4 bg-white/10 rounded"></div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4">
                        <div className="h-3 bg-white/10 rounded mb-2"></div>
                        <div className="h-4 bg-white/10 rounded"></div>
                      </div>
                    </div>
                    <div className="h-3 bg-white/10 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error State with Demo Data */}
          {error && (
            <>
              <div className="text-center mb-8">
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 max-w-2xl mx-auto">
                  <div className="text-4xl mb-4">🏦</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Demo Mode Active
                  </h3>
                  <p className="text-gray-300">
                    Showing sample exchange data for demonstration purposes.
                  </p>
                </div>
              </div>

              {/* Stats Banner */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {topExchanges.length}
                    </h3>
                    <p className="text-gray-400">Featured Exchanges</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {topExchanges
                        .reduce(
                          (acc, exchange) =>
                            acc + (exchange.numberOfMarkets || 0),
                          0
                        )
                        .toLocaleString()}
                    </h3>
                    <p className="text-gray-400">Trading Pairs</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">24/7</h3>
                    <p className="text-gray-400">Trading Available</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topExchanges.map((exchange, index) => (
                  <ExchangeCard
                    key={exchange.uuid || exchange.id || index}
                    exchange={exchange}
                    index={index}
                  />
                ))}
              </div>
            </>
          )}

          {/* Exchanges Grid */}
          {!isFetching && !error && topExchanges.length > 0 && (
            <>
              {/* Stats Banner */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {topExchanges.length}
                    </h3>
                    <p className="text-gray-400">Top Exchanges</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {topExchanges
                        .reduce(
                          (acc, exchange) =>
                            acc + (exchange.numberOfMarkets || 0),
                          0
                        )
                        .toLocaleString()}
                    </h3>
                    <p className="text-gray-400">Total Markets</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">24/7</h3>
                    <p className="text-gray-400">Trading Available</p>
                  </div>
                </div>
              </div>

              {/* Exchanges Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topExchanges.map((exchange, index) => (
                  <ExchangeCard
                    key={exchange.uuid || exchange.id || index}
                    exchange={exchange}
                    index={index}
                  />
                ))}
              </div>
            </>
          )}

          {/* No Data State */}
          {!isFetching && !error && topExchanges.length === 0 && (
            <div className="text-center py-20">
              <div className="text-gray-400 text-xl mb-4">
                📊 No exchanges data available
              </div>
              <p className="text-gray-500">Please check back later</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Exchanges;
