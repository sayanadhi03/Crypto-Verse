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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-4 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-slate-200 via-white to-slate-300 bg-clip-text text-transparent"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Top Crypto{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                Exchanges
              </span>
            </h1>

            {/* Attractive Demo Mode Badge */}
            {demoMode && (
              <div className="flex justify-center mb-6">
                <div className="relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 animate-pulse">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full blur opacity-75 animate-pulse"></div>
                  <div className="relative flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                    <span
                      className="text-white font-bold text-sm tracking-wide"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      🚀 INTERACTIVE DEMO MODE
                    </span>
                    <div
                      className="w-2 h-2 bg-white rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            {/* Premium Subscription Notice */}
            {demoMode && (
              <div className="max-w-4xl mx-auto mb-8">
                <div className="relative bg-gradient-to-r from-slate-800/50 via-slate-700/50 to-slate-800/50 backdrop-blur-xl border border-slate-600/50 rounded-2xl p-6 shadow-2xl">
                  {/* Premium Icon */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full p-3 shadow-xl">
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

                  <div className="text-center pt-4">
                    <h3
                      className="text-2xl font-bold mb-3 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      Premium Subscription Required
                    </h3>
                    <p
                      className="text-gray-300 mb-4 leading-relaxed"
                      style={{ fontFamily: "Inter, sans-serif" }}
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
                      <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-600/30">
                        <div className="text-emerald-400 text-xl mb-2">📊</div>
                        <h4 className="text-white font-semibold text-sm mb-1">
                          Real-Time Data
                        </h4>
                        <p className="text-gray-400 text-xs">
                          Live market updates
                        </p>
                      </div>
                      <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-600/30">
                        <div className="text-blue-400 text-xl mb-2">🔄</div>
                        <h4 className="text-white font-semibold text-sm mb-1">
                          API Integration
                        </h4>
                        <p className="text-gray-400 text-xs">
                          Direct exchange feeds
                        </p>
                      </div>
                      <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-600/30">
                        <div className="text-purple-400 text-xl mb-2">📈</div>
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
                      >
                        <span
                          className="relative z-10"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
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
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
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

          {/* Error State with Mock Data */}
          {error && (
            <>
              <div className="text-center mb-12">
                <div className="bg-gradient-to-r from-amber-500/10 via-yellow-500/5 to-amber-500/10 border border-amber-500/20 rounded-3xl p-8 max-w-3xl mx-auto backdrop-blur-sm">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">⚡</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-amber-400">
                      Demo Experience
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Experience our exchange platform with curated demo data.
                    Real-time API integration requires premium access for live
                    market data.
                  </p>
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-400/20 via-yellow-400/20 to-orange-400/20 rounded-full border border-amber-400/30 backdrop-blur-sm">
                    <div className="relative">
                      <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 w-3 h-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full animate-ping opacity-75"></div>
                    </div>
                    <span
                      className="text-amber-100 text-sm font-semibold tracking-wide"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      ✨ INTERACTIVE DEMO EXPERIENCE
                    </span>
                    <div className="relative">
                      <div
                        className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <div
                        className="absolute inset-0 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping opacity-75"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Stats Banner */}
              <div className="bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 mb-12 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">🏦</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {topExchanges.length}
                    </h3>
                    <p className="text-gray-300 font-medium">
                      Featured Platforms
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">📊</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {topExchanges
                        .reduce(
                          (acc, exchange) =>
                            acc + (exchange.numberOfMarkets || 0),
                          0
                        )
                        .toLocaleString()}
                    </h3>
                    <p className="text-gray-300 font-medium">Trading Pairs</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">🌍</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Global
                    </h3>
                    <p className="text-gray-300 font-medium">Market Access</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">🚀</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">24/7</h3>
                    <p className="text-gray-300 font-medium">Trading Active</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 mb-8 hover:bg-white/10 hover:border-emerald-400/30 transition-all duration-500 ease-out">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="group cursor-pointer p-4 rounded-xl hover:bg-white/5 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        🏆
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                      {topExchanges.length}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      Top Exchanges
                    </p>
                  </div>
                  <div className="group cursor-pointer p-4 rounded-xl hover:bg-white/5 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        🏪
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {topExchanges
                        .reduce(
                          (acc, exchange) =>
                            acc + (exchange.numberOfMarkets || 0),
                          0
                        )
                        .toLocaleString()}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      Total Markets
                    </p>
                  </div>
                  <div className="group cursor-pointer p-4 rounded-xl hover:bg-white/5 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        ⚡
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                      24/7
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      Trading Available
                    </p>
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

        {/* Professional Disclaimer Section */}
        {demoMode && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <div className="bg-gradient-to-r from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-full border border-amber-500/30 mb-6">
                  <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
                  <span
                    className="text-amber-200 font-semibold text-sm tracking-wide"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    ENTERPRISE DISCLAIMER
                  </span>
                  <div
                    className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                </div>

                <h3
                  className="text-2xl font-bold mb-4 bg-gradient-to-r from-slate-200 to-white bg-clip-text text-transparent"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Professional Data Services
                </h3>

                <div className="max-w-4xl mx-auto">
                  <p
                    className="text-gray-300 leading-relaxed mb-6"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    This platform provides professional-grade cryptocurrency
                    market intelligence.
                    <span className="text-emerald-400 font-semibold">
                      {" "}
                      Real-time data access requires enterprise licensing
                    </span>{" "}
                    for compliance with financial data regulations and exchange
                    partnerships.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-600/30">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <span className="text-blue-400">🔒</span>
                        Data Security & Compliance
                      </h4>
                      <ul className="text-gray-400 text-sm space-y-2">
                        <li>• Enterprise-grade API security</li>
                        <li>• GDPR & financial regulation compliance</li>
                        <li>• Encrypted data transmission</li>
                        <li>• Audit trail & monitoring</li>
                      </ul>
                    </div>

                    <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-600/30">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <span className="text-emerald-400">💼</span>
                        Business Solutions
                      </h4>
                      <ul className="text-gray-400 text-sm space-y-2">
                        <li>• Custom API integrations</li>
                        <li>• White-label solutions</li>
                        <li>• Dedicated support teams</li>
                        <li>• SLA guarantees</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-700/50">
                    <p className="text-gray-400 text-sm leading-relaxed">
                      <span className="text-amber-300 font-medium">Note:</span>{" "}
                      Demo content is provided for evaluation purposes.
                      Production deployment requires valid licensing agreements
                      with data providers and regulatory compliance
                      verification.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Exchanges;
