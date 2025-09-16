import React from "react";
import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-8 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
            >
              About{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                Crypto Verse
              </span>
            </h1>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "Poppins, Inter, sans-serif" }}
            >
              Your ultimate destination for cryptocurrency insights, market
              data, and the latest news in the digital asset revolution.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h2
                className="text-3xl font-bold text-white mb-6"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Our Mission
              </h2>
              <p
                className="text-gray-300 leading-relaxed text-lg"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                To democratize access to cryptocurrency information and empower
                individuals to make informed decisions in the digital asset
                space. We believe in transparency, education, and innovation as
                the pillars of the crypto revolution.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h2
                className="text-3xl font-bold text-white mb-6"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Our Vision
              </h2>
              <p
                className="text-gray-300 leading-relaxed text-lg"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                To become the world&apos;s most trusted and comprehensive
                platform for cryptocurrency enthusiasts, traders, and investors
                by providing real-time data, expert analysis, and cutting-edge
                tools.
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2
              className="text-4xl font-bold text-center text-white mb-12"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-emerald-500/50 transition-colors">
                <div className="text-4xl mb-4">📊</div>
                <h3
                  className="text-xl font-semibold text-white mb-3"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Real-Time Market Data
                </h3>
                <p
                  className="text-gray-400"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Access live cryptocurrency prices, market caps, trading
                  volumes, and comprehensive market analytics.
                </p>
              </div>

              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-emerald-500/50 transition-colors">
                <div className="text-4xl mb-4">🏪</div>
                <h3
                  className="text-xl font-semibold text-white mb-3"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Exchange Information
                </h3>
                <p
                  className="text-gray-400"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Compare top cryptocurrency exchanges, trading pairs, fees, and
                  security features.
                </p>
              </div>

              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-emerald-500/50 transition-colors">
                <div className="text-4xl mb-4">📰</div>
                <h3
                  className="text-xl font-semibold text-white mb-3"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Latest News
                </h3>
                <p
                  className="text-gray-400"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Stay updated with breaking news, market analysis, and expert
                  insights from the crypto world.
                </p>
              </div>

              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-emerald-500/50 transition-colors">
                <div className="text-4xl mb-4">🔍</div>
                <h3
                  className="text-xl font-semibold text-white mb-3"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Detailed Analysis
                </h3>
                <p
                  className="text-gray-400"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  In-depth cryptocurrency profiles with technical analysis,
                  price history, and market trends.
                </p>
              </div>

              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-emerald-500/50 transition-colors">
                <div className="text-4xl mb-4">🚀</div>
                <h3
                  className="text-xl font-semibold text-white mb-3"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Modern Interface
                </h3>
                <p
                  className="text-gray-400"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Intuitive, responsive design that works seamlessly across all
                  devices and screen sizes.
                </p>
              </div>

              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-emerald-500/50 transition-colors">
                <div className="text-4xl mb-4">🔒</div>
                <h3
                  className="text-xl font-semibold text-white mb-3"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Secure & Reliable
                </h3>
                <p
                  className="text-gray-400"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Built with security and reliability at its core, ensuring your
                  data and privacy are protected.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2
              className="text-4xl font-bold text-center text-white mb-12"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Our Commitment
            </h2>
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30">
              <div className="text-center">
                <p
                  className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  At Crypto Verse, we&apos;re committed to providing accurate,
                  timely, and comprehensive cryptocurrency information. Our
                  platform is designed for everyone - from beginners taking
                  their first steps into crypto to experienced traders looking
                  for advanced market insights. We believe in the transformative
                  power of blockchain technology and digital assets, and
                  we&apos;re here to guide you through this exciting journey.
                </p>
                <div className="mt-8 flex justify-center space-x-8 text-center">
                  <div>
                    <div
                      className="text-3xl font-bold text-emerald-400"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      24/7
                    </div>
                    <div
                      className="text-gray-400"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Market Monitoring
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-3xl font-bold text-emerald-400"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      1000+
                    </div>
                    <div
                      className="text-gray-400"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Cryptocurrencies
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-3xl font-bold text-emerald-400"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      100+
                    </div>
                    <div
                      className="text-gray-400"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Exchanges
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <h2
              className="text-3xl font-bold text-white mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Ready to Explore the Crypto Universe?
            </h2>
            <p
              className="text-xl text-gray-300 mb-8"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Join thousands of crypto enthusiasts who trust Crypto Verse for
              their market insights.
            </p>
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              🚀 Start Exploring
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
