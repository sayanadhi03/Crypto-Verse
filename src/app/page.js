import Image from "next/image";
import Link from "next/link";
import Navbar from "./../components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import GlobalStats from "@/components/GlobalStats";
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

            {/* Global Crypto Stats */}
            <div className="mb-16">
              <GlobalStats />
            </div>
          </div>
        </WavyBackground>
        <Footer />
      </div>
    </>
  );
}
