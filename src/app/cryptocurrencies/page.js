"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CryptocurrencyCard from "../../components/CryptocurrencyCard";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination";

const Cryptocurrencies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isPageChanging, setIsPageChanging] = useState(false);
  const itemsPerPage = 20; // Show 20 cryptocurrencies per page
  const totalCryptos = 100; // Fetch more data for pagination

  const {
    data: cryptosList,
    isFetching,
    error,
  } = useGetCryptosQuery(totalCryptos);

  // Filter cryptocurrencies based on search term
  const filteredCryptos =
    cryptosList?.data?.coins?.filter(
      (coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  // Calculate pagination
  const totalPages = Math.ceil(filteredCryptos.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCryptos = filteredCryptos.slice(startIndex, endIndex);

  // Reset to first page when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Handle page change with loading state and scroll to top
  const handlePageChange = (newPage) => {
    if (newPage === currentPage) return;

    setIsPageChanging(true);

    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Simulate loading delay and then change page
    setTimeout(() => {
      setCurrentPage(newPage);
      setIsPageChanging(false);
    }, 500); // 500ms delay for smooth transition
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("ellipsis");
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push("ellipsis");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("ellipsis");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("ellipsis");
        pageNumbers.push(totalPages);
      }
    }
    return pageNumbers;
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black pt-8 pb-20 relative overflow-hidden">
        {/* Professional Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/5 via-transparent to-cyan-900/5 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-8 lg:mb-12">
            <h1
              className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              All Cryptocurrencies
            </h1>
            <p
              className="text-lg text-gray-300 max-w-2xl mx-auto"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Explore the complete list of cryptocurrencies with real-time data
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8 lg:mb-12">
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search cryptocurrencies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
                  style={{ fontFamily: "Inter, sans-serif" }}
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Loading State */}
          {isFetching && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 animate-pulse"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-white/10 rounded"></div>
                      <div className="h-3 bg-white/10 rounded w-2/3"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-6 bg-white/10 rounded"></div>
                    <div className="h-4 bg-white/10 rounded"></div>
                    <div className="h-4 bg-white/10 rounded w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-12">
              <div className="text-red-400 text-xl font-bold mb-4">
                Error Loading Cryptocurrencies
              </div>
              <p className="text-gray-300">
                Unable to fetch cryptocurrency data. Please try again later.
              </p>
            </div>
          )}

          {/* Cryptocurrencies Grid */}
          {!isFetching && !error && currentCryptos && !isPageChanging && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                {currentCryptos.map((coin, index) => (
                  <CryptocurrencyCard
                    key={coin.uuid}
                    coin={coin}
                    index={startIndex + index} // Adjust index for animation delay
                  />
                ))}
              </div>
            </>
          )}

          {/* Page Change Loading State */}
          {!isFetching && !error && isPageChanging && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {[...Array(itemsPerPage)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 relative overflow-hidden"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: "slideInUp 0.6s ease-out forwards",
                  }}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_2s_infinite]"></div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-white/10 rounded-full animate-pulse relative">
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-white/10 rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="h-5 bg-white/10 rounded animate-pulse"></div>
                      <div className="h-4 bg-white/10 rounded w-2/3 animate-pulse"></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="h-8 bg-white/10 rounded animate-pulse"></div>
                  </div>

                  <div className="mb-4 space-y-2">
                    <div className="h-3 bg-white/10 rounded w-1/3 animate-pulse"></div>
                    <div className="h-5 bg-white/10 rounded w-2/3 animate-pulse"></div>
                  </div>

                  <div className="mb-4 space-y-2">
                    <div className="h-3 bg-white/10 rounded w-1/3 animate-pulse"></div>
                    <div className="h-5 bg-white/10 rounded w-3/4 animate-pulse"></div>
                  </div>

                  <div className="border-t border-white/10 pt-4 space-y-2">
                    <div className="h-3 bg-white/10 rounded w-1/3 animate-pulse"></div>
                    <div className="h-4 bg-white/10 rounded w-1/2 animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!isFetching && !error && currentCryptos && !isPageChanging && (
            <>
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mb-8">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          onClick={() =>
                            handlePageChange(Math.max(1, currentPage - 1))
                          }
                          className={`cursor-pointer ${
                            currentPage === 1
                              ? "opacity-50 cursor-not-allowed"
                              : "hover:bg-white/10"
                          }`}
                        />
                      </PaginationItem>

                      {getPageNumbers().map((pageNum, index) => (
                        <PaginationItem key={index}>
                          {pageNum === "ellipsis" ? (
                            <PaginationEllipsis />
                          ) : (
                            <PaginationLink
                              onClick={() => handlePageChange(pageNum)}
                              isActive={currentPage === pageNum}
                              className={`cursor-pointer ${
                                currentPage === pageNum
                                  ? "bg-emerald-500 text-white"
                                  : "hover:bg-white/10 text-white"
                              }`}
                            >
                              {pageNum}
                            </PaginationLink>
                          )}
                        </PaginationItem>
                      ))}

                      <PaginationItem>
                        <PaginationNext
                          onClick={() =>
                            handlePageChange(
                              Math.min(totalPages, currentPage + 1)
                            )
                          }
                          className={`cursor-pointer ${
                            currentPage === totalPages
                              ? "opacity-50 cursor-not-allowed"
                              : "hover:bg-white/10"
                          }`}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}

              {/* Results Counter */}
              <div className="text-center mt-8">
                <p
                  className="text-gray-400"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Showing {startIndex + 1}-
                  {Math.min(endIndex, filteredCryptos.length)} of{" "}
                  {filteredCryptos.length} cryptocurrencies
                  {searchTerm && (
                    <span className="ml-2 text-emerald-400">
                      (filtered from {cryptosList?.data?.coins?.length} total)
                    </span>
                  )}
                </p>
                <p
                  className="text-sm text-gray-500 mt-2"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Page {currentPage} of {totalPages}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cryptocurrencies;
