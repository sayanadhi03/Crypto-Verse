"use client";
import React from "react";
import Link from "next/link";

const CryptocurrencyCard = ({ coin, index }) => {
  const formatCurrency = (value) => {
    if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
    if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
    if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
    if (value >= 1e3) return `$${(value / 1e3).toFixed(2)}K`;
    return `$${parseFloat(value).toFixed(2)}`;
  };

  const formatPrice = (price) => {
    const numPrice = parseFloat(price);
    if (numPrice >= 1) return `$${numPrice.toFixed(2)}`;
    if (numPrice >= 0.01) return `$${numPrice.toFixed(4)}`;
    return `$${numPrice.toFixed(8)}`;
  };

  const formatPercentage = (change) => {
    const numChange = parseFloat(change);
    return numChange ? numChange.toFixed(2) : "0.00";
  };

  return (
    <Link href={`/crypto/${coin.uuid}`} className="block group">
      <div
        className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-emerald-400/50 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer animate-slideInUp"
        style={{
          animationDelay: `${index * 50}ms`,
          animationFillMode: "forwards",
        }}
      >
        {/* Header with Logo and Name */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <img
              src={coin.iconUrl}
              alt={`${coin.name} logo`}
              className="w-12 h-12 rounded-full group-hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/48/64748b/ffffff?text=${coin.symbol[0]}`;
              }}
            />
            <div className="absolute -top-1 -right-1 bg-gradient-to-r from-emerald-400 to-cyan-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {coin.rank}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3
              className="text-lg font-bold text-white truncate group-hover:text-emerald-400 transition-colors duration-300"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              {coin.name}
            </h3>
            <p
              className="text-sm text-gray-400 font-medium"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {coin.symbol}
            </p>
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div
            className="text-2xl font-bold text-white"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            {formatPrice(coin.price)}
          </div>
        </div>

        {/* Market Cap */}
        <div className="mb-4">
          <div
            className="text-sm text-gray-400 uppercase tracking-wider font-medium mb-1"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Market Cap
          </div>
          <div
            className="text-lg font-semibold text-gray-200"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {coin.marketCap ? formatCurrency(coin.marketCap) : "N/A"}
          </div>
        </div>

        {/* Daily Change */}
        <div className="mb-4">
          <div
            className="text-sm text-gray-400 uppercase tracking-wider font-medium mb-1"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            24h Change
          </div>
          <div
            className={`flex items-center gap-2 text-lg font-bold ${
              parseFloat(coin.change) >= 0 ? "text-emerald-400" : "text-red-400"
            }`}
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <span className="text-xl">
              {parseFloat(coin.change) >= 0 ? "↗" : "↘"}
            </span>
            <span>{formatPercentage(coin.change)}%</span>
          </div>
        </div>

        {/* Volume */}
        <div className="border-t border-white/10 pt-4">
          <div
            className="text-sm text-gray-400 uppercase tracking-wider font-medium mb-1"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            24h Volume
          </div>
          <div
            className="text-sm font-semibold text-gray-300"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {coin["24hVolume"] ? formatCurrency(coin["24hVolume"]) : "N/A"}
          </div>
        </div>

        {/* Hover Indicator */}
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
            <span>View Details</span>
            <svg
              className="w-4 h-4"
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
      </div>
    </Link>
  );
};

export default CryptocurrencyCard;
