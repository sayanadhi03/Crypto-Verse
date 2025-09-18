"use client";
import React, { useState, use } from "react";
import Link from "next/link";
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../../../services/cryptoApi";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import LineChart from "../../../components/LineChart";

const CryptoDetails = ({ params }) => {
  const { coinId } = use(params);
  const [timePeriod, setTimePeriod] = useState("7d");
  const [currency, setCurrency] = useState("USD"); // USD or INR
  const USD_TO_INR = 83.12; // Approximate exchange rate

  const {
    data: cryptoDetails,
    isFetching,
    error,
  } = useGetCryptoDetailsQuery(coinId);

  const { data: coinHistory, isFetching: historyLoading } =
    useGetCryptoHistoryQuery({
      coinId,
      timePeriod,
    });

  const coin = cryptoDetails?.data?.coin;

  const formatCurrency = (value) => {
    if (!value) return "N/A";

    let convertedValue = parseFloat(value);
    let symbol = "$";

    if (currency === "INR") {
      convertedValue = convertedValue * USD_TO_INR;
      symbol = "₹";
    }

    if (convertedValue >= 1e12)
      return `${symbol}${(convertedValue / 1e12).toFixed(2)}T`;
    if (convertedValue >= 1e9)
      return `${symbol}${(convertedValue / 1e9).toFixed(2)}B`;
    if (convertedValue >= 1e6)
      return `${symbol}${(convertedValue / 1e6).toFixed(2)}M`;
    if (convertedValue >= 1e3)
      return `${symbol}${(convertedValue / 1e3).toFixed(2)}K`;
    return `${symbol}${convertedValue.toFixed(2)}`;
  };

  const formatPrice = (price) => {
    if (!price) return "N/A";

    let numPrice = parseFloat(price);
    let symbol = "$";

    if (currency === "INR") {
      numPrice = numPrice * USD_TO_INR;
      symbol = "₹";
    }

    if (numPrice >= 1) return `${symbol}${numPrice.toFixed(2)}`;
    if (numPrice >= 0.01) return `${symbol}${numPrice.toFixed(4)}`;
    return `${symbol}${numPrice.toFixed(8)}`;
  };

  const formatNumber = (num) => {
    if (!num) return "N/A";
    return parseInt(num).toLocaleString();
  };

  const formatPercentage = (change) => {
    if (!change) return "0.00";
    const numChange = parseFloat(change);
    return numChange.toFixed(2);
  };

  if (isFetching) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-4 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Loading Skeleton */}
            <div className="animate-pulse">
              <div className="h-8 bg-white/10 rounded mb-4 w-64"></div>
              <div className="h-32 bg-white/10 rounded mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-32 bg-white/10 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-4 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
            <div className="text-red-400 text-xl mb-4">
              ❌ Error loading cryptocurrency details
            </div>
            <Link
              href="/cryptocurrencies"
              className="text-emerald-400 hover:text-emerald-300"
            >
              ← Back to Cryptocurrencies
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!coin) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-4 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
            <div className="text-gray-400 text-xl mb-4">
              Cryptocurrency not found
            </div>
            <Link
              href="/cryptocurrencies"
              className="text-emerald-400 hover:text-emerald-300"
            >
              ← Back to Cryptocurrencies
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 pt-8 pb-20 relative overflow-hidden">
        {/* Attractive Coin Detail Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/8 via-purple-500/5 to-pink-500/8 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/3 via-transparent to-cyan-400/5 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <Link
            href="/cryptocurrencies"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 mb-6 transition-colors duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Cryptocurrencies
          </Link>

          {/* Header Section */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex items-center gap-4">
                <img
                  src={coin.iconUrl}
                  alt={`${coin.name} logo`}
                  className="w-16 h-16 rounded-full"
                  onError={(e) => {
                    // Create a simple SVG placeholder
                    const letter = coin.symbol[0].toUpperCase();
                    const svgData = `data:image/svg+xml,${encodeURIComponent(`
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
                        <rect width="64" height="64" rx="32" fill="#64748b"/>
                        <text x="32" y="42" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="28" font-weight="bold">
                          ${letter}
                        </text>
                      </svg>
                    `)}`;
                    e.target.src = svgData;
                  }}
                />
                <div>
                  <h1
                    className="text-4xl font-bold text-white mb-2"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {coin.name}
                  </h1>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400 text-lg">{coin.symbol}</span>
                    <span className="bg-gradient-to-r from-orange-400 to-pink-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                      Rank #{coin.rank}
                    </span>
                  </div>
                </div>
              </div>

              {/* Currency Toggle */}
              <div className="flex justify-center md:justify-start">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-1.5 flex items-center gap-1">
                  <button
                    onClick={() => setCurrency("USD")}
                    className={`px-3 py-1.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                      currency === "USD"
                        ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg transform scale-105"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    USD
                  </button>
                  <button
                    onClick={() => setCurrency("INR")}
                    className={`px-3 py-1.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                      currency === "INR"
                        ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg transform scale-105"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    INR
                  </button>
                </div>
              </div>

              <div className="md:ml-auto text-right">
                <div className="text-4xl font-bold text-white mb-2">
                  {formatPrice(coin.price)}
                </div>
                <div
                  className={`flex items-center gap-2 ${
                    parseFloat(coin.change) >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  <span
                    className={`${parseFloat(coin.change) >= 0 ? "↗" : "↘"}`}
                  >
                    {parseFloat(coin.change) >= 0 ? "↗" : "↘"}
                  </span>
                  <span className="text-lg font-semibold">
                    {formatPercentage(coin.change)}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Price Chart Section */}
          <div className="mb-8">
            {/* Time Period Selector */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Price History
                </h2>
                <div className="flex flex-wrap gap-2">
                  {["24h", "7d", "30d", "3m", "1y", "3y", "5y"].map(
                    (period) => (
                      <button
                        key={period}
                        onClick={() => setTimePeriod(period)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                          timePeriod === period
                            ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg shadow-orange-500/25"
                            : "bg-white/10 text-gray-300 hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-pink-500/20 hover:text-white"
                        }`}
                      >
                        {period.toUpperCase()}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Chart Component */}
            {historyLoading ? (
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                <div className="animate-pulse">
                  <div className="h-8 bg-white/10 rounded mb-4 w-64"></div>
                  <div className="h-64 bg-white/10 rounded"></div>
                </div>
              </div>
            ) : (
              <LineChart
                coinHistory={coinHistory}
                currentPrice={coin?.price}
                coinName={coin?.name}
              />
            )}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Market Cap */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <span className="text-orange-400">💰</span>
                </div>
                <h3 className="text-white font-semibold">Market Cap</h3>
              </div>
              <p className="text-2xl font-bold text-white">
                {formatCurrency(coin.marketCap)}
              </p>
            </div>

            {/* 24h Volume */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center">
                  <span className="text-pink-400">📊</span>
                </div>
                <h3 className="text-white font-semibold">24h Volume</h3>
              </div>
              <p className="text-2xl font-bold text-white">
                {formatCurrency(coin["24hVolume"])}
              </p>
            </div>

            {/* Supply */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <span className="text-yellow-400">🪙</span>
                </div>
                <h3 className="text-white font-semibold">Circulating Supply</h3>
              </div>
              <p className="text-2xl font-bold text-white">
                {formatNumber(coin.supply?.circulating)}
              </p>
              {coin.supply?.total && (
                <p className="text-gray-400 text-sm mt-1">
                  Total: {formatNumber(coin.supply.total)}
                </p>
              )}
            </div>

            {/* All Time High */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <span className="text-amber-400">📈</span>
                </div>
                <h3 className="text-white font-semibold">All Time High</h3>
              </div>
              <p className="text-2xl font-bold text-white">
                {formatPrice(coin.allTimeHigh?.price)}
              </p>
              {coin.allTimeHigh?.timestamp && (
                <p className="text-gray-400 text-sm mt-1">
                  {new Date(
                    coin.allTimeHigh.timestamp * 1000
                  ).toLocaleDateString()}
                </p>
              )}
            </div>

            {/* Number of Markets */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-rose-500/20 rounded-full flex items-center justify-center">
                  <span className="text-rose-400">🏪</span>
                </div>
                <h3 className="text-white font-semibold">Markets</h3>
              </div>
              <p className="text-2xl font-bold text-white">
                {formatNumber(coin.numberOfMarkets)}
              </p>
            </div>

            {/* Number of Exchanges */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <span className="text-orange-400">🔄</span>
                </div>
                <h3 className="text-white font-semibold">Exchanges</h3>
              </div>
              <p className="text-2xl font-bold text-white">
                {formatNumber(coin.numberOfExchanges)}
              </p>
            </div>
          </div>

          {/* Description Section */}
          {coin.description && (
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 mb-8">
              <h2
                className="text-2xl font-bold text-white mb-4"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                About {coin.name}
              </h2>
              <div
                className="text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: coin.description }}
                style={{ fontFamily: "Inter, sans-serif" }}
              />
            </div>
          )}

          {/* Links Section */}
          {coin.links && coin.links.length > 0 && (
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
              <h2
                className="text-2xl font-bold text-white mb-6"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Official Links
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {coin.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300 group"
                  >
                    <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                      <span className="text-emerald-400">🔗</span>
                    </div>
                    <div>
                      <p className="text-white font-medium capitalize">
                        {link.name}
                      </p>
                      <p className="text-gray-400 text-sm">{link.type}</p>
                    </div>
                    <svg
                      className="w-4 h-4 text-gray-400 ml-auto group-hover:text-emerald-400 transition-colors duration-300"
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
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CryptoDetails;
