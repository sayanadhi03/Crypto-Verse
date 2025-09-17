"use client";
import React from "react";
import Link from "next/link";

const NewsCard = ({ article, index }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString || new Date().toISOString());
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatTitle = (title) => {
    if (!title) return "Untitled Article";
    // Remove common site suffixes and clean title
    return title
      .replace(
        /\s*-\s*(Reuters|Bloomberg|CoinDesk|CoinTelegraph|.*\.com).*$/i,
        ""
      )
      .trim();
  };

  // Handle different possible data structures
  const articleData = {
    title:
      article.title || article.headline || article.name || "Untitled Article",
    description:
      article.description ||
      article.excerpt ||
      article.summary ||
      article.content ||
      "No description available",
    url:
      article.url ||
      article.link ||
      article.source_url ||
      article.web_url ||
      article.uri ||
      "#",
    thumbnail:
      article.thumbnail ||
      article.urlToImage ||
      article.image ||
      (typeof article.media === "string"
        ? article.media
        : article.media?.url) ||
      null,
    publisher:
      (typeof article.publisher === "object"
        ? article.publisher?.name
        : article.publisher) ||
      (typeof article.source === "object"
        ? article.source?.name
        : article.source) ||
      article.author ||
      "News Source",
    date:
      article.date ||
      article.publishedAt ||
      article.published_at ||
      new Date().toISOString(),
  };

  // Validate URL and make sure it's not empty or just "#"
  const isValidUrl =
    articleData.url &&
    articleData.url !== "#" &&
    articleData.url !== "" &&
    (articleData.url.startsWith("http://") ||
      articleData.url.startsWith("https://"));

  const finalUrl = isValidUrl ? articleData.url : null;

  const handleCardClick = () => {
    if (finalUrl) {
      window.open(finalUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/20 animate-slideInUp cursor-pointer relative overflow-hidden"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
      onClick={handleCardClick}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-emerald-500/5 group-hover:via-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-700 ease-out rounded-2xl"></div>

      <div className="flex flex-col h-full relative z-10">
        {/* Source and Date */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3 group-hover:scale-105 transition-transform duration-300">
            <div className="w-8 h-8 bg-emerald-500/20 group-hover:bg-emerald-500/40 rounded-full flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
              <span className="text-emerald-400 group-hover:text-emerald-300 text-sm font-bold transition-colors duration-300">
                📰
              </span>
            </div>
            <span className="text-emerald-400 group-hover:text-emerald-300 font-medium text-sm transition-colors duration-300">
              {articleData.publisher}
            </span>
          </div>
          <span className="text-gray-400 group-hover:text-gray-300 text-xs transition-colors duration-300">
            {formatDate(articleData.date)}
          </span>
        </div>

        {/* Article Image */}
        {articleData.thumbnail && (
          <div className="mb-4 overflow-hidden rounded-xl group-hover:shadow-lg group-hover:shadow-emerald-500/20 transition-all duration-500">
            <img
              src={articleData.thumbnail}
              alt={articleData.title}
              className="w-full h-48 object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-out"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            {/* Image Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/0 to-transparent group-hover:from-emerald-500/20 transition-all duration-500"></div>
          </div>
        )}

        {/* Article Content */}
        <div className="flex-1 flex flex-col">
          <h3
            className="text-white font-bold text-lg mb-3 line-clamp-2 group-hover:text-emerald-400 transition-all duration-300 group-hover:scale-105 origin-left"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            {formatTitle(articleData.title)}
          </h3>

          <p
            className="text-gray-300 group-hover:text-gray-200 text-sm mb-4 line-clamp-3 flex-1 transition-colors duration-300"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {articleData.description}
          </p>

          {/* Read More Button */}
          {finalUrl ? (
            <a
              href={finalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium text-sm transition-all duration-300 mt-auto group/link px-3 py-2 rounded-lg hover:bg-emerald-500/10 hover:scale-105"
              style={{ fontFamily: "Montserrat, sans-serif" }}
              onClick={(e) => {
                e.stopPropagation();
                if (finalUrl) {
                  window.open(finalUrl, "_blank", "noopener,noreferrer");
                }
              }}
            >
              <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                Read Full Article
              </span>
              <svg
                className="w-4 h-4 group-hover/link:translate-x-2 group-hover/link:scale-110 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          ) : (
            <div className="inline-flex items-center gap-2 text-gray-500 font-medium text-sm mt-auto px-3 py-2 rounded-lg cursor-not-allowed">
              <span>Article Link Unavailable</span>
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
                  d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L5.636 5.636"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Floating particles effect */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-2xl">
          <div
            className="absolute top-1/4 left-1/4 w-1 h-1 bg-emerald-400/0 group-hover:bg-emerald-400/60 rounded-full group-hover:animate-ping transition-all duration-500"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/4 w-1 h-1 bg-cyan-400/0 group-hover:bg-cyan-400/60 rounded-full group-hover:animate-ping transition-all duration-500"
            style={{ animationDelay: "0.3s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-blue-400/0 group-hover:bg-blue-400/60 rounded-full group-hover:animate-ping transition-all duration-500"
            style={{ animationDelay: "0.6s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
