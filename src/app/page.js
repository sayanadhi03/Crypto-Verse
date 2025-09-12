import Image from "next/image";
import Link from "next/link";
import Navbar from "./../components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <WavyBackground
          className="min-h-screen pt-8 pb-20"
          colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]}
          waveWidth={50}
          backgroundFill="#0f172a"
          blur={10}
          speed="slow"
          waveOpacity={0.5}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8">
            <h1
              className="text-3xl sm:text-4xl lg:text-6xl font-black mb-12 sm:mb-20 text-center bg-gradient-to-r from-slate-200 via-white to-slate-300 bg-clip-text text-transparent tracking-tight leading-tight"
              style={{
                fontFamily: "Inter, system-ui, -apple-system, sans-serif",
              }}
            >
              Welcome to{" "}
              <span
                className="block sm:inline bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent font-extrabold"
                style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
              >
                Crypto Verse
              </span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center mb-8 sm:mb-12">
              <Card
                title="Cryptocurrencies"
                description="Browse all cryptocurrencies and their current market data"
                href="/cryptocurrencies"
                icon="₿"
              />

              <Card
                title="Exchanges"
                description="Top cryptocurrency exchanges with trading volumes"
                href="/exchanges"
                icon="🏪"
              />

              <Card
                title="Crypto News"
                description="Latest cryptocurrency news and market updates"
                href="/news"
                icon="📰"
              />
            </div>

            {/* Example crypto details link */}
            <div className="text-center">
              <p
                className="text-gray-300 mb-6 text-base sm:text-xl font-medium tracking-wide"
                style={{ fontFamily: "Poppins, Inter, sans-serif" }}
              >
                Explore individual cryptocurrencies:
              </p>
              <Link
                href="/crypto/bitcoin"
                className="inline-block bg-gradient-to-r from-orange-500 via-red-500 to-yellow-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold hover:from-orange-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-2xl text-sm sm:text-lg tracking-wide hover:shadow-orange-500/25"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                🚀 Bitcoin Details →
              </Link>
            </div>
          </div>
        </WavyBackground>
        <Footer />
      </div>
    </>
  );
}
