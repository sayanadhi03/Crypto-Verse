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

  // Debug: Log the article structure to understand the data
  console.log("Article data structure:", article);

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
    url: article.url || article.link || article.source_url || "#",
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

  return (
    <div
      className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20 animate-slideInUp"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="flex flex-col h-full">
        {/* Source and Date */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
              <span className="text-emerald-400 text-sm font-bold">📰</span>
            </div>
            <span className="text-emerald-400 font-medium text-sm">
              {articleData.publisher}
            </span>
          </div>
          <span className="text-gray-400 text-xs">
            {formatDate(articleData.date)}
          </span>
        </div>

        {/* Article Image */}
        {articleData.thumbnail && (
          <div className="mb-4 overflow-hidden rounded-xl">
            <img
              src={articleData.thumbnail}
              alt={articleData.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        )}

        {/* Article Content */}
        <div className="flex-1 flex flex-col">
          <h3
            className="text-white font-bold text-lg mb-3 line-clamp-2 group-hover:text-emerald-400 transition-colors duration-300"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            {formatTitle(articleData.title)}
          </h3>

          <p
            className="text-gray-300 text-sm mb-4 line-clamp-3 flex-1"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {articleData.description}
          </p>

          {/* Read More Button */}
          <Link
            href={articleData.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium text-sm transition-colors duration-300 mt-auto group/link"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Read Full Article
            <svg
              className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300"
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
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
