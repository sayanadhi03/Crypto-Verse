import Image from "next/image";
import Link from "next/link";
import Navbar from "./../components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import GlobalStats from "@/components/GlobalStats";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { Spotlight } from "@/components/ui/spotlight-new";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black pt-8 pb-20 relative overflow-hidden">
          {/* Spotlight Animation Background */}
          <Spotlight
            gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(180, 100%, 85%, .08) 0, hsla(180, 100%, 55%, .02) 50%, hsla(180, 100%, 45%, 0) 80%)"
            gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(160, 100%, 85%, .06) 0, hsla(160, 100%, 55%, .02) 80%, transparent 100%)"
            gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(200, 100%, 85%, .04) 0, hsla(200, 100%, 45%, .02) 80%, transparent 100%)"
            translateY={-300}
            width={600}
            height={1400}
            smallWidth={280}
            duration={8}
            xOffset={120}
          />

          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 relative z-10 py-4 sm:py-8">
            <div
              className="min-h-[80px] sm:min-h-[120px] lg:min-h-[180px] flex items-center justify-center"
              style={{ contain: "layout" }}
            >
              <div className="text-center w-full flex justify-center">
                <div className="mb-6 sm:mb-8 lg:mb-12">
                  <LayoutTextFlip
                    text="Welcome to"
                    words={[
                      "Crypto Verse",
                      "Digital Assets",
                      "Blockchain World",
                      "Crypto Future",
                    ]}
                    duration={3000}
                  />
                </div>
              </div>
            </div>

            {/* Global Crypto Stats */}
            <div className="mb-16">
              <GlobalStats />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
