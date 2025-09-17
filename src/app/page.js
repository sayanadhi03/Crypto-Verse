import Image from "next/image";
import Link from "next/link";
import Navbar from "./../components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import GlobalStats from "@/components/GlobalStats";
import FuzzyText from "@/components/FuzzyText";
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
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 relative z-10 py-4 sm:py-8">
            <div
              className="min-h-[80px] sm:min-h-[120px] lg:min-h-[180px] flex items-center justify-center"
              style={{ contain: "layout" }}
            >
              <div className="text-center w-full flex justify-center">
                <div className="mb-6 sm:mb-8 lg:mb-12">
                  <FuzzyText
                    fontSize="clamp(1rem, 4vw, 4.5rem)"
                    fontWeight={900}
                    fontFamily="Space Grotesk, Inter, sans-serif"
                    color="#ffffff"
                    enableHover={true}
                    baseIntensity={0.18}
                    hoverIntensity={0.5}
                  >
                    Welcome to Crypto Verse
                  </FuzzyText>
                </div>
              </div>
            </div>

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
