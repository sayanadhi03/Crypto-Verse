"use client";
import React, { useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";
import NewsCard from "../../components/NewsCard";
import { useGetCryptoNewsQuery } from "../../services/newsApi";

const News = () => {
  const [newsCategory, setNewsCategory] = useState("cryptocurrency");
  const [count, setCount] = useState(20);

  const {
    data: news,
    isFetching,
    error,
  } = useGetCryptoNewsQuery({
    category: newsCategory,
    count,
  });

  const categories = [
    { key: "cryptocurrency", label: "Cryptocurrency", icon: "₿" },
    { key: "bitcoin", label: "Bitcoin", icon: "🟠" },
    { key: "ethereum", label: "Ethereum", icon: "💎" },
    { key: "blockchain", label: "Blockchain", icon: "🔗" },
    { key: "defi", label: "DeFi", icon: "🏦" },
    { key: "nft", label: "NFT", icon: "🎨" },
  ];

  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(12)].map((_, index) => (
        <div
          key={index}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 relative overflow-hidden animate-slideInUp"
          style={{
            animationDelay: `${index * 50}ms`,
          }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_2s_infinite]"></div>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-white/10 rounded-full animate-pulse"></div>
            <div className="h-4 bg-white/10 rounded w-24 animate-pulse"></div>
          </div>
          <div className="h-48 bg-white/10 rounded-xl mb-4 animate-pulse"></div>
          <div className="space-y-3">
            <div className="h-6 bg-white/10 rounded w-full animate-pulse"></div>
            <div className="h-6 bg-white/10 rounded w-3/4 animate-pulse"></div>
            <div className="h-4 bg-white/10 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-white/10 rounded w-2/3 animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );

  if (error) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-8 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📰</div>
              <h2
                className="text-2xl font-bold text-white mb-4"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Unable to Load News
              </h2>
              <p
                className="text-gray-400 mb-6"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                There was an error loading the latest crypto news. Please try
                again later.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-300"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Retry
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12 animate-fadeIn">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Crypto News
            </h1>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Stay updated with the latest cryptocurrency news, market analysis,
              and blockchain developments from around the world.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setNewsCategory(category.key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    newsCategory === category.key
                      ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                      : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <span>{category.icon}</span>
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results Counter */}
          {!isFetching && news && (
            <div className="mb-8 text-center">
              <p
                className="text-gray-400"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Showing{" "}
                {news?.articles?.length ||
                  news?.data?.length ||
                  news?.results?.length ||
                  0}{" "}
                latest articles about{" "}
                <span className="text-emerald-400 font-medium">
                  {categories.find((cat) => cat.key === newsCategory)?.label}
                </span>
              </p>
            </div>
          )}

          {/* News Grid */}
          {isFetching ? (
            <LoadingSkeleton />
          ) : news?.articles?.length > 0 ||
            news?.data?.length > 0 ||
            news?.results?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(news.articles || news.data || news.results || []).map(
                (article, index) => (
                  <NewsCard
                    key={article.url || article.link || index}
                    article={article}
                    index={index}
                  />
                )
              )}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📰</div>
              <h2
                className="text-2xl font-bold text-white mb-4"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                No News Found
              </h2>
              <p
                className="text-gray-400"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                No news articles found for the selected category. Try a
                different category.
              </p>
              {error && (
                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-400 text-sm">
                    Error: {error?.status} -{" "}
                    {error?.data?.message ||
                      error?.error ||
                      "Failed to fetch news"}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Load More Button */}
          {!isFetching &&
            (news?.articles?.length >= count ||
              news?.data?.length >= count ||
              news?.results?.length >= count) && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setCount((prev) => prev + 20)}
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-2xl font-bold hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/25"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Load More News 📰
                </button>
              </div>
            )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default News;
