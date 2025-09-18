"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { useRouter } from "next/navigation";
import { useGetCryptoDetailsQuery } from "@/services/cryptoApi";

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

export default function ExpandableCryptoCards({ coins }) {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);
  const router = useRouter();

  // Fetch coin details when a card is active
  const { data: coinDetails, isFetching: isFetchingDetails } =
    useGetCryptoDetailsQuery(active?.uuid, {
      skip: !active?.uuid,
    });

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      // Always reset overflow when component unmounts or active changes
      document.body.style.overflow = "auto";
    };
  }, [active]);

  // Additional useEffect to ensure body overflow is reset on component unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useOutsideClick(ref, () => setActive(null));

  const formatCurrency = (value) => {
    if (!value) return "N/A";
    const num = parseFloat(value);
    if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`;
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`;
    return `$${num.toFixed(2)}`;
  };

  const formatPercentage = (value) => {
    if (!value) return "0.00";
    return parseFloat(value).toFixed(2);
  };

  const handleViewDetails = (coinUuid) => {
    // Reset body overflow and close modal before navigation
    document.body.style.overflow = "auto";
    setActive(null);
    // Small delay to ensure state is reset before navigation
    setTimeout(() => {
      router.push(`/crypto/${coinUuid}`);
    }, 100);
  };

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.name}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-8 w-8 z-50"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.name}-${id}`}
              ref={ref}
              className="w-full max-w-[600px] h-fit max-h-[90%] flex flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 sm:rounded-3xl overflow-hidden border border-white/20 backdrop-blur-lg"
            >
              {/* Header with coin icon and basic info */}
              <div className="relative p-6 bg-gradient-to-r from-orange-500/10 to-pink-500/10">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div layoutId={`image-${active.name}-${id}`}>
                    <img
                      src={active.iconUrl}
                      alt={`${active.name} logo`}
                      className="w-16 h-16 rounded-full"
                      onError={(e) => {
                        const letter = active.symbol?.[0]?.toUpperCase() || "?";
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
                  </motion.div>
                  <div className="flex-1">
                    <motion.h3
                      layoutId={`title-${active.name}-${id}`}
                      className="text-2xl font-bold text-white"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {active.name}
                    </motion.h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-gray-300 text-lg">
                        {active.symbol}
                      </span>
                      <span className="bg-gradient-to-r from-orange-400 to-pink-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                        Rank #{active.rank}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-white mb-1">
                      {formatCurrency(active.price)}
                    </div>
                    <div
                      className={`flex items-center gap-2 ${
                        parseFloat(active.change) >= 0
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      <span>{parseFloat(active.change) >= 0 ? "↗" : "↘"}</span>
                      <span className="text-lg font-semibold">
                        {formatPercentage(active.change)}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Information */}
              <div className="p-6 space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-orange-400">💰</span>
                      <h4 className="text-gray-300 text-sm">Market Cap</h4>
                    </div>
                    <p className="text-white font-bold text-lg">
                      {formatCurrency(active.marketCap)}
                    </p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-pink-400">📊</span>
                      <h4 className="text-gray-300 text-sm">24h Volume</h4>
                    </div>
                    <p className="text-white font-bold text-lg">
                      {formatCurrency(active["24hVolume"])}
                    </p>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="space-y-4">
                  {/* Coin Description */}
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="text-yellow-400">📝</span>
                      About {active.name}
                    </h4>
                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4">
                      {isFetchingDetails ? (
                        <div className="flex items-center gap-2 text-gray-400">
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-orange-400 border-t-transparent"></div>
                          <span className="text-sm">
                            Loading description...
                          </span>
                        </div>
                      ) : (
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {coinDetails?.data?.coin?.description
                            ? // Remove HTML tags from description
                              coinDetails.data.coin.description.replace(
                                /<[^>]*>/g,
                                ""
                              )
                            : `${active.name} (${active.symbol}) is a cryptocurrency currently ranked #${active.rank} by market capitalization. It offers innovative blockchain solutions and has gained significant attention in the digital asset space.`}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="pt-4 border-t border-white/10"
                >
                  <button
                    onClick={() => handleViewDetails(active.uuid)}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    View Full Details
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
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {coins.map((coin, index) => (
          <motion.div
            layoutId={`card-${coin.name}-${id}`}
            key={coin.uuid}
            onClick={() => setActive(coin)}
            className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-orange-400/50 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 ease-out cursor-pointer relative overflow-hidden"
            style={{
              animationDelay: `${index * 50}ms`,
            }}
          >
            {/* Hover Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-orange-500/5 group-hover:via-pink-500/5 group-hover:to-purple-500/5 transition-all duration-700 ease-out rounded-2xl"></div>

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <motion.div layoutId={`image-${coin.name}-${id}`}>
                    <img
                      src={coin.iconUrl}
                      alt={`${coin.name} logo`}
                      className="w-12 h-12 rounded-full group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out"
                      onError={(e) => {
                        const letter = coin.symbol?.[0]?.toUpperCase() || "?";
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
                  </motion.div>
                  <div className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-400 to-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ease-out">
                    {coin.rank}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <motion.h3
                    layoutId={`title-${coin.name}-${id}`}
                    className="text-white font-bold text-lg truncate group-hover:text-orange-300 transition-colors duration-300"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {coin.name}
                  </motion.h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {coin.symbol}
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="mb-4">
                <div className="text-2xl font-bold text-white group-hover:text-orange-200 transition-colors duration-300">
                  {formatCurrency(coin.price)}
                </div>
                <div
                  className={`flex items-center gap-1 mt-1 ${
                    parseFloat(coin.change) >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  <span className="text-sm">
                    {parseFloat(coin.change) >= 0 ? "↗" : "↘"}
                  </span>
                  <span className="text-sm font-semibold">
                    {formatPercentage(coin.change)}%
                  </span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Market Cap:</span>
                  <span className="text-white font-medium">
                    {formatCurrency(coin.marketCap)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">24h Volume:</span>
                  <span className="text-white font-medium">
                    {formatCurrency(coin["24hVolume"])}
                  </span>
                </div>
              </div>

              {/* Expand Indicator */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center justify-center text-gray-400 group-hover:text-orange-400 transition-colors duration-300">
                  <span className="text-xs font-medium mr-2">
                    Click to expand
                  </span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
